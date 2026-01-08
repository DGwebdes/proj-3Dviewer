import { Home } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
    return (
        <header className="bg-white shadow-sm border-b">
            <nav className="flex items-center justify-between gap-3 p-4">
                <Home
                    size={32}
                    className="text-violet-600"
                />
                <Link
                    href={"/"}
                    className="text-3xl font-bold text-violet-600"
                >
                    Luxury Estates
                </Link>
                <Link
                    href={"/properties"}
                    className="text-violet-600"
                >
                    Properties
                </Link>
            </nav>
        </header>
    );
};
