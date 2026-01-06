"use client";

import { useState, ReactNode } from "react";
import { Property } from "@/lib/types";
import { properties } from "@/lib/sample-data";
import PropertyCard from "@/components/property/PropertyCard";
import PropertyDetail from "@/components/property/PropertyDetail";
import { Navbar } from "@/components/Navbar";

export default function RealEstateViewer(): ReactNode {
    const [selectedProperty, setSelectedProperty] = useState<Property | null>(
        null
    );

    const handlePropertyClick = (property: Property): void => {
        setSelectedProperty(property);
    };

    const handleBackToList = (): void => {
        setSelectedProperty(null);
    };

    if (selectedProperty) {
        return (
            <PropertyDetail
                property={selectedProperty}
                onBack={handleBackToList}
            />
        );
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
            <header className="bg-white shadow-sm border-b">
                <Navbar />
            </header>

            <main className="max-w-7xl mx-auto px-4 py-12">
                <div className="mb-8">
                    <h2 className="text-4xl font-bold mb-2 text-violet-500">
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
