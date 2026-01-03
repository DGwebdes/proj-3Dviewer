import { RoomProps } from "@/lib/types";
import { Suspense } from "react";
import { Exterior } from "../model/ExteriorRoom";
import InteriorRoom from "../model/InteriorRoom";

export default function Room({ type }: RoomProps) {
    return (
        <group>
            {/* Floor */}
            <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, 0, 0]}
                receiveShadow
            >
                <planeGeometry args={[100, 100]} />
                <meshStandardMaterial color="#e8e4d9" />
            </mesh>

            {type === "interior" && (
                <Suspense fallback={<p>Loading..</p>}>
                    <InteriorRoom />
                </Suspense>
            )}

            {type === "exterior" && (
                <Suspense fallback={<p>Loading..</p>}>
                    <Exterior />
                </Suspense>
            )}
        </group>
    );
}
