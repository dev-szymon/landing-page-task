import clsx from "clsx";
import PauseSvg from "~/assets/PauseSvg";
import PlaySvg from "~/assets/PlaySvg";
import {useVideoPlayer} from "~/components/VideoPlayer";
import {displayDoubleDigits} from "~/utils/displayDoubleDigit";

type VideoControlsProps = {
    className?: string;
};
const VideoControls: React.FC<VideoControlsProps> = ({className}) => {
    const {isPlaying, currentTime, videoplayerRef, handlePause, handlePlay} = useVideoPlayer();
    const {current: videoplayer} = videoplayerRef ?? {};

    return (
        <div
            className={clsx(
                "relative z-10 flex w-full items-center justify-between gap-7 rounded-[10px] border border-white border-opacity-20 bg-black bg-opacity-30 px-8 pb-6 pt-5",
                className
            )}
        >
            <button
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-darkish bg-black-tertiary text-lemon"
                onClick={isPlaying ? handlePause : handlePlay}
            >
                {isPlaying ? <PauseSvg className="w-2" /> : <PlaySvg className="w-2" />}
            </button>
            <div className="relative flex h-2.5 w-full overflow-hidden rounded-full bg-black-light transition-transform">
                <div
                    className="absolute -left-full h-full w-full bg-lemon"
                    style={{
                        transform: videoplayer
                            ? `translateX(${(currentTime / videoplayer.duration) * 100}%)`
                            : undefined
                    }}
                ></div>
            </div>
            <div className="flex min-w-12 shrink-0 items-center justify-center">
                <span className="font-secondary text-base font-bold text-gray-lightest">
                    {`${displayDoubleDigits(Math.floor(currentTime / 60))}:${displayDoubleDigits(Math.floor(currentTime % 60))}`}
                </span>
            </div>
        </div>
    );
};

export default VideoControls;
