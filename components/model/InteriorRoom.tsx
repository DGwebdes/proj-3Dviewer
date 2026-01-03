export default function InteriorRoom() {
    return (
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
            {/* Lighting */}
            <ambientLight intensity={0.6} />
            <directionalLight
                position={[10, 10, 5]}
                intensity={0.6}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
            />
        </>
    );
}
