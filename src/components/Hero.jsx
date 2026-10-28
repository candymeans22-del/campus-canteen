import Icon from "./Icon";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <p className="welcome">Welcome to Campus Canteen</p>
        <h1>
          Fresh Food
          <span className="script">for Bright Minds</span>
        </h1>
        <p className="lead">Tasty meals, fresh ingredients and student friendly prices &ndash; all in one place.</p>
        <a href="#menu" className="pill-btn">Explore Menu <Icon name="arrow" size={18} /></a>
      </div>
      <p className="hand-note">Good Food<br />Happy You</p>
    </section>
  );
}

export default Hero;
