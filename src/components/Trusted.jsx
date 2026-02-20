function BadgeIcon() {
  return (
    <span className="trust-icon" aria-hidden="true">
      {/* simple seal icon (SVG) */}
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <path
          d="M12 2.2l1.4 1.3 1.9-.4.8 1.8 1.9.4-.1 2 1.3 1.4-1.3 1.4.1 2-1.9.4-.8 1.8-1.9-.4-1.4 1.3-1.4-1.3-1.9.4-.8-1.8-1.9-.4.1-2L3.8 12l1.3-1.4-.1-2 1.9-.4.8-1.8 1.9.4L12 2.2z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 12l1.7 1.7 3.3-3.8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

const ITEMS = [
  "Google Partner",
  "Meta Business Partner",
  "LinkedIn Marketing",
  "TikTok For Business",
];

export default function Trusted() {
  return (
    <section className="trust">
      <h3 className="trust-title">Certified & Trusted By The Best</h3>

      <div className="trust-row">
        {ITEMS.map((label) => (
          <div className="trust-item" key={label}>
            <BadgeIcon />
            <span className="trust-text">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
