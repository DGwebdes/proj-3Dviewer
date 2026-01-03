import { PropertyCardProps } from "@/lib/types";
import Image from "next/image";

export default function PropertyCard({ property, onClick }: PropertyCardProps) {
    return (
        <div
            className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            onClick={onClick}
        >
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    width={500}
                    height={400}
                />

                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full font-bold text-lg text-violet-400">
                    {property.price}
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-violet-500">
                    {property.title}
                </h3>
                <p className="text-gray-600 mb-4">{property.location}</p>

                <div className="flex gap-6 mb-4 text-sm text-gray-700">
                    <span>{property.beds} Beds</span>
                    <span>{property.baths} Baths</span>
                    <span>{property.sqft} sqft</span>
                </div>

                <div className="flex flex-wrap gap-2">
                    {property.features.map((feature, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 rounded-full text-xs text-stone-600"
                        >
                            {feature}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
