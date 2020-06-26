import { Add, Clone, Length, Scale, Subtract, Vec3 } from '../math/vec3';

import { IVec3Like } from '../math/vec3/IVec3Like';
import { NewCamera3D } from './NewCamera3D';
import { Vec2 } from '../math/vec2';
import { Scale as Vec2Scale } from '../math/vec2';
import { Subtract as Vec2Sub } from '../math/vec2';

type Spherical = {
    radius: number;
    phi: number;
    theta: number;
};

const STATE = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, DOLLY_PAN: 3 };

export class OrbitCamera extends NewCamera3D
{
    target: IVec3Like;
    offset: IVec3Like;

    enableRotate: boolean = true;
    enableZoom: boolean = true;
    enablePan: boolean = true;

    rotateSpeed: number = 0.1;
    zoomSpeed: number = 1;
    panSpeed: number = 0.1;

    state: number = STATE.NONE;

    minDistance: number = 0;
    maxDistance: number = Infinity;

    minPolarAngle: number = 0;
    maxPolarAngle: number = Math.PI;

    minAzimuthAngle: number = -Infinity;
    maxAzimuthAngle: number = Infinity;

    autoRotate: boolean = false;
    autoRotateSpeed: number = 1;

    private sphericalDelta: Spherical = { radius: 1, phi: 0, theta: 0 };
    private sphericalTarget: Spherical = { radius: 1, phi: 0, theta: 0 };
    private spherical: Spherical = { radius: 1, phi: 0, theta: 0 };
    private panDelta: Vec3 = new Vec3();

    private rotateStart = new Vec2();
    private panStart = new Vec2();
    private dollyStart = new Vec2();

    private tempVec3: Vec3 = new Vec3();
    private tempVec2a: Vec2 = new Vec2();
    private tempVec2b: Vec2 = new Vec2();

    constructor (target: IVec3Like, x: number = 0, y: number = 0, z: number = 0, fov: number = 45, near: number = 0.1, far: number = 1000)
    {
        super(fov, near, far);

        this.type = 'OrbitCamera';

        this.position.set(x, y, z);

        this.target = target;

        const offset = Clone(this.position);

        Subtract(offset, this.target, offset);

        const spherical = this.spherical;
        const sphericalTarget = this.sphericalTarget;

        const distance = Length(offset);
        const theta = Math.atan2(offset.x, offset.z);
        const phi = Math.acos(Math.min(Math.max(offset.y / distance, -1), 1));

        spherical.radius = distance;
        spherical.theta = theta;
        spherical.phi = phi;

        sphericalTarget.radius = distance;
        sphericalTarget.theta = theta;
        sphericalTarget.phi = phi;

        this.offset = offset;
    }

    setAutoRotate (speed: number = 0): this
    {
        this.autoRotateSpeed = speed;
        this.autoRotate = (speed > 0);

        return this;
    }

    updateOrbit (): this
    {
        const spherical = this.spherical;
        const sphericalTarget = this.sphericalTarget;
        const sphericalDelta = this.sphericalDelta;

        if (this.autoRotate)
        {
            const angle = ((2 * Math.PI) / 60 / 60) * this.autoRotateSpeed;

            sphericalDelta.theta -= angle;
        }

        // apply delta
        sphericalTarget.radius *= sphericalDelta.radius;
        sphericalTarget.theta += sphericalDelta.theta;
        sphericalTarget.phi += sphericalDelta.phi;

        // apply boundaries
        sphericalTarget.theta = Math.max(this.minAzimuthAngle, Math.min(this.maxAzimuthAngle, sphericalTarget.theta));
        sphericalTarget.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, sphericalTarget.phi));
        sphericalTarget.radius = Math.max(this.minDistance, Math.min(this.maxDistance, sphericalTarget.radius));

        // ease values
        const ease = 0.25;

        spherical.phi += (sphericalTarget.phi - spherical.phi) * ease;
        spherical.theta += (sphericalTarget.theta - spherical.theta) * ease;
        spherical.radius += (sphericalTarget.radius - spherical.radius) * ease;

        // apply pan to target. As offset is relative to target, it also shifts
        const panDelta = this.panDelta;
        const target = this.target;

        Add(target, panDelta, target);

        // apply rotation to offset
        const sinPhiRadius = spherical.radius * Math.sin(Math.max(0.000001, spherical.phi));

        const offset = this.offset;

        offset.x = sinPhiRadius * Math.sin(spherical.theta);
        offset.y = spherical.radius * Math.cos(spherical.phi);
        offset.z = sinPhiRadius * Math.cos(spherical.theta);

        // Apply updated values to object
        this.position.set(
            target.x + offset.x,
            target.y + offset.y,
            target.z + offset.z
        );

        this.lookAt(target);

        // Apply inertia to values

        const inertia = 0.85;

        sphericalDelta.theta *= inertia;
        sphericalDelta.phi *= inertia;

        Scale(panDelta, inertia, panDelta);

        // Reset scale every frame to avoid applying scale multiple times
        sphericalDelta.radius = 1;

        return this;
    }

    private handleMoveRotate (x: number, y: number): void
    {
        const tempVec2a = this.tempVec2a.set(x, y);

        const tempVec2b = Vec2Sub(tempVec2a, this.rotateStart, this.tempVec2b);

        Vec2Scale(tempVec2b, this.rotateSpeed, tempVec2b);


    }

    panLeft (distance: number): this
    {
        const data = this.viewMatrix.data;

        const tempVec3 = this.tempVec3.set(data[0], data[1], data[2]);

        Scale(tempVec3, -distance, tempVec3);

        Add(this.panDelta, tempVec3, this.panDelta);

        return this;
    }

    panUp (distance: number): this
    {
        const data = this.viewMatrix.data;

        const tempVec3 = this.tempVec3.set(data[4], data[5], data[6]);

        Scale(tempVec3, distance, tempVec3);

        Add(this.panDelta, tempVec3, this.panDelta);

        return this;
    }

    pan (deltaX: number, deltaY: number): this
    {
        const { x, y, z } = this.position;
        const target = this.target;

        const tempVec3 = this.tempVec3.set(x - target.x, y - target.y, z - target.z);

        const distance = Length(tempVec3) * Math.tan((((this.fov || 45) / 2) * Math.PI) / 180.0);

        const height = 600;

        this.panLeft((2 * deltaX * distance) / height);
        this.panUp((2 * deltaY * distance) / height);

        return this;
    }

    dolly (scale: number): this
    {
        this.sphericalDelta.radius /= scale;

        return this;
    }

    startOrbit (x: number, y: number): this
    {
        if (this.enableRotate)
        {
            this.rotateStart.set(x, y);
            this.state = STATE.ROTATE;
        }

        return this;
    }

    startZoom (x: number, y: number): this
    {
        if (this.enableZoom)
        {
            this.dollyStart.set(x, y);
            this.state = STATE.DOLLY;
        }

        return this;
    }

    startPan (x: number, y: number): this
    {
        if (this.enableRotate)
        {
            this.panStart.set(x, y);
            this.state = STATE.PAN;
        }

        return this;
    }

    updateState (x: number, y: number): this
    {
        if (this.state === STATE.ROTATE)
        {
            // handleMoveRotate
        }

        return this;
    }

    stopState (): this
    {
        this.state = STATE.NONE;

        return this;
    }



}
