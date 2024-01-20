import "./Download.css";

const Download = () => {
  return (
    <section className="download" id="download">
      <div className="container text-center" data-aos="fade-up">
        <h3 className="title" data-aos="fade-up" data-aos-delay="100">
          download it
        </h3>
        <p className="para" data-aos="fade-up" data-aos-delay="200">
          People across the planet love using Phototime to transform their
          visual content. Why? It’s fast, it’s easy, and it delivers a “Wow,
          that’s amazing!” result with every single enhancement.
        </p>
        <div
          className="btn__wrapper d-flex align-items-center justify-content-center gap-4 mt-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <button className="d-flex align-items-center">
            <span>AppleStore</span>
            <span>
              <i className="fa-brands fa-apple"></i>
            </span>
          </button>

          <button className="d-flex align-items-center">
            <span>play store</span>
            <span>
              <i className="fa-brands fa-google-play"></i>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Download;
