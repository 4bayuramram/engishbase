import React from "react";
import "../../index.css";

export default function AdjectiveLessonPage() {
  return (
    <div className="bg-background text-on-background font-body-md antialiased">
      {/* Main */}
      <main className="mt-2 mb-16 px-4 md:px-margin max-w-4xl mx-auto space-y-md">
        {/* Header */}
        <header className="text-center space-y-xs py-lg">
          <h1 className="font-headline-xl text-headline-xl text-primary">
            Adjective (Kata Sifat)
          </h1>
          <p className="font-headline-md text-headline-md text-outline">
            Dasar Grammar Bahasa Inggris
          </p>
          <div className="w-16 h-1 bg-secondary mx-auto mt-sm rounded-full"></div>
        </header>

        {/* Section 1 */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(26,86,219,0.05)] border border-blue-50">
          <div className="flex items-center gap-sm mb-md">
            <span className="material-symbols-outlined text-primary text-3xl">
              palette
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Apa itu Adjective?
            </h2>
          </div>

          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            <strong className="text-primary">Adjective</strong> adalah kata yang
            digunakan untuk menjelaskan atau memberi sifat pada noun (kata
            benda).
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm mt-md">
            <div className="bg-surface-container-low p-sm rounded-lg flex items-center gap-sm">
              <span className="material-symbols-outlined text-secondary">
                visibility
              </span>
              <span className="font-label-md text-label-md">
                Beautiful Flower
              </span>
            </div>

            <div className="bg-surface-container-low p-sm rounded-lg flex items-center gap-sm">
              <span className="material-symbols-outlined text-secondary">
                psychology
              </span>
              <span className="font-label-md text-label-md">Smart Student</span>
            </div>

            <div className="bg-surface-container-low p-sm rounded-lg flex items-center gap-sm">
              <span className="material-symbols-outlined text-secondary">
                schedule
              </span>
              <span className="font-label-md text-label-md">Fast Car</span>
            </div>

            <div className="bg-surface-container-low p-sm rounded-lg flex items-center gap-sm">
              <span className="material-symbols-outlined text-secondary">
                sentiment_satisfied
              </span>
              <span className="font-label-md text-label-md">Happy Child</span>
            </div>
          </div>

          <div className="mt-md p-sm bg-blue-50 border-l-4 border-primary rounded-r-lg italic font-body-md text-on-surface">
            Contoh: <b>The beautiful girl</b> is my sister.
          </div>
        </section>

        {/* Section 2 */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(26,86,219,0.05)] border border-blue-50">
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            berdasarkan fungsinya adjective dibagi menjadi:
          </p>

          <div className="flex items-center gap-sm mb-md">
            <span className="material-symbols-outlined text-primary text-3xl">
              category
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Jenis Adjective
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="border-2 border-surface-container-high p-md rounded-xl">
              <div className="text-primary font-headline-md mb-xs">
                Descriptive
              </div>
              <p className="text-body-sm text-outline mb-sm">
                Menjelaskan sifat atau keadaan noun.
              </p>
              <div className="flex flex-wrap gap-xs">
                <span className="px-sm py-xs bg-blue-50 text-primary-container font-label-sm rounded-full">
                  Big House
                </span>
                <span className="px-sm py-xs bg-blue-50 text-primary-container font-label-sm rounded-full">
                  Red Car
                </span>
              </div>
            </div>

            <div className="border-2 border-surface-container-high p-md rounded-xl">
              <div className="text-secondary font-headline-md mb-xs">
                Quantitative
              </div>
              <p className="text-body-sm text-outline mb-sm">
                Menunjukkan jumlah atau kuantitas.
              </p>
              <div className="flex flex-wrap gap-xs">
                <span className="px-sm py-xs bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm rounded-full">
                  Many Books
                </span>
                <span className="px-sm py-xs bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm rounded-full">
                  Few People
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(26,86,219,0.05)] border border-blue-50">
          <div className="flex items-center gap-sm mb-md">
            <span className="material-symbols-outlined text-primary text-3xl">
              tune
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Posisi Adjective dalam Kalimat
            </h2>
          </div>

          <div className="space-y-sm">
            <div className="p-sm border-b border-surface-variant">
              <h4 className="font-label-md text-primary">Sebelum Noun</h4>
              <p className="text-body-sm text-on-surface-variant">
                Adjective biasanya diletakkan sebelum kata benda.
              </p>
              <div className="mt-xs font-bold">
                <span>The big house</span>
              </div>
            </div>

            <div className="p-sm border-b border-surface-variant">
              <h4 className="font-label-md text-primary">
                Setelah Verb (to be)
              </h4>
              <p className="text-body-sm text-on-surface-variant">
                Adjective bisa muncul setelah to be.
              </p>
              <div className="mt-xs font-bold">
                <span>The house is big</span>
              </div>
            </div>

            <div className="p-sm">
              <h4 className="font-label-md text-primary">
                Lebih dari satu adjective
              </h4>
              <p className="text-body-sm text-on-surface-variant">
                Bisa menggunakan beberapa adjective sekaligus.
              </p>
              <div className="mt-xs font-bold">
                <span>A beautiful big house</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(26,86,219,0.05)] border border-blue-50">
          <div className="flex items-center gap-sm mb-md">
            <span className="material-symbols-outlined text-primary text-3xl">
              info
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Tips Menggunakan Adjective
            </h2>
          </div>

          <div className="p-md bg-tertiary-fixed/30 rounded-xl flex gap-sm">
            <span className="material-symbols-outlined text-tertiary">
              lightbulb
            </span>
            <p className="text-sm">
              <b>Tips:</b> Adjective tidak berubah bentuk walaupun noun-nya
              plural. Contoh: big house → big houses (bukan bigs houses)
            </p>
          </div>
        </section>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden h-64 relative group">
          <img
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA56TXwObNtr8HnfCwvywj2skZ1t6kFPpo2ymInKpHKkLyYE2c-uP2-RnMOKx9NYUHwj7UghAaSkKi7rRabuPGItV7-6YinwblBZU58ZPMkn2OPIMcz--vMx2skZ8XL9ua6vgCSdWO19b_3Z3b5Er68fiVPYYRb_CQL4on6pZ2ey4ZCT0EDDQenkNJRoaChs8po-UBViuT2vD46Fv4qbTZcdjD94NG3vtbYpt1pWn1kLdvML0nmwl-Bxrm7efRH9NQKUiDljIO_hx4"
            alt="study"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-md">
            <p className="text-white font-headline-md">
              Latih adjective untuk membuat kalimat lebih hidup!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
