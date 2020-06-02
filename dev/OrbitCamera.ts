import { quat, vec3 } from 'gl-matrix';

import { Camera3D } from './Camera3D';

export class OrbitCamera extends Camera3D
{
    closestDistance: number;
    farthestDistance: number;
    orbitPoint: vec3 = vec3.fromValues(0, 0, 0);

    constructor (closest: number = 0, farthest: number = 0)
    {
        super();

        this.closestDistance = closest;
        this.farthestDistance = farthest;
    }

    getDistance (): number
    {
        return vec3.distance(this.pos, this.orbitPoint);
    }

    getOrbitPoint (): vec3
    {
        return vec3.clone(this.orbitPoint);
    }

    moveIn (distance: number): boolean
    {
        if (distance > 0)
        {
            let shift = vec3.scale(vec3.create(), this.dir, distance);
            let subPos = vec3.subtract(vec3.create(), this.pos, this.orbitPoint);
            let maxMove = vec3.length(subPos) - this.closestDistance;

            if (vec3.length(shift) <= maxMove)
            {
                vec3.add(this.pos, this.pos, shift);

                return true;
            }
        }

        return false;
    }

    moveOut (distance: number): boolean
    {
        if (distance > 0)
        {
            let negativeDistance = vec3.scale(vec3.create(), this.dir, -1);
            let shift = vec3.scale(vec3.create(), negativeDistance, distance);

            let newPos = vec3.add(vec3.create(), this.pos, shift);

            let distanceCamToOrbit = vec3.distance(newPos, this.orbitPoint);

            if (distanceCamToOrbit <= this.farthestDistance)
            {
                this.pos = newPos;

                return true;
            }
        }

        return false;
    }

    pitch (angle: number)
    {
        if (vec3.equals(this.pos, this.orbitPoint))
        {
            let q = quat.create();

            quat.setAxisAngle(q, this.left, angle);
            vec3.transformQuat(this.dir, this.dir, q);
            vec3.normalize(this.dir, this.dir);

            vec3.cross(this.up, this.dir, this.left);
            vec3.normalize(this.up, this.up);
        }
        else
        {
            vec3.subtract(this.pos, this.pos, this.orbitPoint);

            let q = quat.create();

            quat.setAxisAngle(q, this.left, angle);

            let newPos = vec3.create();
            vec3.transformQuat(newPos, this.pos, q);
            vec3.add(this.pos, newPos, this.orbitPoint);
            vec3.subtract(this.dir, this.orbitPoint, this.pos);
            vec3.normalize(this.dir, this.dir);

            // update up vector
            vec3.cross(this.up, this.dir, this.left);
            vec3.normalize(this.up, this.up);

            // update left
            vec3.cross(this.left, this.up, this.dir);
            vec3.normalize(this.left, this.left);
        }
    }

    setClosestDistance (distance: number)
    {
        if (distance >= 0 && distance <= this.farthestDistance)
        {
            this.closestDistance = distance;

            let distanceBetweenCamAndOP = this.getDistance();

            if (distanceBetweenCamAndOP < this.closestDistance)
            {
                let amt = this.closestDistance - distanceBetweenCamAndOP;

                this.moveOut(amt);
            }
        }
    }

    setDistance (distance: number)
    {
        if (distance >= this.closestDistance && distance <= this.farthestDistance)
        {
            vec3.copy(this.pos, this.orbitPoint);

            this.moveOut(distance);
        }
    }

    setFarthestDistance (distance: number)
    {
        if (distance >= this.closestDistance)
        {
            this.farthestDistance = distance;

            let distanceBetweenCamAndOP = this.getDistance();

            if (distanceBetweenCamAndOP > this.farthestDistance)
            {
                let amt = distanceBetweenCamAndOP - this.farthestDistance;

                this.moveIn(amt);
            }
        }
    }

    setOrbitPoint (x: number, y: number, z: number)
    {
        let orbitPointToCam = vec3.create();

        // vec3.multiply(orbitPointToCam, this.dir, -this.getDistance());

        this.orbitPoint[0] = x;
        this.orbitPoint[1] = y;
        this.orbitPoint[2] = z;

        vec3.add(this.pos, this.orbitPoint, orbitPointToCam);
    }

    yaw (angle: number)
    {
        if (vec3.equals(this.pos, this.orbitPoint))
        {
            let q = quat.create();

            quat.setAxisAngle(q, [0, 1, 0], angle);

            vec3.transformQuat(this.dir, this.dir, q);
            vec3.transformQuat(this.left, this.left, q);
            vec3.transformQuat(this.up, this.up, q);

            vec3.normalize(this.up, this.up);
            vec3.normalize(this.left, this.left);
            vec3.normalize(this.dir, this.dir);
        }
        else
        {
            let camPosOrbit =vec3.create();

            vec3.subtract(camPosOrbit, this.pos, this.orbitPoint);

            let q = quat.create();

            quat.setAxisAngle(q, [0, 1, 0], angle);

            let newpos = vec3.create();

            vec3.transformQuat(newpos, camPosOrbit, q);

            vec3.add(this.pos,newpos, this.orbitPoint);

            vec3.subtract(this.dir, this.orbitPoint, this.pos);
            vec3.normalize(this.dir, this.dir);

            vec3.transformQuat(this.up, this.up, q);
            vec3.normalize(this.up, this.up);

            vec3.cross(this.left, this.up, this.dir);
            vec3.normalize(this.left, this.left);
        }
    }

    setPosition (position: vec3)
    {
        let distFromNewPosToOP = vec3.distance(this.orbitPoint, position);

        if (distFromNewPosToOP >= this.closestDistance && distFromNewPosToOP <= this.farthestDistance)
        {
            this.pos[0] = position[0];
            this.pos[1] = position[1];
            this.pos[2] = position[2];

            let camPosToOrbitPoint = vec3.create();

            vec3.subtract(camPosToOrbitPoint, this.orbitPoint, this.pos);

            var tempVec = vec3.create();

            vec3.cross(tempVec, camPosToOrbitPoint, vec3.fromValues(0, 1, 0));

            if (vec3.equals([0, 0, 0],tempVec))
            {
                vec3.normalize(this.dir, camPosToOrbitPoint);
                vec3.cross(this.up, this.dir, this.left);
            }
            else
            {
                vec3.subtract(this.dir, this.orbitPoint, this.pos);
                vec3.normalize(this.dir, this.dir);
                vec3.cross(this.left, vec3.fromValues(0, 1, 0), this.dir);
                vec3.cross(this.up, this.dir, this.left);
            }
        }
    }
}
