import t1 from "../assets/test-1.jpg";
import t2 from "../assets/test-2.jpg";
import t3 from "../assets/test-3.jpg";

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    title: "CMO, TechGrowth",
    text:
      "EagleFlo completely transformed our digital strategy. Their data-driven approach helped us identify untapped markets and scale our user base by 300% in just six months.",
    img: t1,
    stars: 5,
  },
  {
    name: "Michael Chen",
    title: "Founder, StartUp Inc",
    text:
      "The level of expertise and dedication this team brings is unmatched. They don't just run ads; they build comprehensive ecosystems that drive sustainable growth.",
    img: t2,
    stars: 5,
  },
  {
    name: "Jessica Williams",
    title: "Director, Retail Solutions",
    text:
      "We've worked with several agencies, but none have delivered results like EagleFlo. Their transparent reporting and proactive communication make them a true partner.",
    img: t3,
    stars: 5,
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="t-stars" aria-label={`${count} star rating`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="t-wrap">
      <div className="t-head">
        <h2>Client Testimonials</h2>
        <p>
          Don't just take our word for it. Hear from the businesses we've helped
          grow.
        </p>
      </div>

      <div className="t-grid">
        {TESTIMONIALS.map((t) => (
          <div className="t-card" key={t.name}>
            <div className="t-top">
              <div className="t-person">
                <img className="t-avatar" src={t.img} alt={t.name} />
                <div>
                  <div className="t-name">{t.name}</div>
                  <div className="t-role">{t.title}</div>
                </div>
              </div>

              <div className="t-quote" aria-hidden="true">
                “”
              </div>
            </div>

            <Stars count={t.stars} />

            <p className="t-text">"{t.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
