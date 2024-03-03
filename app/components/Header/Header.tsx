import clsx from "clsx";
import React from "react";
import NavItem, {NavItemProps} from "./NavItem";
import LogoSvg from "~/assets/LogoSvg";
import HeaderButton from "./HeaderButton";
import UserSvg from "~/assets/UserSvg";
import CartSvg from "~/assets/CartSvg";
import SearchSvg from "~/assets/SearchSvg";

export type HeaderProps = {
    className?: string;
};

const Header: React.FC<HeaderProps> = ({className}) => {
    const navItems: NavItemProps[] = [
        {label: "Home", to: "/"},
        {label: "About", to: "/about"},
        {label: "Products", to: "/products"}
    ];

    return (
        <header
            className={clsx(
                "flex h-25 items-center justify-center border-b border-gray-dark bg-gray-light",
                className
            )}
        >
            <div className="flex w-full max-w-leet items-center justify-between gap-4 px-4">
                <nav className="flex flex-1 justify-start gap-4">
                    {navItems.map((item) => (
                        <NavItem key={item.label} {...item} />
                    ))}
                </nav>

                <LogoSvg className="text-brown w-12" />

                <div className="flex flex-1 justify-end gap-5">
                    <HeaderButton>
                        <CartSvg className="w-5" />
                    </HeaderButton>
                    <HeaderButton>
                        <UserSvg className="w-5" />
                    </HeaderButton>
                    <HeaderButton>
                        <SearchSvg className="w-5" />
                    </HeaderButton>
                </div>
            </div>
        </header>
    );
};

export default Header;
