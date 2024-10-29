import React from "react";

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-24 h-24 border-t-8 border-l-2 border-luminous rounded-full animate-spin"></div>
        </div>
    );
};

export default Loader;
