import React from "react";

interface props {
    children: React.ReactNode;
}

const Navbar: React.FC<props> = ({ children }) => {
    return (
        <>
            <div className="h-12 w-screen bg-blue-600 flex items-center justify-center mb-5">
                <h2 className="text-white font-bold text-lg">MERN SHOP</h2>
            </div>
            {children}
        </>
    );
};

export default Navbar;
