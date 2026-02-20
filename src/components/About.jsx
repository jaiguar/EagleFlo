import aboutImg from "../assets/about.jpg"; // apni image ka naam yaha set karna

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* LEFT */}
        <div className="about-left">
          <h2 className="about-title">
            We Are Architects of <span>Digital Growth</span>
          </h2>

          <p className="about-text">
            Founded in 2018, EagleFlo began with a singular mission: to bridge the
            gap between complex data analytics and creative storytelling. We saw
            too many agencies focusing on one or the other, but rarely both.
          </p>

          <p className="about-text">
            Today, we are a global team of strategists, data scientists, and
            creatives who help ambitious brands scale faster and smarter. Our
            vision is to empower businesses of all sizes to dominate their markets
            through precision digital marketing.
          </p>

          <div className="about-points">
            <div className="point">
              <div className="point-icon">◎</div>
              <div>
                <h4>Results-Driven</h4>
                <p>
                  We focus relentlessly on metrics that drive real business growth,
                  not just vanity metrics.
                </p>
              </div>
            </div>

            <div className="point">
              <div className="point-icon">💡</div>
              <div>
                <h4>Innovation First</h4>
                <p>
                  Staying ahead of the curve with the latest marketing technologies
                  and strategies.
                </p>
              </div>
            </div>

            <div className="point">
              <div className="point-icon">♡</div>
              <div>
                <h4>Client Partnership</h4>
                <p>
                  We treat your business as our own, fostering long-term relationships
                  built on trust.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="about-right">
          <div className="about-media">
            <img className="about-img" src={aboutImg} alt="Work setup" />

            <div className="about-floatCard">
              <div className="float-icon">🕒</div>
              <div>
                <h4>Proven Track Record</h4>
                <p>
                  Consistently delivering 3x ROI improvement for our enterprise clients
                  within the first 90 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
