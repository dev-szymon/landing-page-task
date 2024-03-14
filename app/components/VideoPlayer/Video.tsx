import {useVideoPlayer} from "~/components/VideoPlayer";

export type VideoProps = {
    className?: string;
    source: string;
    type: string;
    autoPlay?: boolean;
    muted?: boolean;
};
const Video: React.FC<VideoProps> = ({
    className,
    autoPlay = false,
    muted = false,
    source,
    type
}) => {
    const {videoplayerRef, handleTimeUpdate, handlePlay, setIsPlaying} = useVideoPlayer();

    return (
        <video
            ref={videoplayerRef}
            controls={false}
            className={className}
            autoPlay={autoPlay}
            muted={muted}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handlePlay}
            onPlaying={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
        >
            <source src={source} type={type} />
        </video>
    );
};

export default Video;
