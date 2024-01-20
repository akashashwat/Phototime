import "./Preloader.css";

const spanStyle = {
  display: "inline-block",
  animation: "flip 2s infinite",
};

const Preloader = () => {
  return (
    <div className="preloader-container">
      <img src="/images/logo-blue.png" alt="Logo" />
      <div className="wave">
        <span style={{ ...spanStyle, animationDelay: "0.2s" }}>L</span>
        <span style={{ ...spanStyle, animationDelay: "0.4s" }}>O</span>
        <span style={{ ...spanStyle, animationDelay: "0.6s" }}>A</span>
        <span style={{ ...spanStyle, animationDelay: "0.8s" }}>D</span>
        <span style={{ ...spanStyle, animationDelay: "1.0s" }}>I</span>
        <span style={{ ...spanStyle, animationDelay: "1.2s" }}>N</span>
        <span style={{ ...spanStyle, animationDelay: "1.4s" }}>G</span>
      </div>
    </div>
  );
};

export default Preloader;
