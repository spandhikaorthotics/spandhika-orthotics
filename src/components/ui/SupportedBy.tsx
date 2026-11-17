const supporters = [
  "Uttishthati Foundation",
  "TIDES, IIT Roorkee",
  "STPI Mohali",
  "NSRCEL, IIM Bangalore",
  "NCPEDP",
];

export default function SupportedBy() {
  return (
    <section
      id="supported-by"
      aria-label="Supported by"
      className="border-y border-outline-variant/60 bg-surface-container-low/70 py-10 sm:py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="label-caps text-center text-secondary">Supported by</p>

        <ul className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {supporters.map((name) => (
            <li
              key={name}
              className="glass rounded-full px-4 py-2 text-xs font-semibold text-primary sm:px-5 sm:text-sm"
            >
              {name}
            </li>
          ))}
        </ul>

        <figure className="mx-auto mt-8 max-w-2xl text-center">
          <blockquote className="text-base font-medium leading-relaxed text-primary sm:text-lg">
            &ldquo;There is a need for an affordable, accessible alternative to
            expensive foreign smart insoles.&rdquo;
          </blockquote>
        </figure>
      </div>
    </section>
  );
}
