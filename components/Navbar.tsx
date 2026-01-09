import Link from "next/link";

export const Navbar = () => {
    return (
        <header className="w-full bg-base shadow-sm">
            <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
                <Link
                    href={"/"}
                    className="text-3xl font-bold text-acc3"
                >
                    Luxury Estates
                </Link>
                <Link
                    href={"/properties"}
                    className="text-acc3"
                >
                    Properties
                </Link>
            </nav>
        </header>
    );
};
