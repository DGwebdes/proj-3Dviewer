"use client";

import { Canvas } from "@react-three/fiber";
import Room from "./Room";
import { Viewer3DProps } from "@/lib/types";
import FirstPersonControls from "./FirstPersonControls";
import { X } from "lucide-react";
import { useRef } from "react";

export default function Viewer3D({ type, onExit }: Viewer3DProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const handleExit = () => {
        // Exit pointer lock
        if (document.pointerLockElement) {
            document.exitPointerLock();
        }

        // Dispose of WebGL renderer before unmounting
        if (canvasRef.current) {
            const gl =
                canvasRef.current.getContext("webgl2") ||
                canvasRef.current.getContext("webgl");
            if (gl) {
                // Clear all WebGL resources
                gl.getExtension("WEBGL_lose_context")?.loseContext();
            }
        }

        // Small delay to allow context loss to process
        requestAnimationFrame(() => {
            onExit();
        });
    };

    return (
        <div className="fixed inset-0 z-50 bg-black">
            <button
                onClick={handleExit}
                className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm text-white p-3 rounded-lg hover:bg-white/20 transition-colors"
            >
                <X size={24} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-black/50 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm">
                Click to lock mouse • WASD or Arrow Keys to move • Mouse to look
                around
            </div>

            <div className="w-full h-full">
                <Canvas
                    ref={canvasRef}
                    camera={{ position: [0, 1.6, 8], fov: 75 }}
                    shadows
                >
                    <FirstPersonControls key={type} />
                    <Room type={type} />
                </Canvas>
            </div>
        </div>
    );
}
