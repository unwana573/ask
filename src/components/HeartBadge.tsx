const HeartBadge = () => {
  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        viewBox="0 0 120 110"
        className="w-28 h-24 text-primary drop-shadow-md"
        fill="currentColor"
      >
        <path d="M60 100 C25 70, -5 40, 15 20 C30 5, 50 10, 60 30 C70 10, 90 5, 105 20 C125 40, 95 70, 60 100Z" />
      </svg>
      <span className="absolute text-primary-foreground font-casual text-[11px] text-center leading-tight mt-1 px-2">
        this is my
        <br />
        happy place
      </span>
    </div>
  );
};

export default HeartBadge;
