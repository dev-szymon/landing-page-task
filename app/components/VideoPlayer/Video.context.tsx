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
    isPlaying: boolean;
    setIsPlaying: (val: boolean) => void;
    videoplayerRef?: MutableRefObject<HTMLVideoElement | null>;

    currentTime: number;
    handleTimeUpdate: ReactEventHandler<HTMLVideoElement>;
    handlePlay: () => void;
    handlePause: () => void;
};

const VideoContext = createContext<VideoContextValue>({
    isPlaying: false,
    setIsPlaying: () => {
        return;
    },

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
            }
        },
        [currentTime]
    );

    const handlePlay = useCallback((): void => {
        videoplayer?.play();
    }, [videoplayer]);

    const handlePause = useCallback((): void => {
        videoplayer?.pause();
    }, [videoplayer]);

    const videoContextValue: VideoContextValue = useMemo(() => {
        return {
            isPlaying,
            setIsPlaying,
            videoplayerRef,

            currentTime,
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
