import clsx from "clsx";
import React from "react";

type AdvertBarProps = {
    className?: string;
};
const AdvertBar: React.FC<AdvertBarProps> = ({className}) => {
    return (
        <div
            className={clsx(
                "w-full after:block after:h-2 after:w-full after:content-[''] after:bg-gradient-primary",
                className
            )}
        >
            <div className="flex h-15.5 w-full flex-col items-center justify-center bg-gray">
                <p className="tracking-07 w-full text-center text-sm uppercase text-black-dim">
                    {"NEW CUSTOMERS GET 15% OFF! USE CODE "}
                    <span className="text-blue-dim">WELCOME15</span>
                </p>
            </div>
        </div>
    );
};

export default AdvertBar;
