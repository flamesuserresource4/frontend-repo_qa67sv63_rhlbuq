import React from 'react';

export default function ExperiencesAndSeasons() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10">
        {/* Experiences */}
        <div className="rounded-2xl border border-gray-200 p-8 shadow-sm">
          <h3 className="text-2xl font-bold">
            Vivi la Cultura, Non Solo Visitarla
            <span className="block text-sm mt-1 text-gray-600 font-normal">(Live the Culture, Don't Just Visit It)</span>
          </h3>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Le nostre esperienze immersive sono pensate per connetterti con l'anima autentica del Giappone. Non essere solo uno spettatore, diventa parte della storia.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-gray-800">
            <li className="rounded-md bg-rose-50 px-3 py-2">Cerimonie del tè con maestri locali</li>
            <li className="rounded-md bg-rose-50 px-3 py-2">Workshop di calligrafia e ikebana</li>
            <li className="rounded-md bg-rose-50 px-3 py-2">Tour gastronomici di quartiere</li>
            <li className="rounded-md bg-rose-50 px-3 py-2">Passeggiate guidate tra templi e santuari</li>
          </ul>
        </div>

        {/* Seasons */}
        <div className="rounded-2xl border border-gray-200 p-8 shadow-sm">
          <h3 className="text-2xl font-bold">
            Ogni Stagione, una Magia Diversa
            <span className="block text-sm mt-1 text-gray-600 font-normal">(Every Season, a Different Magic)</span>
          </h3>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Il Giappone si trasforma con il passare delle stagioni, offrendo scenari e atmosfere uniche. Scegli il tuo periodo preferito e scopri un paese sempre nuovo.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-800">
            <div className="rounded-md bg-indigo-50 px-3 py-2">Primavera: hanami e ciliegi in fiore</div>
            <div className="rounded-md bg-indigo-50 px-3 py-2">Estate: festival matsuri e fuochi d'artificio</div>
            <div className="rounded-md bg-indigo-50 px-3 py-2">Autunno: foliage e giardini dorati</div>
            <div className="rounded-md bg-indigo-50 px-3 py-2">Inverno: onsen e paesaggi innevati</div>
          </div>
        </div>
      </div>
    </section>
  );
}
