import clsx from "clsx";
import React, {ButtonHTMLAttributes} from "react";

type HeaderButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const HeaderButton: React.FC<HeaderButtonProps> = ({children, className}) => {
    return (
        <button
            className={clsx(
                "border-brown-600 flex h-11 min-w-11 items-center justify-center rounded-full border bg-gray text-brown",
                className
            )}
        >
            {children}
        </button>
    );
};

export default HeaderButton;
