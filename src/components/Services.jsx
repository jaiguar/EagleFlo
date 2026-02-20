function Services() {
  const services = [
    {
      icon: "💲",
      title: "CPS - Cost Per Sale",
      desc: "A risk-free model where you only pay when a transaction occurs. Perfect for e-commerce brands looking to scale revenue without upfront ad spend risk.",
      benefits: [
        "Zero risk on ad spend",
        "Guaranteed ROI",
        "Scalable revenue model",
        "Performance-based alignment"
      ],
      ideal: "Best for E-commerce stores with established conversion funnels."
    },
    {
      icon: "👁",
      title: "CPM - Cost Per Mille",
      desc: "Maximize brand visibility by reaching thousands of potential customers. We optimize for high-impact placements to ensure your brand gets noticed.",
      benefits: [
        "Massive brand awareness",
        "High reach at low cost",
        "Strategic ad placements",
        "Top-of-funnel growth"
      ],
      ideal: "Ideal for brand launches and awareness campaigns."
    },
    {
      icon: "✨",
      title: "CPA - Cost Per Action",
      desc: "Pay only for specific actions that matter to your business—signups, downloads, or form submissions.",
      benefits: [
        "Pay for results only",
        "Optimized for conversions",
        "High-quality traffic",
        "Clear attribution"
      ],
      ideal: "Great for SaaS signups and lead generation."
    },
    {
      icon: "📱",
      title: "CPI - Cost Per Install",
      desc: "Accelerate your app growth with dedicated mobile user acquisition strategies.",
      benefits: [
        "Rapid user base growth",
        "Quality user targeting",
        "App store optimization",
        "Fraud protection"
      ],
      ideal: "Essential for Mobile Apps and Games."
    },
    {
      icon: "👥",
      title: "CPL - Cost Per Lead",
      desc: "Fill your sales pipeline with qualified leads.",
      benefits: [
        "Qualified prospects",
        "Consistent pipeline volume",
        "CRM integration ready",
        "Higher sales efficiency"
      ],
      ideal: "Perfect for B2B services and Real Estate."
    },
    {
      icon: "✉",
      title: "Email Marketing",
      desc: "Turn one-time visitors into loyal customers with automated email flows.",
      benefits: [
        "Increased retention",
        "Automated revenue",
        "Personalized messaging",
        "High engagement rates"
      ],
      ideal: "Vital for all businesses to maximize CLV."
    }
  ];

  return (
    <section className="services">
      <div className="services-header">
        <span className="services-tag">OUR EXPERTISE</span>
        <h2>Comprehensive Digital Solutions</h2>
        <p>
          We tailor our strategies to your business model,
          ensuring optimal efficiency and maximum impact.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p className="service-desc">{service.desc}</p>

            <div className="benefits">
              <strong>KEY BENEFITS:</strong>
              <ul>
                {service.benefits.map((b, i) => (
                  <li key={i}>✓ {b}</li>
                ))}
              </ul>
            </div>

            <div className="ideal">
              <strong>IDEAL FOR:</strong>
              <span>{service.ideal}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;