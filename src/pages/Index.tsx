import FilmStrip from "@/components/FilmStrip";
import LoveLetter from "@/components/LoveLetter";
import FebruaryCalendar from "@/components/FebruaryCalendar";
import FloatingHearts from "@/components/FloatingHearts";
import HeartBadge from "@/components/HeartBadge";
import BackgroundMusic from "@/components/BackgroundMusic";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <FloatingHearts />
      <BackgroundMusic />

      {/* Corner hearts decoration */}
      <div className="absolute top-4 left-4 text-primary/20 text-4xl select-none">♥ ♥</div>
      <div className="absolute top-4 right-4 text-primary/20 text-4xl select-none">♥ ♥</div>
      <div className="absolute bottom-4 left-4 text-primary/20 text-4xl select-none">♥</div>
      <div className="absolute bottom-4 right-4 text-primary/20 text-4xl select-none">♥</div>

      {/* Main scrapbook page */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-8 md:py-12">
        {/* Inner cream page */}
        <div className="bg-card rounded-2xl shadow-2xl p-6 md:p-10 border border-border/50">
          {/* Title */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="font-handwriting text-4xl md:text-6xl text-primary leading-tight">
              Notes on an
              <br />
              <span className="text-5xl md:text-7xl">Infinite Love</span>
            </h1>
            <div className="flex items-center justify-center gap-2 mt-3 text-muted-foreground font-casual text-lg">
              <span>♥</span>
              <span>a story written in heartbeats</span>
              <span>♥</span>
            </div>
          </div>

          {/* Content grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Left: Film strip */}
            <div className="flex flex-col items-center gap-6">
              <FilmStrip />
            </div>

            {/* Center: Love letter */}
            <div className="flex flex-col items-center gap-6">
              <LoveLetter />
              <HeartBadge />
            </div>

            {/* Right: Calendar + decorations */}
            <div className="flex flex-col items-center gap-6">
              <FebruaryCalendar />

              {/* Decorative stickers */}
              <div className="flex flex-col items-center gap-3 mt-2">
                <div
                  className="bg-secondary text-foreground/70 font-casual text-sm px-4 py-2 rounded-full shadow-sm"
                  style={{ transform: "rotate(-3deg)" }}
                >
                  You + Me = ♥
                </div>
                <div
                  className="bg-accent text-foreground/70 font-casual text-sm px-4 py-2 rounded-full shadow-sm"
                  style={{ transform: "rotate(2deg)" }}
                >
                  ✨ forever & ever ✨
                </div>
                <div className="text-4xl mt-2" style={{ animation: "sparkle 2s ease-in-out infinite" }}>
                  💕
                </div>
              </div>
            </div>
          </div>

          {/* Bottom decoration */}
          <div className="text-center mt-10 font-casual text-muted-foreground text-sm">
            made with love 💌
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
