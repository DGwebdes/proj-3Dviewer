"use client";

import { useState, ReactNode } from "react";
import { Home } from "lucide-react";
import { RoomType, Property, ViewType } from "@/lib/types";
import { properties } from "@/lib/sample-data";
import Viewer3D from "@/components/3d-viewer/Viewer3D";
import PropertyCard from "@/components/property/PropertyCard";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function RealEstateViewer(): ReactNode {
    const [view, setView] = useState<ViewType>("list");
    const [selectedProperty, setSelectedProperty] = useState<Property | null>(
        null
    );
    const [viewerType, setViewerType] = useState<RoomType | null>(null);

    const handlePropertyClick = (property: Property): void => {
        setSelectedProperty(property);
        setView("detail");
    };

    const handleView3D = (type: RoomType): void => {
        setViewerType(type);
        setView("3d");
    };

    const handleBackToList = (): void => {
        setView("list");
        setSelectedProperty(null);
    };

    const handleExit3D = (): void => {
        setView("detail");
        setViewerType(null);
    };

    if (view === "3d" && viewerType) {
        return (
            <Viewer3D
                type={viewerType}
                onExit={handleExit3D}
            />
        );
    }

    if (view === "detail" && selectedProperty) {
        return (
            <PropertyDetail
                property={selectedProperty}
                onBack={handleBackToList}
                onView3D={handleView3D}
            />
        );
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Home
                                size={32}
                                className="text-blue-600"
                            />
                            <h1 className="text-3xl font-bold">
                                Luxury Estates
                            </h1>
                        </div>
                        <div className="text-sm text-gray-600">
                            Premium Properties Collection
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-12">
                <div className="mb-8">
                    <h2 className="text-4xl font-bold mb-2">
                        Featured Properties
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Discover your dream home in immersive 3D
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((property) => (
                        <PropertyCard
                            key={property.id}
                            property={property}
                            onClick={() => handlePropertyClick(property)}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}
