import {useVideoPlayer} from "~/components/VideoPlayer";

export type VideoProps = {
    className?: string;
    source: string;
    type: string;
    autoPlay: boolean;
};
const Video: React.FC<VideoProps> = ({className, autoPlay, source, type}) => {
    const {videoplayerRef, handleTimeUpdate, handlePlay, setIsPlaying} = useVideoPlayer();

    return (
        <video
            ref={videoplayerRef}
            controls={false}
            className={className}
            autoPlay={autoPlay}
            muted={true}
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
