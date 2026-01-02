"use client";

import { Canvas } from "@react-three/fiber";
import Room from "./Room";
import { Viewer3DProps } from "@/lib/types";
import { useRef } from "react";
import FirstPersonControls from "./FirstPersonControls";
import { X } from "lucide-react";

export default function Viewer3D({ type, onExit }: Viewer3DProps) {
    const canvasRef = useRef<HTMLDivElement>(null);

    const handleCanvasClick = (): void => {
        if (canvasRef.current) {
            canvasRef.current.requestPointerLock();
        }
    };

    return (
        <div className="fixed inset-0 z-50 bg-black">
            <button
                onClick={onExit}
                className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm text-white p-3 rounded-lg hover:bg-white/20 transition-colors"
            >
                <X size={24} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-black/50 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm">
                Use WASD or Arrow Keys to move • Mouse to look around • Click to
                enable controls
            </div>

            <div
                ref={canvasRef}
                onClick={handleCanvasClick}
                className="w-full h-full"
            >
                <Canvas
                    camera={{ position: [0, 1.6, 8], fov: 75 }}
                    shadows
                >
                    <FirstPersonControls />
                    <Room type={type} />
                </Canvas>
            </div>
        </div>
    );
}
