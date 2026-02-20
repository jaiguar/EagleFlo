const items = [
  { icon: "📅", value: "8+", label: "Years in Business" },
  { icon: "👥", value: "500+", label: "Clients Served" },
  { icon: "📊", value: "2000+", label: "Campaigns Executed" },
  { icon: "📈", value: "350%", label: "Average ROI" },
  { icon: "🏅", value: "25+", label: "Team Members" },
  { icon: "🌐", value: "15+", label: "Countries Served" },
];

function StatsTemp() {
  return (
    <section className="statsStrip">
      <div className="statsCard">
        {items.map((it) => (
          <div className="statsItem" key={it.label}>
            <div className="statsIcon">{it.icon}</div>
            <div className="statsValue">{it.value}</div>
            <div className="statsLabel">{it.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsTemp;
