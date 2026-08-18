"use client";

import { useEffect, useState } from "react";

const LAUNCH_DATE = new Date("2026-08-23T00:00:00").getTime();

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [launched, setLaunched] = useState(false);

  useEffect(() => {
    const calculateTime = () => {
      const difference = LAUNCH_DATE - Date.now();

      if (difference <= 0) {
        setLaunched(true);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
          (difference / 1000) % 60
        ),
      });
    };

    calculateTime();

    const timer = setInterval(calculateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  if (launched) {
    return (
      <div className="mt-12 text-center">
        <div className="inline-block rounded-3xl border border-white/10 bg-white/5 px-10 py-8 backdrop-blur-xl">
          <div className="text-5xl font-bold sm:text-7xl">
            We&apos;re Live 🚀
          </div>

          <p className="mt-4 text-gray-400">
            Welcome to our new digital experience.
          </p>
        </div>
      </div>
    );
  }

  const values = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
      {values.map((item) => (
        <div
          key={item.label}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.07]"
        >
          <div className="absolute inset-0 -z-10 bg-blue-500/5 opacity-0 blur-2xl transition duration-300 group-hover:opacity-100" />

          <div className="text-4xl font-bold tracking-tight sm:text-5xl">
            {String(item.value).padStart(2, "0")}
          </div>

          <div className="mt-2 text-xs uppercase tracking-[0.2em] text-gray-500">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}