import clsx from "clsx";
import React from "react";

type AdvertBarProps = {
    className?: string;
};
const AdvertBar: React.FC<AdvertBarProps> = ({className}) => {
    return (
        <div
            className={clsx(
                "flex h-15.5 w-full flex-col items-center justify-center bg-gray",
                className
            )}
        >
            <p className="text-black-950 w-full text-center font-primary text-sm uppercase tracking-07">
                {"NEW CUSTOMERS GET 15% OFF! USE CODE "}
                <span className="text-blue">WELCOME15</span>
            </p>
        </div>
    );
};

export default AdvertBar;
