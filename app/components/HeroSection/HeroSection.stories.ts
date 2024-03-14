import type {Meta, StoryObj} from "@storybook/react";
import {HeroSection} from ".";

const meta = {
    title: "components/HeroSection",
    component: HeroSection
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
