

const Navbar = () => {

    return (
        <header className="w-full bg-white shadow-md px-6 py-4">
            <nav className="flex items-center justify-between ">
            <div className="logo">
                <img src="/src/assets/campus-crib-logo.png" alt="Campus Crib Logo" loading="lazy" width={50} height={50}  />
            </div>
                <ul className="space-x-4 flex max-md:hidden">
                    <li className="text-primary font-bold">Home</li>
                    <li className="text-black hover:text-primary">Listings</li>
                    <li className="text-black hover:text-primary">Saved Listings</li>
                    <li className="text-black hover:text-primary">Find-Roomie</li>
                </ul>
                <div className="space-x-4 flex max-md:hidden">
                    <button className="border border-primary text-primary px-4 py-2 rounded hover:bg-primary hover:text-white">Login</button>
                    <button className="bg-primary text-white px-4 py-2 rounded hover:bg-transparent hover:text-primary hover:border hover:border-primary">Sign Up</button>
                </div>
            {/* hamburger menu */}
            <div className="md:hidden">
                <button className="text-primary focus:outline-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>
            </nav>
        </header>
    )
}

export default Navbar