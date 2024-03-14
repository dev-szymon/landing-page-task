import clsx from "clsx";
import heroVideo from "~/assets/hero-video.mp4";
import {VideoContextProvider, Video, VideoControls} from "~/components/VideoPlayer";
import {Badge} from "~/components/Badge";

type HeroSectionProps = {
    className?: string;
};
const HeroSection: React.FC<HeroSectionProps> = ({className}) => {
    return (
        <VideoContextProvider>
            <section
                className={clsx(
                    "relative flex h-[calc(100vh-108px)] w-full justify-center overflow-hidden after:absolute after:inset-0 after:z-10 after:bg-black/55 after:content-['']",
                    className
                )}
            >
                <Video
                    source={heroVideo}
                    type="video/mp4"
                    className="w-full object-cover object-center"
                    autoPlay={true}
                    muted={true}
                />
                <div className="absolute z-20 flex h-full w-full max-w-leet flex-col justify-end gap-10 p-4 pb-[10%]">
                    <Badge text="LOREM IPSUM" className="text-white" />
                    <h1 className="font-secondary text-[45px] font-semibold leading-[57px] -tracking-wider text-gray-100">
                        <span className="block w-fit bg-clip-text text-transparent bg-gradient-primary">
                            Lorem Ipsum Dolor Sit amet
                        </span>
                        <span className="block w-fit">Donec cursus ligula diam, nec congue</span>
                        <span className="block w-fit">augue ultrices nec.</span>
                    </h1>
                    <VideoControls />
                </div>
            </section>
        </VideoContextProvider>
    );
};

export default HeroSection;
