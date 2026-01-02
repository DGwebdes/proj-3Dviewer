import { Property } from "./types";

export const properties: Property[] = [
    {
        id: 1,
        title: "Modern Hillside Villa",
        price: "$4,850,000",
        location: "Beverly Hills, CA",
        beds: 5,
        baths: 6,
        sqft: "6,200",
        description:
            "Stunning contemporary masterpiece with panoramic city views, infinity pool, and state-of-the-art smart home technology. Floor-to-ceiling windows throughout.",
        images: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        ],
        features: ["Ocean View", "Smart Home", "Pool", "Wine Cellar"],
    },
    {
        id: 2,
        title: "Luxury Penthouse Suite",
        price: "$6,200,000",
        location: "Manhattan, NY",
        beds: 4,
        baths: 5,
        sqft: "5,400",
        description:
            "Exclusive penthouse offering unparalleled skyline views, private terrace, and custom Italian finishes. Located in the heart of the city.",
        images: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
            "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
        ],
        features: ["City Views", "Terrace", "Concierge", "Gym"],
    },
    {
        id: 3,
        title: "Beachfront Estate",
        price: "$8,900,000",
        location: "Malibu, CA",
        beds: 6,
        baths: 7,
        sqft: "8,500",
        description:
            "Spectacular oceanfront property with private beach access, resort-style amenities, and breathtaking sunset views. Complete privacy and luxury.",
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
        ],
        features: ["Beach Access", "Guest House", "Theater", "Spa"],
    },
];
