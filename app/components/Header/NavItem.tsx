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
                    "font-secondary flex h-10 min-w-25 items-center justify-center rounded-md border border-gray-dark px-5 text-sm uppercase tracking-07",
                    isActive
                        ? "bg-gray-lighter font-semibold text-black-dim"
                        : "bg-gray text-black-secondary",
                    className
                )
            }
        >
            {label}
        </NavLink>
    );
};

export default NavItem;
