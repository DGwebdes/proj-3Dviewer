"use client";

import * as THREE from "three";
import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";

interface FirstPersonControlsProps {
    speed?: number;
}

interface MoveState {
    forward: boolean;
    backward: boolean;
    left: boolean;
    right: boolean;
}

export default function FirstPersonControls({
    speed = 5,
}: FirstPersonControlsProps): null {
    const { camera } = useThree();
    const moveState = useRef<MoveState>({
        forward: false,
        backward: false,
        left: false,
        right: false,
    });
    const velocity = useRef<THREE.Vector3>(new THREE.Vector3());
    const direction = useRef<THREE.Vector3>(new THREE.Vector3());

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent): void => {
            switch (e.code) {
                case "KeyW":
                case "ArrowUp":
                    moveState.current.forward = true;
                    break;
                case "KeyS":
                case "ArrowDown":
                    moveState.current.backward = true;
                    break;
                case "KeyA":
                case "ArrowLeft":
                    moveState.current.left = true;
                    break;
                case "KeyD":
                case "ArrowRight":
                    moveState.current.right = true;
                    break;
            }
        };

        const handleKeyUp = (e: KeyboardEvent): void => {
            switch (e.code) {
                case "KeyW":
                case "ArrowUp":
                    moveState.current.forward = false;
                    break;
                case "KeyS":
                case "ArrowDown":
                    moveState.current.backward = false;
                    break;
                case "KeyA":
                case "ArrowLeft":
                    moveState.current.left = false;
                    break;
                case "KeyD":
                case "ArrowRight":
                    moveState.current.right = false;
                    break;
            }
        };

        const handleMouseMove = (e: MouseEvent): void => {
            if (document.pointerLockElement) {
                const sensitivity = 0.002;
                camera.rotation.y -= e.movementX * sensitivity;
                camera.rotation.x -= e.movementY * sensitivity;
                camera.rotation.x = Math.max(
                    -Math.PI / 2,
                    Math.min(Math.PI / 2, camera.rotation.x)
                );
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
        window.addEventListener("mousemove", handleMouseMove);

        return (): void => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [camera]);

    useFrame((state, delta): void => {
        direction.current.set(0, 0, 0);

        if (moveState.current.forward) direction.current.z -= 1;
        if (moveState.current.backward) direction.current.z += 1;
        if (moveState.current.left) direction.current.x -= 1;
        if (moveState.current.right) direction.current.x += 1;

        if (direction.current.length() > 0) {
            direction.current.normalize();
            direction.current.applyEuler(
                new THREE.Euler(0, camera.rotation.y, 0)
            );

            velocity.current.x = direction.current.x * speed * delta;
            velocity.current.z = direction.current.z * speed * delta;

            camera.position.add(velocity.current);
        }
    });

    return null;
}
