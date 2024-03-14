import type {Meta, StoryObj} from "@storybook/react";
import {AdvertBar} from ".";

const meta = {
    title: "components/AdvertBar",
    component: AdvertBar
} satisfies Meta<typeof AdvertBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
