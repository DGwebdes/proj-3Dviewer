"use client";

import { RoomProps } from "@/lib/types";

export default function Room({ type }: RoomProps) {
    return (
        <group>
            {/* Floor */}
            <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, 0, 0]}
                receiveShadow
            >
                <planeGeometry args={[20, 20]} />
                <meshStandardMaterial color="#e8e4d9" />
            </mesh>

            {/* Walls */}
            <mesh
                position={[0, 2.5, -10]}
                receiveShadow
            >
                <boxGeometry args={[20, 5, 0.2]} />
                <meshStandardMaterial color="#f5f5f0" />
            </mesh>

            <mesh
                position={[-10, 2.5, 0]}
                rotation={[0, Math.PI / 2, 0]}
                receiveShadow
            >
                <boxGeometry args={[20, 5, 0.2]} />
                <meshStandardMaterial color="#f5f5f0" />
            </mesh>

            <mesh
                position={[10, 2.5, 0]}
                rotation={[0, Math.PI / 2, 0]}
                receiveShadow
            >
                <boxGeometry args={[20, 5, 0.2]} />
                <meshStandardMaterial color="#f5f5f0" />
            </mesh>

            {/* Windows */}
            <mesh position={[0, 2.5, -9.9]}>
                <boxGeometry args={[6, 3, 0.1]} />
                <meshStandardMaterial
                    color="#87ceeb"
                    transparent
                    opacity={0.3}
                />
            </mesh>

            {type === "interior" && (
                <>
                    {/* Furniture placeholders */}
                    <mesh
                        position={[-5, 0.75, -7]}
                        castShadow
                    >
                        <boxGeometry args={[2, 1.5, 2]} />
                        <meshStandardMaterial color="#8b7355" />
                    </mesh>

                    <mesh
                        position={[5, 0.5, -8]}
                        castShadow
                    >
                        <boxGeometry args={[3, 1, 1.5]} />
                        <meshStandardMaterial color="#2c3e50" />
                    </mesh>

                    <mesh
                        position={[0, 0.25, 5]}
                        castShadow
                    >
                        <boxGeometry args={[4, 0.5, 2]} />
                        <meshStandardMaterial color="#654321" />
                    </mesh>
                </>
            )}

            {type === "exterior" && (
                <>
                    {/* Simple house exterior */}
                    <mesh
                        position={[0, 3, 0]}
                        castShadow
                    >
                        <boxGeometry args={[12, 6, 12]} />
                        <meshStandardMaterial color="#d4c5a9" />
                    </mesh>

                    <mesh
                        position={[0, 7, 0]}
                        castShadow
                    >
                        <coneGeometry args={[8.5, 3, 4]} />
                        <meshStandardMaterial color="#8b4513" />
                    </mesh>

                    {/* Ground */}
                    <mesh
                        rotation={[-Math.PI / 2, 0, 0]}
                        position={[0, -0.1, 0]}
                        receiveShadow
                    >
                        <planeGeometry args={[30, 30]} />
                        <meshStandardMaterial color="#2d5016" />
                    </mesh>

                    {/* Trees */}
                    <mesh position={[-8, 2, -10]}>
                        <cylinderGeometry args={[0.5, 0.5, 4]} />
                        <meshStandardMaterial color="#654321" />
                    </mesh>
                    <mesh position={[-8, 4.5, -10]}>
                        <sphereGeometry args={[2, 8, 8]} />
                        <meshStandardMaterial color="#228b22" />
                    </mesh>

                    <mesh position={[8, 2, -10]}>
                        <cylinderGeometry args={[0.5, 0.5, 4]} />
                        <meshStandardMaterial color="#654321" />
                    </mesh>
                    <mesh position={[8, 4.5, -10]}>
                        <sphereGeometry args={[2, 8, 8]} />
                        <meshStandardMaterial color="#228b22" />
                    </mesh>
                </>
            )}

            {/* Lighting */}
            <ambientLight intensity={0.6} />
            <directionalLight
                position={[10, 10, 5]}
                intensity={0.6}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
            />
        </group>
    );
}
