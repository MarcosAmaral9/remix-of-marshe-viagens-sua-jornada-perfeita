import { X, Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { destinationVideos } from "./HowItWorks";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVideoIndex: number;
}

const VideoModal = ({ isOpen, onClose, initialVideoIndex }: VideoModalProps) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(initialVideoIndex);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    setCurrentVideoIndex(initialVideoIndex);
    setIsPlaying(true);
  }, [initialVideoIndex]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handlePrevious = () => {
    setCurrentVideoIndex((prev) =>
      prev === 0 ? destinationVideos.length - 1 : prev - 1
    );
    setIsPlaying(true);
  };

  const handleNext = () => {
    setCurrentVideoIndex((prev) =>
      prev === destinationVideos.length - 1 ? 0 : prev + 1
    );
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    if (currentDestination.isLocal && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowLeft") {
      handlePrevious();
    } else if (e.key === "ArrowRight") {
      handleNext();
    } else if (e.key === " ") {
      e.preventDefault();
      togglePlayPause();
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  const currentDestination = destinationVideos[currentVideoIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-4xl mx-4 animate-scale-in">
        <div className="bg-card rounded-2xl overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div>
              <h3 className="font-bold text-lg text-foreground">
                {currentDestination.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {currentDestination.dates}
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-full hover:bg-destructive/10 hover:text-destructive"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Video */}
          <div className="aspect-video bg-muted">
            {currentDestination.isLocal ? (
              <video
                ref={videoRef}
                src={currentDestination.videoUrl}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <iframe
                ref={iframeRef}
                src={currentDestination.videoUrl}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
                title={`Vídeo de ${currentDestination.name}`}
              />
            )}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between p-4 bg-muted/50">
            <Button
              variant="outline"
              onClick={handlePrevious}
              className="gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Anterior</span>
            </Button>

            <div className="flex items-center gap-4">
              {currentDestination.isLocal && (
                <Button
                  variant="default"
                  size="icon"
                  onClick={togglePlayPause}
                  className="rounded-full w-12 h-12"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5 ml-0.5" />
                  )}
                </Button>
              )}

              {/* Video indicators */}
              <div className="flex gap-1.5">
                {destinationVideos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentVideoIndex(index);
                      setIsPlaying(true);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === currentVideoIndex
                        ? "bg-primary scale-125"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              onClick={handleNext}
              className="gap-2"
            >
              <span className="hidden sm:inline">Próximo</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;