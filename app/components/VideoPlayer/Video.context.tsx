import {
    MutableRefObject,
    PropsWithChildren,
    ReactEventHandler,
    createContext,
    useCallback,
    useContext,
    useMemo,
    useRef,
    useState
} from "react";

type VideoContextValue = {
    currentTime: number;
    isPlaying: boolean;
    handleTimeUpdate: ReactEventHandler<HTMLVideoElement>;
    handlePlay: () => void;
    handlePause: () => void;
    videoplayerRef?: MutableRefObject<HTMLVideoElement | null>;
};

const VideoContext = createContext<VideoContextValue>({
    isPlaying: false,
    currentTime: 0,
    handleTimeUpdate: () => {
        return;
    },
    handlePlay: () => {
        return;
    },
    handlePause: () => {
        return;
    }
});

const VideoContextProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const videoplayerRef = useRef<HTMLVideoElement | null>(null);
    const {current: videoplayer} = videoplayerRef;

    const handleTimeUpdate: ReactEventHandler<HTMLVideoElement> = useCallback(
        (event) => {
            const next = Math.floor(event.currentTarget.currentTime);
            if (next !== currentTime) {
                setCurrentTime(next);
                setIsPlaying(true);
            }
        },
        [currentTime]
    );

    const handlePlay = useCallback((): void => {
        videoplayer?.play();
        setIsPlaying(true);
    }, [videoplayer]);

    const handlePause = useCallback((): void => {
        videoplayer?.pause();
        setIsPlaying(false);
    }, [videoplayer]);

    const videoContextValue: VideoContextValue = useMemo(() => {
        return {
            currentTime,
            isPlaying,
            videoplayerRef,
            handlePause,
            handlePlay,
            handleTimeUpdate
        };
    }, [isPlaying, currentTime, handlePause, handlePlay, handleTimeUpdate, videoplayerRef]);

    return <VideoContext.Provider value={videoContextValue}>{children}</VideoContext.Provider>;
};
export default VideoContextProvider;

export const useVideoPlayer = (): VideoContextValue => {
    const context = useContext(VideoContext);

    if (!context || !context.videoplayerRef) {
        throw new Error("Video component should be used inside VideoContextProvider");
    }

    return context;
};
