"use client";

import { PropertyDetailProps } from "@/lib/types";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Eye, Home } from "lucide-react";

export default function PropertyDetail({
    property,
    onBack,
    onView3D,
}: PropertyDetailProps) {
    const [currentImage, setCurrentImage] = useState<number>(0);

    const nextImage = (): void => {
        setCurrentImage((prev) => (prev + 1) % property.images.length);
    };

    const prevImage = (): void => {
        setCurrentImage(
            (prev) =>
                (prev - 1 + property.images.length) % property.images.length
        );
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-gray-700 hover:text-black mb-6 transition-colors"
                >
                    <ChevronLeft size={20} />
                    Back to listings
                </button>

                <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                    {/* Image Gallery */}
                    <div className="relative h-125 bg-black">
                        <Image
                            src={property.images[currentImage]}
                            alt={property.title}
                            className="w-full h-full object-cover"
                            width={800}
                            height={500}
                        />

                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full hover:bg-white transition-colors"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full hover:bg-white transition-colors"
                        >
                            <ChevronRight size={24} />
                        </button>

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {property.images.map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-2 h-2 rounded-full transition-all ${
                                        i === currentImage
                                            ? "bg-white w-8"
                                            : "bg-white/50"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h1 className="text-4xl font-bold mb-2">
                                    {property.title}
                                </h1>
                                <p className="text-xl text-gray-600">
                                    {property.location}
                                </p>
                            </div>
                            <div className="text-right">
                                <div className="text-4xl font-bold text-blue-600">
                                    {property.price}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-6 mb-8 pb-8 border-b">
                            <div>
                                <div className="text-3xl font-bold">
                                    {property.beds}
                                </div>
                                <div className="text-gray-600">Bedrooms</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold">
                                    {property.baths}
                                </div>
                                <div className="text-gray-600">Bathrooms</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold">
                                    {property.sqft}
                                </div>
                                <div className="text-gray-600">Square Feet</div>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-4">
                                About this property
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                {property.description}
                            </p>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-4">
                                Features
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {property.features.map((feature, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium"
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={() => onView3D("interior")}
                                className="flex items-center justify-center gap-3 bg-linear-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all font-semibold text-lg shadow-lg hover:shadow-xl"
                            >
                                <Eye size={24} />
                                View Interior in 3D
                            </button>

                            <button
                                onClick={() => onView3D("exterior")}
                                className="flex items-center justify-center gap-3 bg-linear-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all font-semibold text-lg shadow-lg hover:shadow-xl"
                            >
                                <Home size={24} />
                                View Exterior in 3D
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
