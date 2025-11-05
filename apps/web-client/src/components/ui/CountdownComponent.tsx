"use client";

import { useEffect, useState } from "react";

export const CountdownComponent = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const campaignEnd = new Date(2025, 10, 6, 23, 59, 59); // Nov 6, 2025 end of day
      const difference = campaignEnd.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 md:gap-3">
      <div className="text-center">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1.5 md:px-3 md:py-2 min-w-[50px] md:min-w-[55px]">
          <div className="text-xl md:text-2xl font-bold leading-none">
            {String(timeLeft.days).padStart(2, "0")}
          </div>
          <div className="text-[0.65rem] opacity-90 mt-0.5">Días</div>
        </div>
      </div>
      <span className="text-lg md:text-xl font-bold">:</span>
      <div className="text-center">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1.5 md:px-3 md:py-2 min-w-[50px] md:min-w-[55px]">
          <div className="text-xl md:text-2xl font-bold leading-none">
            {String(timeLeft.hours).padStart(2, "0")}
          </div>
          <div className="text-[0.65rem] opacity-90 mt-0.5">Horas</div>
        </div>
      </div>
      <span className="text-lg md:text-xl font-bold">:</span>
      <div className="text-center">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1.5 md:px-3 md:py-2 min-w-[50px] md:min-w-[55px]">
          <div className="text-xl md:text-2xl font-bold leading-none">
            {String(timeLeft.minutes).padStart(2, "0")}
          </div>
          <div className="text-[0.65rem] opacity-90 mt-0.5">Min</div>
        </div>
      </div>
      <span className="text-lg md:text-xl font-bold">:</span>
      <div className="text-center">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1.5 md:px-3 md:py-2 min-w-[50px] md:min-w-[55px]">
          <div className="text-xl md:text-2xl font-bold leading-none">
            {String(timeLeft.seconds).padStart(2, "0")}
          </div>
          <div className="text-[0.65rem] opacity-90 mt-0.5">Seg</div>
        </div>
      </div>
    </div>
  );
};
