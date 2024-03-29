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
import {noop} from "~/utils/noop";

type VideoContextValue = {
    videoplayerRef?: MutableRefObject<HTMLVideoElement | null>;
    isPlaying: boolean;
    setIsPlaying: (val: boolean) => void;
    handlePlay: () => void;
    handlePause: () => void;

    progress: number;
    isChangingProgress: boolean;
    initProgressChange: () => void;
    endProgressChange: () => void;
    handleProgressUpdate: (progress: number) => void;

    currentTime: number;
    handleTimeUpdate: ReactEventHandler<HTMLVideoElement>;
};

const VideoContext = createContext<VideoContextValue>({
    isPlaying: false,
    setIsPlaying: noop,
    handlePlay: noop,
    handlePause: noop,

    progress: 0,
    isChangingProgress: false,
    initProgressChange: noop,
    endProgressChange: noop,
    handleProgressUpdate: noop,

    currentTime: 0,
    handleTimeUpdate: () => noop
});

const VideoContextProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [progress, setProgress] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [isChangingProgress, setIsChangingProgress] = useState<boolean>(false);

    const videoplayerRef = useRef<HTMLVideoElement | null>(null);
    const {current: videoplayer} = videoplayerRef;

    const handleTimeUpdate: ReactEventHandler<HTMLVideoElement> = useCallback(
        (event) => {
            if (videoplayer) {
                const next = event.currentTarget.currentTime;
                if (next !== currentTime) {
                    setIsPlaying(true);
                    setProgress((videoplayer.currentTime / videoplayer.duration) * 100);
                    setCurrentTime(next);
                }
            }
        },
        [currentTime, videoplayer]
    );

    const handlePlay = useCallback((): void => {
        videoplayer?.play();
    }, [videoplayer]);

    const handlePause = useCallback((): void => {
        videoplayer?.pause();
    }, [videoplayer]);

    const initProgressChange = useCallback(() => {
        setIsChangingProgress(true);
        handlePause();
    }, [handlePause]);

    const handleProgressUpdate = useCallback(
        (progress: number) => {
            if (videoplayer) {
                videoplayer.currentTime = (videoplayer.duration * progress) / 100;
            }
        },
        [videoplayer]
    );

    const endProgressChange = useCallback(() => {
        setIsChangingProgress(false);
        handlePlay();
    }, [handlePlay]);

    const videoContextValue: VideoContextValue = useMemo(() => {
        return {
            videoplayerRef,
            isPlaying,
            setIsPlaying,
            handlePause,
            handlePlay,
            progress,
            isChangingProgress,
            initProgressChange,
            endProgressChange,
            handleProgressUpdate,
            currentTime,
            handleTimeUpdate
        };
    }, [
        isPlaying,
        currentTime,
        handlePause,
        progress,
        handlePlay,
        isChangingProgress,
        initProgressChange,
        endProgressChange,
        handleTimeUpdate,
        videoplayerRef,
        handleProgressUpdate
    ]);

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
