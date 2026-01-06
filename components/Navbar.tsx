import { Home } from "lucide-react";

export const Navbar = () => {
    return (
        <nav className="flex items-center gap-3 p-4">
            <Home
                size={32}
                className="text-violet-600"
            />
            <h1 className="text-3xl font-bold text-violet-600">
                Luxury Estates
            </h1>
        </nav>
    );
};
