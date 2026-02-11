import { useState, useEffect } from "react";
import photo1 from "@/assets/photo1.jpeg";
import photo2 from "@/assets/photo2.jpeg";
import photo3 from "@/assets/photo3.jpeg";
import photo4 from "@/assets/WhatsApp Image 2025-12-18 at 7.57.35 PM.jpeg";

const photos = [
  { id: 3, label: "Our first date", src: photo3 },
  { id: 2, label: "That sunset", src: photo2 },
  { id: 1, label: "Slay queen", src: photo1 },
  { id: 4, label: "Always us", src: photo4 },
];

const FilmStrip = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const photo = photos[current];

  return (
    <div className="flex flex-col items-center">
      <div className="bg-foreground/90 rounded-sm p-2 w-[220px] md:w-[160px]">
        {/* Film strip holes top */}
        <div className="flex justify-between mb-1">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-2.5 h-2.5 rounded-sm bg-background/30" />
          ))}
        </div>

        <div className="relative">
          {/* Film holes top */}
          <div className="flex justify-between mb-0.5">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-2.5 h-1.5 rounded-[1px] bg-background/30" />
            ))}
          </div>

          {/* Photo slot */}
          <div className="bg-accent aspect-[3/4] rounded-[2px] overflow-hidden mx-1">
            <img
              key={photo.id}
              src={photo.src}
              alt={photo.label}
              className="w-full h-full object-cover animate-fade-in"
            />
          </div>

          {/* Film holes bottom */}
          <div className="flex justify-between mt-0.5">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-2.5 h-1.5 rounded-[1px] bg-background/30" />
            ))}
          </div>
        </div>

        {/* Label */}
        <p className="font-casual text-background/70 text-xs text-center mt-1">{photo.label}</p>

        {/* Dots indicator */}
        <div className="flex justify-center gap-1 mt-1">
          {photos.map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? "bg-background/80" : "bg-background/30"}`}
            />
          ))}
        </div>

        {/* Film strip holes bottom */}
        <div className="flex justify-between mt-1">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-2.5 h-2.5 rounded-sm bg-background/30" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilmStrip;
