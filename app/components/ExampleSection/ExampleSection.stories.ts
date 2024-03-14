import type {Meta, StoryObj} from "@storybook/react";
import {ExampleSection} from ".";

const meta = {
    title: "components/ExampleSection",
    component: ExampleSection
} satisfies Meta<typeof ExampleSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
