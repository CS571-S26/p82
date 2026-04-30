import { useState, useEffect } from "react";

export default function Countdown(props) {
  const targetDate = new Date("2026-09-12T08:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          secs: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="d-flex justify-content-around text-center">
      <div>
        <div className="h3 mb-0 fw-bold">{timeLeft.days}</div>
        <small>Days</small>
      </div>
      <div>
        <div className="h3 mb-0 fw-bold">{timeLeft.hours}</div>
        <small>Hrs</small>
      </div>
      <div>
        <div className="h3 mb-0 fw-bold">{timeLeft.mins}</div>
        <small>Mins</small>
      </div>
      <div>
        <div className="h3 mb-0 fw-bold">{timeLeft.secs}</div>
        <small>Secs</small>
      </div>
    </div>
  );
}
