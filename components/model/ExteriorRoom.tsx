import React, { useMemo } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
//
import { ExteriorGLTFResult } from "./ExteriorRoom.gltf-types";

type ExteriorProps = React.ComponentProps<"group">;

export function Exterior(props: ExteriorProps) {
    const { nodes, materials } = useGLTF(
        "/models/scene.gltf"
    ) as unknown as ExteriorGLTFResult;

    // Memoize model group for performance
    const model = useMemo(
        () => (
            <group
                scale={[0.012, 0.012, 0.012]}
                position={[0, 0, 0]}
                rotation={[Math.PI / 2, Math.PI, 0]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.american_house_MARK_2_Main_0.geometry}
                    material={materials.Main}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.american_house_MARK_2_Glass_0.geometry}
                    material={materials.Glass}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.american_house_MARK_2_Objects_0.geometry}
                    material={materials.Objects}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.american_house_MARK_2_Decal_0.geometry}
                    material={materials.Decal}
                />
            </group>
        ),
        [nodes, materials]
    );

    return (
        <group
            {...props}
            dispose={null}
        >
            {/* Custom sun/sky lighting for exterior */}
            <directionalLight
                position={[10, 20, 10]}
                intensity={1.1}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-bias={-0.0005}
            />
            <ambientLight intensity={0.5} />
            {/* Optionally add a subtle fill light for shadowed areas */}
            <directionalLight
                position={[-10, 8, -10]}
                intensity={0.3}
                color="#b0d0ff"
            />
            {model}
        </group>
    );
}

useGLTF.preload("/models/scene.gltf");
