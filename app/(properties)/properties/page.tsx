"use client";
import { properties } from "@/lib/sample-data";
import PropertyCard from "@/components/property/PropertyCard";
import { useRouter } from "next/navigation";

export default function Properties() {
    const router = useRouter();
    return (
        <section className="h-dvh w-dvw">
            <div className="">Some Headlines</div>
            <div className="flex flex-col gap-4 max-w-7xl mx-auto px-4 py-12 ">
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
        </section>
    );
}
