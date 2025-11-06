import React from 'react';

const destinations = [
  {
    name: 'Tokyo',
    mood: 'Vibrante, Energetica, Futuristica (Vivid, Energetic, Futuristic)',
    description:
      "Immergiti nell'energia elettrica di Tokyo, dove grattacieli iconici sfiorano il cielo e antichi templi offrono oasi di pace. Dalle luci al neon di Shibuya all'eleganza spirituale di Asakusa, vivi il cuore pulsante del Giappone moderno.",
    image:
      'https://images.unsplash.com/photo-1526481280698-8fcc13fd5c41?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Kyoto',
    mood: 'Serena, Spirituale, Elegante (Serene, Spiritual, Elegant)',
    description:
      'Passeggia tra le infinite porte vermiglie di Fushimi Inari e lasciati incantare dal riflesso dorato del Kinkaku-ji. Kyoto è un dipinto vivente, dove ogni strada, giardino e tempio racconta una storia di bellezza e armonia millenaria.',
    image:
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Osaka',
    mood: 'Vivace, Giocosa, Nostalgica (Lively, Playful, Nostalgic)',
    description:
      'Benvenuto nella cucina del Giappone! Esplora Dotonbori, un labirinto di sapori e luci, e ammira l\'imponenza del Castello di Osaka. Una città che celebra la gioia di vivere con un\'energia contagiosa e un\'anima accogliente.',
    image:
      'https://images.unsplash.com/photo-1564257631407-4deb8e8a5c15?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Hiroshima',
    mood: 'Intensa, Piena di Speranza, Rispettosa (Poignant, Hopeful, Respectful)',
    description:
      'Un luogo di profonda riflessione e incredibile rinascita. Ammira la maestosità del Torii galleggiante di Itsukushima e onora la pace nel Parco del Memoriale. Hiroshima è una testimonianza di resilienza, un dialogo tra storia e speranza.',
    image:
      'https://images.unsplash.com/photo-1604112900927-06f98a8a3dc0?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Nara',
    mood: 'Antica Saggezza, Armonia con la Natura (Ancient Wisdom, Harmony with Nature)',
    description:
      'Viaggia indietro nel tempo nella prima capitale imperiale del Giappone. Incontra i cervi sacri che vagano liberamente nel Parco di Nara e sentiti piccolo di fronte alla grandezza del Buddha di Todai-ji. Qui, la natura e la spiritualità convivono in perfetta armonia.',
    image:
      'https://images.unsplash.com/photo-1566895292257-21b6d91dc7d8?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Monte Fuji',
    mood: 'Maestoso, Sbalorditivo, Grandiosità Naturale (Majestic, Awe-inspiring, Natural Grandiosity)',
    description:
      'Contempla il simbolo iconico del Giappone in tutta la sua magnificenza. Che sia incorniciato dai ciliegi in fiore, riflesso sulle acque placide dei suoi laghi o coperto da una coltre di neve, il Monte Fuji è uno spettacolo che ispira e rigenera l\'anima.',
    image:
      'https://images.unsplash.com/photo-1514699272077-490c2c1a6b9a?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Destinations() {
  return (
    <section className="bg-neutral-50 py-16" id="destinations">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Destinazioni</h2>
          <p className="mt-2 text-gray-600">Scopri i luoghi che danno vita al tuo viaggio.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((d) => (
            <article key={d.name} className="group relative overflow-hidden rounded-xl shadow-sm bg-white">
              <img src={d.image} alt={d.name} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{d.name}</h3>
                <p className="text-sm text-rose-700/80 mt-1">{d.mood}</p>
                <p className="mt-3 text-gray-700 leading-relaxed">{d.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
