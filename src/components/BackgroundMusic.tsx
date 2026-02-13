import { useEffect, useRef, useState } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.3;
    const play = () => {
      audio.play().catch(() => {});
    };
    play();
    document.addEventListener("click", play, { once: true });
    return () => document.removeEventListener("click", play);
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (muted) {
      audio.play().catch(() => {});
      audio.muted = false;
    } else {
      audio.muted = true;
    }
    setMuted(!muted);
  };

  return (
    <>
      <audio ref={audioRef} src="/music/back.mp3" loop />
      <button
        onClick={toggle}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-card/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 font-casual text-sm text-foreground/70 hover:bg-card transition-colors shadow-md"
      >
        {muted ? "🔇 Play Music" : "🎵 Playing..."}
      </button>
    </>
  );
};

export default BackgroundMusic;
