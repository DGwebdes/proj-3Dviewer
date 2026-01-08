import PropertyDetail from "@/components/property/PropertyDetail";
import { properties } from "@/lib/sample-data";
import { notFound } from "next/navigation";

export default async function PropertyPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const property = properties.find((p) => p.id == parseInt(slug));
    if (!property) {
        notFound();
    }

    return (
        <div>
            <PropertyDetail property={property} />
        </div>
    );
}
