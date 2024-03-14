import {MetaFunction} from "@remix-run/node";
import {AdvertBar} from "~/components/AdvertBar";
import {ExampleSection} from "~/components/ExampleSection";
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
                <ExampleSection />
            </main>
            <Footer />
        </>
    );
}
