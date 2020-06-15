import { Add, Clone, CopyFrom, Cross, Distance, Equals, Length, Normalize, Scale, Subtract, TransformQuat, UP, Vec3, ZERO } from '../src/math/vec3/index';

import { Camera3D } from './Camera3D';
import { SetAxisAngle } from '../src/math/quaternion';

export class OrbitCamera extends Camera3D
{
    closestDistance: number;
    farthestDistance: number;
    orbitPoint: Vec3 = new Vec3(0, 0, 0);

    constructor (closest: number = 0, farthest: number = 0)
    {
        super();

        this.closestDistance = closest;
        this.farthestDistance = farthest;
    }

    getDistance (): number
    {
        return Distance(this.pos, this.orbitPoint);
    }

    getOrbitPoint (): Vec3
    {
        return Clone(this.orbitPoint);
    }

    moveIn (distance: number): boolean
    {
        if (distance > 0)
        {
            let shift = Scale(this.dir, distance);
            let subPos = Subtract(this.pos, this.orbitPoint);
            let maxMove = Length(subPos) - this.closestDistance;

            if (Length(shift) <= maxMove)
            {
                Add(this.pos, shift, this.pos);

                return true;
            }
        }

        return false;
    }

    moveOut (distance: number): boolean
    {
        if (distance > 0)
        {
            let negativeDistance = Scale(this.dir, -1);
            let shift = Scale(negativeDistance, distance);

            let newPos = Add(this.pos, shift);

            let distanceCamToOrbit = Distance(newPos, this.orbitPoint);

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
        if (Equals(this.pos, this.orbitPoint))
        {
            let q = SetAxisAngle(this.left, angle);

            TransformQuat(this.dir, q, this.dir);
            // vec3.transformQuat(this.dir, this.dir, q);

            Normalize(this.dir, this.dir);
            // vec3.normalize(this.dir, this.dir);

            Cross(this.dir, this.left, this.up);
            // vec3.cross(this.up, this.dir, this.left);

            Normalize(this.up, this.up);
            // vec3.normalize(this.up, this.up);
        }
        else
        {
            Subtract(this.pos, this.orbitPoint, this.pos);
            // vec3.subtract(this.pos, this.pos, this.orbitPoint);

            // let q = quat.create();
            // quat.setAxisAngle(q, this.left, angle);

            let q = SetAxisAngle(this.left, angle);

            let newPos = TransformQuat(this.pos, q);
            // vec3.transformQuat(newPos, this.pos, q);

            Add(newPos, this.orbitPoint, this.pos);
            // vec3.add(this.pos, newPos, this.orbitPoint);

            Subtract(this.dir, this.orbitPoint, this.pos);
            // vec3.subtract(this.dir, this.orbitPoint, this.pos);

            Normalize(this.dir, this.dir);
            // vec3.normalize(this.dir, this.dir);

            // update up vector

            Cross(this.dir, this.left, this.up);
            // vec3.cross(this.up, this.dir, this.left);

            Normalize(this.up, this.up);
            // vec3.normalize(this.up, this.up);

            // update left

            Cross(this.up, this.dir, this.left);
            // vec3.cross(this.left, this.up, this.dir);

            Normalize(this.left, this.left);
            // vec3.normalize(this.left, this.left);
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
            CopyFrom(this.orbitPoint, this.pos);
            // vec3.copy(this.pos, this.orbitPoint);

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
        let orbitPointToCam = new Vec3(x, y, z);

        // vec3.multiply(orbitPointToCam, this.dir, -this.getDistance());

        // this.orbitPoint[0] = x;
        // this.orbitPoint[1] = y;
        // this.orbitPoint[2] = z;

        Add(this.orbitPoint, orbitPointToCam, this.pos);
        // vec3.add(this.pos, this.orbitPoint, orbitPointToCam);
    }

    yaw (angle: number)
    {
        if (Equals(this.pos, this.orbitPoint))
        {
            let q = SetAxisAngle(UP, angle);

            // let q = quat.create();
            // quat.setAxisAngle(q, [0, 1, 0], angle);

            TransformQuat(this.dir, q, this.dir);
            // vec3.transformQuat(this.dir, this.dir, q);

            TransformQuat(this.left, q, this.left);
            // vec3.transformQuat(this.left, this.left, q);

            TransformQuat(this.up, q, this.up);
            // vec3.transformQuat(this.up, this.up, q);

            Normalize(this.up, this.up);
            Normalize(this.left, this.left);
            Normalize(this.dir, this.dir);

            // vec3.normalize(this.up, this.up);
            // vec3.normalize(this.left, this.left);
            // vec3.normalize(this.dir, this.dir);
        }
        else
        {
            // let camPosOrbit = new Vec3();

            // vec3.subtract(camPosOrbit, this.pos, this.orbitPoint);

            let camPosOrbit = Subtract(this.pos, this.orbitPoint);

            // let q = quat.create();
            // quat.setAxisAngle(q, [0, 1, 0], angle);

            let q = SetAxisAngle(UP, angle);

            // let newpos = vec3.create();

            let newpos = TransformQuat(camPosOrbit, q);
            // vec3.transformQuat(newpos, camPosOrbit, q);

            Add(newpos, this.orbitPoint, this.pos);
            // vec3.add(this.pos,newpos, this.orbitPoint);

            Subtract(this.orbitPoint, this.pos, this.dir);
            // vec3.subtract(this.dir, this.orbitPoint, this.pos);

            Normalize(this.dir, this.dir);
            // vec3.normalize(this.dir, this.dir);

            TransformQuat(this.up, q, this.up);
            // vec3.transformQuat(this.up, this.up, q);

            Normalize(this.up, this.up);
            // vec3.normalize(this.up, this.up);

            Cross(this.up, this.dir, this.left);
            // vec3.cross(this.left, this.up, this.dir);

            Normalize(this.left, this.left);
            // vec3.normalize(this.left, this.left);
        }
    }

    setPosition (position: Vec3)
    {
        let distFromNewPosToOP = Distance(this.orbitPoint, position);

        if (distFromNewPosToOP >= this.closestDistance && distFromNewPosToOP <= this.farthestDistance)
        {
            CopyFrom(position, this.pos);
            // this.pos[0] = position[0];
            // this.pos[1] = position[1];
            // this.pos[2] = position[2];

            // let camPosToOrbitPoint = vec3.create();

            let camPosToOrbitPoint = Subtract(this.orbitPoint, this.pos);
            // vec3.subtract(camPosToOrbitPoint, this.orbitPoint, this.pos);

            // var tempVec = vec3.create();

            let tempVec = Cross(camPosToOrbitPoint, UP);
            // vec3.cross(tempVec, camPosToOrbitPoint, vec3.fromValues(0, 1, 0));

            if (Equals(ZERO, tempVec))
            {
                Normalize(camPosToOrbitPoint, this.dir);
                // vec3.normalize(this.dir, camPosToOrbitPoint);

                Cross(this.dir, this.left, this.up);
                // vec3.cross(this.up, this.dir, this.left);
            }
            else
            {
                Subtract(this.orbitPoint, this.pos, this.dir);
                // vec3.subtract(this.dir, this.orbitPoint, this.pos);

                Normalize(this.dir, this.dir);
                // vec3.normalize(this.dir, this.dir);

                Cross(UP, this.dir, this.left);
                // vec3.cross(this.left, vec3.fromValues(0, 1, 0), this.dir);

                Cross(this.dir, this.left, this.up);
                // vec3.cross(this.up, this.dir, this.left);
            }
        }
    }
}
