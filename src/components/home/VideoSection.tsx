import { Play } from "lucide-react";
import { useState } from "react";
import { heroTrophy } from "@/lib/images";
import ParallaxSection from "@/components/ParallaxSection";

const VideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <ParallaxSection bgImage={heroTrophy} className="py-32" overlay="bg-secondary/80">
      <div className="container text-center">
        <span className="text-primary font-heading font-medium text-sm uppercase tracking-widest mb-4 block">Watch</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-secondary-foreground mb-8">
          Watch Our Trophy <span className="text-primary">Manufacturing</span>
        </h2>

        {!showVideo ? (
          <button
            onClick={() => setShowVideo(true)}
            className="group relative mx-auto block"
            aria-label="Play video"
          >
            <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto group-hover:bg-primary/40 transition-all group-hover:scale-110">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
              </div>
            </div>
            <div className="absolute inset-0 rounded-full animate-ping bg-primary/20 w-24 h-24 mx-auto" />
          </button>
        ) : (
          <div className="max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="RG Trophies Manufacturing"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        )}
      </div>
    </ParallaxSection>
  );
};

export default VideoSection;
