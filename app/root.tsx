import {LinksFunction} from "@remix-run/node";
import {Links, Meta, Outlet, Scripts, ScrollRestoration} from "@remix-run/react";
import stylesheet from "~/styles/output.css?url";

export const links: LinksFunction = () => [
    {rel: "stylesheet", href: stylesheet},
    {as: "style", rel: "preconnect", href: "https://fonts.googleapis.com"},
    {
        as: "style",
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700;900&display=swap"
    },
    {
        as: "style",
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Exo:wght@100;300;400;500;600;700;900&display=swap"
    }
];

export function Layout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}
