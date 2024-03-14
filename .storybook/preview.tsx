import React from "react";
import type {Preview} from "@storybook/react";
import {createRemixStub} from "@remix-run/testing";
import "../app/styles/output.css";

const preview: Preview = {
    parameters: {
        actions: {argTypesRegex: "^on[A-Z].*"},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    },
    decorators: [
        (Story) => {
            const RemixStub = createRemixStub([
                {
                    path: "/",
                    Component: Story
                }
            ]);

            return <RemixStub />;
        }
    ]
};

export default preview;
