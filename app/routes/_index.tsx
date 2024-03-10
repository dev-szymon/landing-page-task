import type {MetaFunction} from "@remix-run/node";
import {Link} from "@remix-run/react";
import {AdvertBar} from "~/components/AdvertBar";
import {Badge} from "~/components/Badge";
import {Footer} from "~/components/Footer";
import {Header} from "~/components/Header";
import {HeroSection} from "~/components/HeroSection";

export const meta: MetaFunction = () => {
    return [
        {title: "Home | Landing Page"},
        {
            name: "description",
            content:
                "Lorem Ipsum Dolor Sit amet Donec cursus ligula diam, nec congue augue ultrices nec."
        }
    ];
};

export default function Index() {
    return (
        <>
            <AdvertBar />
            <Header />
            <main>
                <HeroSection />
                <div className="pt-15 pb-17.5 flex flex-col items-center px-4">
                    <Badge text="EXAMPLE SECTION" className="mb-7 text-black-secondary" />
                    <p className="mb-11 max-w-[83rem] text-center font-secondary text-[2rem] font-medium -tracking-wider text-black-secondary">
                        Lorem{" "}
                        <span className="bg-clip-text font-semibold text-transparent bg-gradient-primary">
                            ipsum dolor sit amet consectetur adipiscing elit etiam molestie ex vel
                        </span>{" "}
                        massa lacinia ultricies. Suspendisse lobortis vehicula eros, sed sodales
                        eros mollis eget. Morbi vitae libero in nunc sodales.
                    </p>
                    <Link
                        to="/"
                        className="text-brown-dark font-primary text-sm font-semibold uppercase underline tracking-07"
                    >
                        see more
                    </Link>
                </div>
            </main>
            <Footer />
        </>
    );
}
