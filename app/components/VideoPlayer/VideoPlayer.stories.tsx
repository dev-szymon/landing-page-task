import type {Meta, StoryObj} from "@storybook/react";
import {VideoContextProvider, Video, VideoControls} from ".";
import videoSrc from "../../assets/hero-video.mp4";

const meta = {
    title: "components/VideoPlayer",
    component: Video
} satisfies Meta<typeof Video>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        type: "video/mp4",
        source: videoSrc,
        muted: true,
        autoPlay: true
    },
    render: (args) => (
        <VideoContextProvider>
            <Video {...args} />
        </VideoContextProvider>
    )
};

export const WithControls: Story = {
    args: {
        type: "video/mp4",
        source: videoSrc,
        muted: true,
        autoPlay: true
    },
    render: (args) => (
        <VideoContextProvider>
            <Video {...args} />
            <VideoControls />
        </VideoContextProvider>
    )
};
