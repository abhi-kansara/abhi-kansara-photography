"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  aspectRatio?: "portrait" | "video";
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export default function VideoPlayer({ 
  src, 
  poster, 
  aspectRatio = "portrait", 
  className,
  autoPlay = false,
  loop = true,
  muted = true,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [hasStarted, setHasStarted] = useState(autoPlay);
  const [videoProgress, setVideoProgress] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [videoBuffered, setVideoBuffered] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(muted);
  const [showControls, setShowControls] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const controlsTimerRef = useRef<NodeJS.Timeout>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Sync with prop changes if needed
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const resetControlsTimer = useCallback(() => {
    setShowControls(true);
    if (controlsTimerRef.current) clearTimeout(controlsTimerRef.current);
    controlsTimerRef.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 3000);
  }, [isPlaying]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
      setHasStarted(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    resetControlsTimer();
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setVideoProgress(time);
    }
  };

  const handleVideoProgress = (e?: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = e ? e.currentTarget : videoRef.current;
    if (video && video.buffered.length > 0) {
      const bufferedEnd = video.buffered.end(video.buffered.length - 1);
      const duration = video.duration;
      if (duration > 0 && duration !== Infinity && !isNaN(duration)) {
        setVideoBuffered((bufferedEnd / duration) * 100);
      }
    }
  };

  const formatTime = (s: number) => {
    if (isNaN(s) || s === Infinity) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const handleVolumeChange = (val: number) => {
    setVolume(val);
    const newMuted = val === 0;
    setIsMuted(newMuted);
    if (videoRef.current) {
      videoRef.current.volume = val;
      videoRef.current.muted = newMuted;
    }
  };

  const toggleMute = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    if (videoRef.current) {
      videoRef.current.muted = newMuted;
    }
  };

  return (
    <div 
      className={cn(
        "relative w-full overflow-hidden rounded-sm group bg-black/20 border border-white/5 shadow-2xl transition-all duration-500",
        aspectRatio === "portrait" ? "aspect-2/3" : "aspect-video",
        className
      )}
      onMouseMove={resetControlsTimer}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        poster={!hasStarted ? poster : undefined}
        className="h-full w-full object-cover cursor-pointer"
        loop={loop}
        muted={isMuted}
        playsInline
        autoPlay={autoPlay}
        preload="metadata"
        onClick={togglePlay}
        onTimeUpdate={(e) => setVideoProgress(e.currentTarget.currentTime)}
        onProgress={handleVideoProgress}
        onLoadedMetadata={(e) => {
          const d = e.currentTarget.duration;
          if (d > 0 && d !== Infinity && !isNaN(d)) setVideoDuration(d);
          handleVideoProgress(e);
        }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={src} type="application/vnd.apple.mpegurl" />
        <source src={src.replace(".m3u8", ".mp4")} type="video/mp4" />
      </video>

      {/* Center Play Button Overlay */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
          >
            <button 
              onClick={(e) => { e.stopPropagation(); togglePlay(); }}
              className="pointer-events-auto h-20 w-20 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all duration-500 hover:scale-110 hover:bg-accent-gold hover:text-black hover:border-accent-gold group/btn"
            >
              <Play className="h-8 w-8 ml-1 fill-current transition-transform group-hover/btn:scale-110" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative gradient overlay */}
      <motion.div 
        animate={{ opacity: isPlaying && !showControls ? 0 : 1 }}
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none z-10" 
      />

      {/* ── Bottom Controls ── */}
      <motion.div
        initial={false}
        animate={{ 
          opacity: showControls && isPlaying ? 1 : 0, 
          y: showControls && isPlaying ? 0 : 10 
        }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 inset-x-0 z-30 px-3 sm:px-6 py-4 flex flex-col gap-3"
      >
        {/* Seek Bar */}
        <div className="flex items-center gap-3">
          <span className="text-white/50 text-[10px] sm:text-[11px] font-mono w-8 sm:w-10 text-right">
            {formatTime(videoProgress)}
          </span>
          <div className="flex-1 relative group/seek flex items-center h-4">
            <input
              type="range"
              min={0}
              max={videoDuration || 1}
              step={0.1}
              value={videoProgress}
              onChange={handleSeek}
              className="w-full h-1 relative z-20 appearance-none bg-white/10 rounded-full outline-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent-gold [&::-webkit-slider-thumb]:cursor-pointer"
            />
            {/* Buffered Bar */}
            <div
              className="absolute left-0 h-1 bg-accent-gold/25 rounded-full pointer-events-none transition-all duration-300 z-10"
              style={{ width: `${videoBuffered}%` }}
            />
            {/* Progress Bar */}
            <div
              className="absolute left-0 h-1 bg-accent-gold rounded-full pointer-events-none z-10"
              style={{ width: `${videoDuration > 0 ? (videoProgress / videoDuration) * 100 : 0}%` }}
            />
          </div>
          <span className="text-white/50 text-[10px] sm:text-[11px] font-mono w-8 sm:w-10">
            {formatTime(videoDuration)}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={togglePlay}
              className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-accent-gold hover:border-accent-gold/50 transition-all duration-300"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
            </button>

            {/* Volume */}
            <div
              className="relative flex items-center"
              onMouseEnter={() => setShowVolumeSlider(true)}
              onMouseLeave={() => setShowVolumeSlider(false)}
            >
              <button
                onClick={toggleMute}
                className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-accent-gold hover:border-accent-gold/50 transition-all duration-300"
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>
              <AnimatePresence>
                {showVolumeSlider && (
                  <motion.div
                    initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                    animate={{ opacity: 1, width: 60, marginLeft: 8 }}
                    exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                    className="relative flex items-center overflow-hidden h-8"
                  >
                    <input
                      type="range"
                      min={0}
                      max={1}
                      step={0.05}
                      value={isMuted ? 0 : volume}
                      onChange={(e) => handleVolumeChange(Number(e.target.value))}
                      className="z-10 w-full h-1 appearance-none bg-white/20 rounded-full outline-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent-gold [&::-webkit-slider-thumb]:cursor-pointer"
                    />
                    <div
                      className="absolute left-0 h-1 bg-accent-gold rounded-full pointer-events-none"
                      style={{ width: `${(isMuted ? 0 : volume) * 100}%` }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
