const hearts = [
  { size: 16, left: "5%", delay: "0s", duration: "6s" },
  { size: 12, left: "15%", delay: "1s", duration: "8s" },
  { size: 20, left: "25%", delay: "2s", duration: "7s" },
  { size: 10, left: "40%", delay: "0.5s", duration: "9s" },
  { size: 14, left: "55%", delay: "3s", duration: "6.5s" },
  { size: 18, left: "70%", delay: "1.5s", duration: "7.5s" },
  { size: 11, left: "80%", delay: "2.5s", duration: "8.5s" },
  { size: 15, left: "90%", delay: "0.8s", duration: "7s" },
];

const FloatingHearts = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart, i) => (
        <span
          key={i}
          className="absolute bottom-0 text-primary/40"
          style={{
            left: heart.left,
            fontSize: heart.size,
            animation: `float-heart ${heart.duration} ease-in-out infinite`,
            animationDelay: heart.delay,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
