const LoveLetter = () => {
  return (
    <div className="relative max-w-sm mx-auto">
      {/* Paper clip */}
      <div className="absolute -top-4 left-8 z-10">
        <div className="w-6 h-12 border-2 border-muted-foreground/50 rounded-full bg-transparent" />
      </div>

      {/* Note paper */}
      <div
        className="bg-card rounded-lg shadow-lg p-6 pt-10 relative"
        style={{
          backgroundImage:
            "repeating-linear-gradient(transparent, transparent 27px, hsl(var(--border)) 27px, hsl(var(--border)) 28px)",
          backgroundPositionY: "40px",
        }}
      >
        {/* Red margin line */}
        <div
          className="absolute top-0 bottom-0 left-10 w-[1px]"
          style={{ backgroundColor: "hsl(var(--primary) / 0.3)" }}
        />

        <div className="pl-4 space-y-1 font-note text-foreground/80 text-base leading-[28px]">
          <p className="font-handwriting text-primary text-lg mb-3">Hey love,</p>
          <p>
            How's my baby doing, this isn't how it was planned to be tho but you remember what kiss Daniel said right? He said a plan is here plan A better plan is here plan B 🌝. However let's go back to the bone of contention.
          </p>
          
          <p className="mt-2">
            So Baby, somewhere between our conversations, your laughter, and the way you make my days brighter, my heart quietly chose you. You’ve become someone I care about deeply someone I want to grow with, laugh with, and love intentionally.
            I don’t want to just admire you from a distance or leave my feelings unspoken. I want to show up for you, choose you openly, and love you the right way.
            So today, from the most honest place in my heart, I want to ask you something simple but meaningful:
          </p>
          <p className="mt-4 font-handwriting text-primary text-lg">
            Would you be my Girlfriend 💕
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoveLetter;
