"use client";
import { properties } from "@/lib/sample-data";
import PropertyCard from "@/components/property/PropertyCard";
import { useRouter } from "next/navigation";

export default function Properties() {
    const router = useRouter();
    return (
        <main className="min-h-dvh w-full bg-base">
            <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col">
                <div className="mb-10">
                    <h2 className="text-gray-200">Some Headline</h2>
                </div>
                <div className="flex flex-col gap-8">
                    {properties.map((property) => (
                        <PropertyCard
                            key={property.id}
                            property={property}
                            onClick={() =>
                                router.push(`/properties/${property.id}`)
                            }
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
