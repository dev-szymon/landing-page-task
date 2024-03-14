import clsx from "clsx";
import React from "react";
import {NavLink} from "react-router-dom";

export type NavItemProps = {
    className?: string;
    label: string;
    to: string;
};

const NavItem: React.FC<NavItemProps> = ({className, label, to}) => {
    return (
        <NavLink
            to={to}
            className={({isActive}) =>
                clsx(
                    "flex h-10 min-w-25 items-center justify-center rounded-md border border-brown-600 px-5 font-secondary text-sm uppercase tracking-07",
                    isActive
                        ? "text-black-950 bg-gray-200 font-semibold"
                        : "bg-gray text-black-850",
                    className
                )
            }
        >
            {label}
        </NavLink>
    );
};

export default NavItem;
