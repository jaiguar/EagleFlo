import r1 from "../assets/result-1.jpg";
import r2 from "../assets/result-2.jpg";

const CASES = [
  {
    tag: "SaaS",
    title: "TechFlow Systems",
    challenge: "Struggling with high CAC and low trial-to-paid conversion rates.",
    solution:
      "Implemented full-funnel strategy with LinkedIn Ads for targeting and email sequences for nurturing.",
    roi: "150%",
    revenue: "$2.5M",
    img: r1,
  },
  {
    tag: "Healthcare",
    title: "MediCare Plus",
    challenge: "Low appointment booking rates from paid search traffic.",
    solution:
      "Optimized landing pages for conversion and restructured Google Ads campaigns for local intent.",
    roi: "120%",
    revenue: "$1.2M",
    img: r2,
  },
];

function ResultCard({ item }) {
  return (
    <div className="result-card">
      <div className="result-media">
        <span className="result-tag">{item.tag}</span>
        <img src={item.img} alt={item.title} />
      </div>

      <div className="result-content">
        <h3 className="result-title">{item.title}</h3>
        <div className="result-underline" />

        <div className="result-block">
          <div className="result-label">CHALLENGE</div>
          <p className="result-text">{item.challenge}</p>
        </div>

        <div className="result-block">
          <div className="result-label">SOLUTION</div>
          <p className="result-text">{item.solution}</p>
        </div>

        <div className="result-stats">
          <div className="stat">
            <div className="stat-label">ROI</div>
            <div className="stat-value">{item.roi}</div>
          </div>
          <div className="stat">
            <div className="stat-label">Revenue</div>
            <div className="stat-value">{item.revenue}</div>
          </div>
        </div>

        <a className="result-link" href="#">
          View Case Study <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
}

function Results() {
  return (
    <section className="results">
      <div className="results-head">
        <h2>Proven Results</h2>
        <p>See how we help brands transform their digital presence and bottom line.</p>
      </div>

      <div className="results-list">
        {CASES.map((item) => (
          <ResultCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Results;
