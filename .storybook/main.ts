import type {StorybookConfig} from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: ["../app/components/**/*.stories.@(ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
        {
            name: "@storybook/addon-styling",
            options: {
                cssLoaderOptions: {
                    importLoaders: 1
                },
                postcssLoaderOptions: {
                    implementation: require("postcss")
                }
            }
        }
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {
            builder: {
                viteConfigPath: ".storybook/storybook-vite.config.ts"
            }
        }
    },
    docs: {
        autodocs: "tag"
    }
};
export default config;
