import { useState } from "react";

function Photo({ src, emoji, alt, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className={`photo-fallback ${className}`} role="img" aria-label={alt}>
        {emoji}
      </div>
    );
  }
  return <img className={className} src={src} alt={alt} onError={() => setFailed(true)} />;
}

export default Photo;
