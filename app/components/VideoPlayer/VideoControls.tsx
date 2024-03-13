import clsx from "clsx";
import {useRef} from "react";
import PauseSvg from "~/assets/PauseSvg";
import PlaySvg from "~/assets/PlaySvg";
import {useVideoPlayer} from "~/components/VideoPlayer";
import {displayDoubleDigits} from "~/utils/displayDoubleDigit";

type VideoControlsProps = {
    className?: string;
};
const VideoControls: React.FC<VideoControlsProps> = ({className}) => {
    const {
        progress,
        isPlaying,
        isChangingProgress,
        initProgressChange,
        endProgressChange,
        currentTime,
        handlePause,
        handlePlay,
        handleProgressUpdate
    } = useVideoPlayer();

    const progressRef = useRef<HTMLProgressElement | null>(null);
    const {current: progressElement} = progressRef;

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
            <progress
                className="flex h-2.5 w-full cursor-pointer overflow-hidden rounded-full"
                max="100"
                ref={progressRef}
                value={progress}
                onMouseDown={(event) => {
                    if (progressElement) {
                        initProgressChange();
                        const {left, width} = progressElement.getBoundingClientRect();
                        handleProgressUpdate(((event.pageX - left) / width) * 100);
                    }
                }}
                onMouseMove={
                    isChangingProgress
                        ? (event) => {
                              if (progressElement) {
                                  const {left, width} = progressElement.getBoundingClientRect();
                                  handleProgressUpdate(((event.pageX - left) / width) * 100);
                              }
                          }
                        : undefined
                }
                onMouseUp={endProgressChange}
            >
                Video Progress
            </progress>
            <div className="flex min-w-12 shrink-0 items-center justify-center">
                <span className="font-secondary text-base font-bold text-gray-lightest">
                    {`${displayDoubleDigits(Math.floor(currentTime / 60))}:${displayDoubleDigits(Math.floor(currentTime % 60))}`}
                </span>
            </div>
        </div>
    );
};

export default VideoControls;
