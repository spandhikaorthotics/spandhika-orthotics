const days = [
  { day: "MON", value: 42, height: 38 },
  { day: "TUE", value: 51, height: 50 },
  { day: "WED", value: 58, height: 60 },
  { day: "THU", value: 66, height: 71 },
  { day: "FRI", value: 72, height: 80 },
  { day: "SAT", value: 78, height: 89 },
  { day: "SUN", value: 82, height: 100 },
];

const linePoints = days
  .map((d, i) => `${((i + 0.5) / days.length) * 100},${100 - d.height * 0.92}`)
  .join(" ");

/** Illustrative weekly balance-score bar chart with a trend line. */
export default function BalanceTrend() {
  return (
    <div
      className="relative h-36 pt-4"
      role="img"
      aria-label="Balance score trend per day: Monday 42, Tuesday 51, Wednesday 58, Thursday 66, Friday 72, Saturday 78, Sunday 82"
    >
      <div className="flex h-full items-end gap-1.5">
        {days.map((d, i) => {
          const isLast = i === days.length - 1;
          return (
            <div key={d.day} className="flex h-full flex-1 flex-col justify-end">
              <div
                className={`metric-trend-bar flex w-full justify-center rounded-md pt-1 text-[0.5rem] font-medium ${
                  isLast
                    ? "bg-primary text-primary-foreground"
                    : "bg-[color-mix(in_oklab,var(--primary)_20%,transparent)] text-foreground"
                }`}
                style={{ height: `${d.height}%` }}
              >
                {d.value}
              </div>
              <span className="mt-1.5 text-center text-[0.5rem] font-medium tracking-widest text-muted-foreground">
                {d.day}
              </span>
            </div>
          );
        })}
      </div>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 top-4 h-[calc(100%-1.75rem)] w-full"
        aria-hidden="true"
      >
        <polyline
          points={linePoints}
          className="metric-trend-line"
          fill="none"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
