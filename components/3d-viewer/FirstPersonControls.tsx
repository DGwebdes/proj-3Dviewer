"use client";
import { useEffect, useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";
import * as THREE from "three";

interface FirstPersonControlsProps {
    speed?: number;
}

export default function FirstPersonControls({
    speed = 0.1,
}: FirstPersonControlsProps) {
    const { camera, gl } = useThree();
    const controlsRef = useRef(null);
    const isUnmounting = useRef(false);

    // Movement state
    const moveState = useRef({
        forward: false,
        backward: false,
        left: false,
        right: false,
        jump: false,
    });

    const velocity = useRef(new THREE.Vector3());
    const direction = useRef(new THREE.Vector3());

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (isUnmounting.current) return;

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
                case "Space":
                    moveState.current.jump = true;
                    break;
            }
        };

        const handleKeyUp = (e: KeyboardEvent) => {
            if (isUnmounting.current) return;

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
                case "Space":
                    moveState.current.jump = false;
                    break;
            }
        };

        const handleContextLoss = () => {
            isUnmounting.current = true;
        };

        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);
        gl.domElement.addEventListener("webglcontextlost", handleContextLoss);

        return () => {
            isUnmounting.current = true;
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("keyup", handleKeyUp);
            gl.domElement.removeEventListener(
                "webglcontextlost",
                handleContextLoss
            );
        };
    }, [gl]);

    useFrame((state, delta) => {
        if (!controlsRef.current || isUnmounting.current) return;

        // const controls = controlsRef.current;
        const moveSpeed = speed * delta * 60; // Normalize for frame rate

        // Get camera direction
        camera.getWorldDirection(direction.current);
        direction.current.y = 0; // Keep movement horizontal
        direction.current.normalize();

        // Calculate right vector
        const right = new THREE.Vector3();
        right.crossVectors(camera.up, direction.current).normalize();

        // Reset velocity
        velocity.current.set(0, 0, 0);

        // Apply movement based on key states
        if (moveState.current.forward) {
            velocity.current.add(direction.current.multiplyScalar(moveSpeed));
        }
        if (moveState.current.backward) {
            velocity.current.add(direction.current.multiplyScalar(-moveSpeed));
        }
        if (moveState.current.right) {
            velocity.current.add(right.multiplyScalar(-moveSpeed));
        }
        if (moveState.current.left) {
            velocity.current.add(right.multiplyScalar(moveSpeed));
        }

        // Apply velocity to camera position
        camera.position.add(velocity.current);
    });

    return (
        <PointerLockControls
            ref={controlsRef}
            // Adjust mouse sensitivity
            pointerSpeed={1.0}
        />
    );
}
