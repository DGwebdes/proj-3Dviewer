// Type definitions
export type ViewType = "list" | "detail" | "3d";
export type RoomType = "interior" | "exterior";

// 3D Room Component
export interface RoomProps {
    type: RoomType;
}
// 3D Viewer Component
export interface Viewer3DProps {
    type: RoomType;
    onExit: () => void;
}

export interface Property {
    id: number;
    title: string;
    price: string;
    location: string;
    beds: number;
    baths: number;
    sqft: string;
    description: string;
    images: string[];
    features: string[];
}

// Property Card Component
export interface PropertyCardProps {
    property: Property;
    onClick: () => void;
}

// Property Detail View
export interface PropertyDetailProps {
    property: Property;
    onBack: () => void;
    onView3D: (type: RoomType) => void;
}
