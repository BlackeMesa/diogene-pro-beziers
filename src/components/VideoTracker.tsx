import { useRef, useEffect, ReactNode } from 'react';
import { trackVideoEvent } from '@/lib/analytics';

interface VideoTrackerProps {
  videoName: string;
  children: (ref: React.RefObject<HTMLVideoElement>, handlers: any) => ReactNode;
}

const VideoTracker = ({ videoName, children }: VideoTrackerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasTrackedPlay = useRef(false);
  const hasTrackedComplete = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      if (!hasTrackedPlay.current) {
        trackVideoEvent('play', videoName);
        hasTrackedPlay.current = true;
      }
    };

    const handleEnded = () => {
      if (!hasTrackedComplete.current) {
        trackVideoEvent('complete', videoName, 100);
        hasTrackedComplete.current = true;
      }
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('ended', handleEnded);
    };
  }, [videoName]);

  return <>{children(videoRef, {})}</>;
};

export default VideoTracker;
