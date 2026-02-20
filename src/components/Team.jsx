import p1 from "../assets/team-1.jpg";
import p2 from "../assets/team-2.jpg";
import p3 from "../assets/team-3.jpg";
import p4 from "../assets/team-4.jpg";

const TEAM = [
  {
    name: "Alex Mercer",
    role: "CEO & Founder",
    desc: "12+ years in digital marketing strategy. Former Google Ads Specialist.",
    img: p1,
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Strategy",
    desc: "Expert in full-funnel architecture and brand positioning for enterprise clients.",
    img: p2,
  },
  {
    name: "David Chen",
    role: "Lead Data Scientist",
    desc: "Masters in Statistics. Turns complex data into actionable growth insights.",
    img: p3,
  },
  {
    name: "Emily Ross",
    role: "Creative Director",
    desc: "Award-winning designer with a passion for high-converting ad creatives.",
    img: p4,
  },
];

function IconRow() {
  return (
    <div className="team-icons">
      {/* Simple icons (no library needed) */}
      <a href="#" aria-label="LinkedIn">in</a>
      <a href="#" aria-label="Twitter">𝕏</a>
      <a href="#" aria-label="Email">✉</a>
    </div>
  );
}

function TeamCard({ member }) {
  return (
    <div className="team-card">
      <div className="team-imgWrap">
        <img src={member.img} alt={member.name} className="team-img" />
      </div>

      <div className="team-body">
        <h3 className="team-name">{member.name}</h3>
        <div className="team-role">{member.role}</div>
        <p className="team-desc">{member.desc}</p>
        <IconRow />
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section className="team">
      <div className="team-head">
        <h2>Meet Our Team</h2>
        <p>World-class people focused on your growth.</p>
      </div>

      <div className="team-grid">
        {TEAM.map((m) => (
          <TeamCard key={m.name} member={m} />
        ))}
      </div>
    </section>
  );
}
