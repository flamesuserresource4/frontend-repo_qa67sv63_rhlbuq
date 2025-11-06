import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const handleCTA = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays to help text readability without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          Riscopri il Giappone Antico
          <span className="block text-sm sm:text-base md:text-lg mt-2 font-normal opacity-80">(Rediscover Old Japan)</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/90">
          Viaggi indimenticabili ti aspettano
          <span className="ml-2 opacity-80">(Unforgettable Journeys Await)</span>
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={handleCTA}
            className="inline-flex items-center rounded-full bg-white/90 text-black px-6 py-3 font-semibold shadow-md hover:bg-white transition-colors"
          >
            Pianifica il Tuo Viaggio
            <span className="ml-2 opacity-80 font-normal">(Plan Your Journey)</span>
          </button>
        </div>
      </div>
    </section>
  );
}
