import React, { useEffect, useRef } from "react";
import homeVideo from "@/assets/video/homevideoo.mp4";

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
      // videoRef.current.requestFullscreen();
    }
  }, []);

  return (
    <div className="flex justify-center items-center w-full bg-white px-0 md:px-10 lg:px-20">
      <video
        ref={videoRef}
        className="w-full h-[400px] md:h-[500px] lg:h-[950px] object-cover"
        autoPlay
        muted
        loop
        src={homeVideo}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
