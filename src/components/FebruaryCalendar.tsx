const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const FebruaryCalendar = () => {
  // February 2026 starts on Sunday (day 0)
  const daysInMonth = 28;
  const startDay = 0; // Sunday

  const blanks = Array.from({ length: startDay }, (_, i) => (
    <div key={`blank-${i}`} />
  ));

  const days = Array.from({ length: daysInMonth }, (_, i) => {
    const day = i + 1;
    const isValentines = day === 14;

    return (
      <div
        key={day}
        className={`relative flex items-center justify-center w-7 h-7 text-xs font-casual ${
          isValentines
            ? "text-primary-foreground font-bold"
            : "text-foreground/70"
        }`}
      >
        {isValentines && (
          <span className="absolute inset-0 flex items-center justify-center text-primary text-2xl">
            ♥
          </span>
        )}
        <span className="relative z-10">{day}</span>
      </div>
    );
  });

  return (
    <div className="bg-card rounded-xl shadow-md p-4 w-fit">
      <h3 className="font-handwriting text-primary text-xl text-center mb-2">
        February 2026
      </h3>
      <div className="grid grid-cols-7 gap-0.5">
        {DAYS.map((d) => (
          <div
            key={d}
            className="w-7 h-6 flex items-center justify-center text-[10px] font-bold text-muted-foreground"
          >
            {d}
          </div>
        ))}
        {blanks}
        {days}
      </div>
    </div>
  );
};

export default FebruaryCalendar;
