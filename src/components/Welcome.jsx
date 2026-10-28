import { useEffect, useState } from "react";
import Icon from "./Icon";

const floaters = [
  "\u{1F354}", "\u{1F355}", "\u{1F35F}", "\u{1F964}",
  "\u{1F35B}", "\u{1F370}", "\u{1F957}", "\u{1F32F}",
];

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
}

function Welcome({ onEnter }) {
  const [opening, setOpening] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const open = () => {
    if (opening) return;
    setOpening(true);
    setTimeout(onEnter, 1500);
  };

  return (
    <div className={opening ? "welcome-screen opening" : "welcome-screen"} role="dialog" aria-label="Welcome to Campus Canteen">
      <div className="floaters" aria-hidden="true">
        {floaters.map((e, i) => (
          <span key={i} style={{ left: `${5 + i * 12}%`, animationDelay: `${i * 0.8}s` }}>{e}</span>
        ))}
      </div>

      <div className="welcome-card">
        <div className="hang-sign" aria-hidden="true">
          <div className="sign-flip">
            <span className="sign-face closed">CLOSED</span>
            <span className="sign-face open">OPEN</span>
          </div>
        </div>
        <span className="welcome-logo"><Icon name="leaf" size={44} /></span>
        <p className="welcome-greet">{greeting()}, hungry mind!</p>
        <h1>Campus Canteen</h1>
        <p className="welcome-tag">Good Food &bull; Good Mood</p>
        <button className="pill-btn big" onClick={open} autoFocus>
          Pull up the shutter <Icon name="arrow" size={20} />
        </button>
        <p className="welcome-hours">Mon - Fri : 8:00 AM - 8:00 PM</p>
      </div>
    </div>
  );
}

export default Welcome;
