import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // For this static build, we just simulate success
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-neutral-950 text-white py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Inizia la Tua Avventura
            <span className="block text-sm md:text-base mt-1 font-normal text-white/70">(Begin Your Adventure)</span>
          </h2>
          <p className="mt-3 text-white/80">
            Siamo qui per creare il viaggio perfetto per te. Raccontaci i tuoi sogni e li trasformeremo in realtà.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 md:p-8">
          {submitted ? (
            <div className="text-center">
              <p className="text-lg">Grazie! Ti contatteremo al più presto.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-1">
                <label className="block text-sm mb-1">Nome</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                  className="w-full rounded-md bg-white/10 border border-white/20 px-3 py-2 outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  className="w-full rounded-md bg-white/10 border border-white/20 px-3 py-2 outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm mb-1">Messaggio</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={4}
                  required
                  className="w-full rounded-md bg-white/10 border border-white/20 px-3 py-2 outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>
              <div className="md:col-span-2 flex justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center rounded-full bg-rose-500 hover:bg-rose-600 transition-colors px-6 py-3 font-semibold"
                >
                  Invia la Tua Richiesta
                  <span className="ml-2 opacity-80 font-normal">(Send Your Request)</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
