import React from "react";

const AdvertBar: React.FC = () => {
    return (
        <div className="w-full after:block after:h-2 after:w-full after:content-[''] after:bg-gradient-primary">
            <div className="flex h-15.5 w-full flex-col items-center justify-center bg-gray">
                <p className="w-full text-center text-sm uppercase tracking-[0.07em] text-black-dim">
                    {"NEW CUSTOMERS GET 15% OFF! USE CODE "}
                    <span className="text-blue-dim">WELCOME15</span>
                </p>
            </div>
        </div>
    );
};

export default AdvertBar;
