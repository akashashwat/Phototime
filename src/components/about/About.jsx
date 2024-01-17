import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div
        className="container"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-offset="0"
      >
        <h3 className="title">
          Rappresent your life with a <br /> simple photo
        </h3>
        <p className="para">
          Never miss a memory – Your all-in-one solution for organizing, <br />
          sharing, and reliving your precious moments.
        </p>
        <button className="button">get started</button>
      </div>
    </section>
  );
};

export default About;
