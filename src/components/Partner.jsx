import partnerImg from "../assets/partner.jpg"; // apni image ka path set karna

const items = [
  {
    icon: "⚡",
    title: "Rapid Execution",
    desc: "Launch campaigns in days, not weeks. Our agile workflow ensures speed to market.",
  },
  {
    icon: "🎯",
    title: "Precision Targeting",
    desc: "AI-driven audience segmentation to reach your ideal customers with zero waste.",
  },
  {
    icon: "🛡️",
    title: "Data Security",
    desc: "Enterprise-grade encryption and GDPR/CCPA compliant data handling protocols.",
  },
  {
    icon: "📈",
    title: "Scalable Growth",
    desc: "Strategies built to handle exponential growth without breaking performance.",
  },
  {
    icon: "🤝",
    title: "Dedicated Support",
    desc: "Direct access to senior strategists, not just junior account managers.",
  },
  {
    icon: "💾",
    title: "Proprietary Tech",
    desc: "Access to our internal tools for deeper competitive insights and analytics.",
  },
];

function Partner() {
  return (
    <section className="partner" id="partner">
      <div className="partner-wrap">
        {/* LEFT IMAGE */}
        <div className="partner-left">
          <div className="partner-media">
            <img src={partnerImg} alt="Workspace" className="partner-img" />

            <div className="partner-float">
              <div className="float-top">
                <div className="float-badge">🏅</div>
                <div>
                  <h4>Award Winning</h4>
                  <p>Recognized for Excellence</p>
                </div>
              </div>

              <div className="float-bar">
                <div className="float-bar-fill" />
              </div>
              <div className="float-foot">98% Client Retention</div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="partner-right">
          <h2 className="partner-title">
            Why Partner With <span>EagleFlo</span>?
          </h2>
          <p className="partner-sub">
            We don't just run ads; we engineer growth engines. Our approach combines the
            creativity of a branding agency with the analytical rigor of a data science firm.
          </p>

          <div className="partner-grid">
            {items.map((it) => (
              <div className="partner-card" key={it.title}>
                <div className="partner-icon">{it.icon}</div>
                <div>
                  <h4>{it.title}</h4>
                  <p>{it.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partner;
