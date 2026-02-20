import teamImg from "../assets/experts.jpg";

function Experts() {
  return (
    <section className="experts">
      <div className="experts-head">
        <h2>Meet The Experts</h2>
        <p>A diverse team of world-class marketers dedicated to your success.</p>
      </div>

      <div className="experts-media">
        <img src={teamImg} alt="Team" />
        <div className="experts-caption">
          Our team at the annual Digital Growth Summit
        </div>
      </div>
    </section>
  );
}

export default Experts;
