"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
  VideoPlayerMuteButton,
  VideoPlayerPlayButton,
  VideoPlayerSeekBackwardButton,
  VideoPlayerSeekForwardButton,
  VideoPlayerTimeDisplay,
  VideoPlayerTimeRange,
  VideoPlayerVolumeRange,
} from "@/components/kibo-ui/video-player";

const VideoSection = () => {
  const videos = [
    { src: "/vid1.mp4", id: "vid1", thumbnailTime: 1 }, // 0:01 (1 second)
    { src: "/vid2.mp4", id: "vid2", thumbnailTime: 0 }, // default/0 seconds
    { src: "/vid3.mp4", id: "vid3", thumbnailTime: 2 }, // 0:02 (2 seconds)
  ];

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [posters, setPosters] = useState<string[]>(new Array(videos.length).fill(""));
  const [isMounted, setIsMounted] = useState(false);
  const [showControls, setShowControls] = useState<boolean[]>(new Array(videos.length).fill(true));

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const generateThumbnails = async () => {
      const newPosters: string[] = new Array(videos.length).fill("");

      for (let i = 0; i < videos.length; i++) {
        if (videos[i].thumbnailTime === 0) {
          continue;
        }

        try {
          // Create a new video element to capture the frame
          const tempVideo = document.createElement("video");
          tempVideo.crossOrigin = "anonymous";
          tempVideo.preload = "metadata";
          tempVideo.src = videos[i].src;
          tempVideo.muted = true;

          await new Promise<void>((resolve, reject) => {
            const handleLoadedMetadata = () => {
              tempVideo.currentTime = videos[i].thumbnailTime || 0;
            };
            
            const handleSeeked = () => {
              // Create canvas to capture the frame
              const canvas = document.createElement("canvas");
              canvas.width = tempVideo.videoWidth;
              canvas.height = tempVideo.videoHeight;
              const ctx = canvas.getContext("2d");
              if (ctx) {
                ctx.drawImage(tempVideo, 0, 0, canvas.width, canvas.height);
                const thumbnailUrl = canvas.toDataURL("image/jpeg", 0.8);
                newPosters[i] = thumbnailUrl;
                cleanup();
                resolve();
              } else {
                cleanup();
                reject(new Error("Could not get canvas context"));
              }
            };
            
            const handleError = () => {
              cleanup();
              reject(new Error("Video loading error"));
            };
            
            const cleanup = () => {
              tempVideo.removeEventListener("loadedmetadata", handleLoadedMetadata);
              tempVideo.removeEventListener("seeked", handleSeeked);
              tempVideo.removeEventListener("error", handleError);
              tempVideo.remove();
            };
            
            tempVideo.addEventListener("loadedmetadata", handleLoadedMetadata);
            tempVideo.addEventListener("seeked", handleSeeked);
            tempVideo.addEventListener("error", handleError);
            
            // Start loading
            tempVideo.load();
          });
        } catch (error) {
          console.error(`Error generating thumbnail for video ${i}:`, error);
        }
      }

      setPosters(newPosters);
      
      // Update poster attributes on video elements after thumbnails are generated
      newPosters.forEach((poster, idx) => {
        if (poster && videoRefs.current[idx]) {
          videoRefs.current[idx]!.poster = poster;
        }
      });
    };

    generateThumbnails();
  }, [isMounted]);

  return (
    <section className="relative pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "transparent  " }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="w-20 h-1 mx-auto mb-4"></div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#787878] max-w-2xl mx-auto"
          >
            <p
              className="text-lg sm:text-xl md:text-2xl font-bold mb-3 leading-tight"
              style={{ color: "#2F3C96" }}
            >
              Explore Our Platform Through These Engaging Videos
            </p>
          </motion.div>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.21, 1.11, 0.81, 0.99],
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Card Container */}
              <div
                className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border backdrop-blur-sm"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.98)",
                  borderColor: "#D0C4E2",
                  boxShadow: "0 10px 40px rgba(47, 60, 150, 0.1)",
                }}
              >
                {/* Decorative gradient overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, #2F3C96 0%, #D0C4E2 100%)",
                  }}
                />

                {/* Corner accent */}
                <div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2F3C96] via-[#D0C4E2] to-transparent opacity-60"
                />

                {/* Video Player Container */}
                <div className="relative aspect-video" suppressHydrationWarning>
                  <VideoPlayer 
                    className="overflow-hidden rounded-2xl border-0 w-full h-full"
                    onTouchStart={(e) => {
                      // Show controls on mobile tap
                      setShowControls(prev => {
                        const newState = [...prev];
                        newState[index] = true;
                        return newState;
                      });
                      // Hide controls after 4 seconds of inactivity
                      const timeoutId = setTimeout(() => {
                        setShowControls(prev => {
                          const newState = [...prev];
                          newState[index] = false;
                          return newState;
                        });
                      }, 4000);
                      // Store timeout to clear if needed
                      (e.currentTarget as any).__controlsTimeout = timeoutId;
                    }}
                  >
                    <VideoPlayerContent
                      ref={(el) => {
                        if (el) {
                          videoRefs.current[index] = el;
                          // Show controls when video starts playing
                          el.addEventListener('play', () => {
                            setShowControls(prev => {
                              const newState = [...prev];
                              newState[index] = true;
                              return newState;
                            });
                          });
                        }
                      }}
                      muted
                      preload="metadata"
                      slot="media"
                      src={video.src}
                      className="w-full h-full object-cover"
                      suppressHydrationWarning
                      playsInline
                      controls={false}
                    />
                    <VideoPlayerControlBar 
                      className={`
                        transition-opacity duration-300
                        opacity-100 md:opacity-0 md:group-hover:opacity-100
                      `}
                    >
                      <VideoPlayerPlayButton />
                      <VideoPlayerSeekBackwardButton />
                      <VideoPlayerSeekForwardButton />
                      <VideoPlayerTimeRange />
                      <VideoPlayerTimeDisplay showDuration />
                      <VideoPlayerMuteButton />
                      <VideoPlayerVolumeRange />
                    </VideoPlayerControlBar>
                  </VideoPlayer>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Glow effect on hover */}
              <div
                className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10"
                style={{
                  background: "linear-gradient(135deg, #2F3C96, #D0C4E2)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
