import type {MetaFunction} from "@remix-run/node";
import {AdvertBar} from "~/components/AdvertBar";
import {Header} from "~/components/Header";
import {HeroSection} from "~/components/HeroSection";

export const meta: MetaFunction = () => {
    return [{title: "New Remix App"}, {name: "description", content: "Welcome to Remix!"}];
};

export default function Index() {
    return (
        <>
            <AdvertBar />
            <Header />
            <HeroSection />
        </>
    );
}
