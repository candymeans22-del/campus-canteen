import { useEffect, useState } from "react";

const steps = ["Order received", "Sent to the kitchen", "Preparing your food"];

function OrderStatus({ order, onDone }) {
  const [step, setStep] = useState(0);
  const finished = step >= steps.length;

  useEffect(() => {
    if (finished) return;
    const t = setTimeout(() => setStep((s) => s + 1), 1100);
    return () => clearTimeout(t);
  }, [step, finished]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape" && finished) onDone(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [finished, onDone]);

  return (
    <div className="status-overlay" role="dialog" aria-live="polite" aria-label="Order status">
      <div className="status-card">
        {!finished ? (
          <>
            <div className="spinner" aria-hidden="true" />
            <h2>Your order is in process</h2>
            <p className="status-sub">Please wait a moment&hellip;</p>
            <ul className="status-steps">
              {steps.map((s, i) => (
                <li key={s} className={i < step ? "done" : i === step ? "now" : ""}>
                  <span className="dot">{i < step ? <>&#10003;</> : i + 1}</span> {s}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <div className="success-badge" aria-hidden="true">&#10003;</div>
            <h2>Thank you!</h2>
            <p className="status-sub">Your order <strong>#{order.id}</strong> has been placed.</p>
            <ul className="status-items">
              {order.items.map((i) => (
                <li key={i.id}>
                  <span>{i.qty} &times; {i.name}</span>
                  <span>Rs. {i.price * i.qty}</span>
                </li>
              ))}
            </ul>
            <div className="status-total"><span>Total</span><strong>Rs. {order.total}</strong></div>
            <p className="status-note">Your food will be ready in about 10&ndash;15 minutes. Please pay at the counter when you pick it up.</p>
            <button className="pill-btn full" onClick={onDone} autoFocus>Back to menu</button>
          </>
        )}
      </div>
    </div>
  );
}

export default OrderStatus;
