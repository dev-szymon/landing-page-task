import {useVideoPlayer} from "~/components/VideoPlayer";

export type VideoProps = {
    className?: string;
    source: string;
    type: string;
    autoPlay: boolean;
};
const Video: React.FC<VideoProps> = ({className, autoPlay, source, type}) => {
    const {videoplayerRef, handleTimeUpdate, handlePlay} = useVideoPlayer();

    return (
        <video
            ref={videoplayerRef}
            controls={false}
            className={className}
            autoPlay={autoPlay}
            muted={true}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handlePlay}
        >
            <source src={source} type={type} />
        </video>
    );
};

export default Video;
