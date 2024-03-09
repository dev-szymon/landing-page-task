import clsx from "clsx";
import React, {ButtonHTMLAttributes} from "react";

type HeaderButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const HeaderButton: React.FC<HeaderButtonProps> = ({children, className}) => {
    return (
        <button
            className={clsx(
                "flex h-11 min-w-11 items-center justify-center rounded-full border border-gray-dark bg-gray text-brown",
                className
            )}
        >
            {children}
        </button>
    );
};

export default HeaderButton;
