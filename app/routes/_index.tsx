import type {MetaFunction} from "@remix-run/node";
import {AdvertBar} from "~/components/AdvertBar";

export const meta: MetaFunction = () => {
    return [{title: "New Remix App"}, {name: "description", content: "Welcome to Remix!"}];
};

export default function Index() {
    return (
        <header>
            <AdvertBar />
        </header>
    );
}
