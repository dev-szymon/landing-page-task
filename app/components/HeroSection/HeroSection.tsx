import clsx from "clsx";
import heroVideo from "~/assets/hero-video.mp4";
import {VideoContextProvider, Video, VideoControls} from "~/components/VideoPlayer";

type HeroSectionProps = {
    className?: string;
};
const HeroSection: React.FC<HeroSectionProps> = ({className}) => {
    return (
        <VideoContextProvider>
            <section
                className={clsx(
                    "relative flex w-full justify-center overflow-hidden after:absolute after:inset-0 after:z-10 after:bg-black after:bg-opacity-55 after:content-['']",
                    className
                )}
            >
                <Video
                    source={heroVideo}
                    type="video/mp4"
                    className="w-full object-cover object-center"
                    autoPlay={true}
                />
                <div className="absolute z-20 flex h-full w-full max-w-leet flex-col justify-end gap-10 p-4 pb-[10%]">
                    <div className="w-33 flex h-11 items-center justify-center rounded-xl bg-brown font-secondary text-xs uppercase text-white">
                        LOREM IPSUM
                    </div>
                    <h1 className="text-white-milk font-secondary text-[45px] font-semibold leading-[57px] -tracking-wider">
                        <span className="block bg-clip-text text-transparent bg-gradient-primary">
                            Lorem Ipsum Dolor Sit amet
                        </span>
                        <span className="block">Donec cursus ligula diam, nec congue</span>
                        <span className="block">augue ultrices nec.</span>
                    </h1>
                    <VideoControls />
                </div>
            </section>
        </VideoContextProvider>
    );
};
export default HeroSection;
