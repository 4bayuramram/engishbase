import React from "react";
import "../../index.css";

export default function VerbLessonPage() {
  return (
    <div className="bg-background text-on-background font-body-md antialiased">
      {/* Main */}
      <main className="mt-2 mb-16 px-4 md:px-margin max-w-4xl mx-auto space-y-md">
        {/* Header */}
        <header className="text-center space-y-xs py-lg">
          <h1 className="font-headline-xl text-headline-xl text-primary">
            Verb (Kata Kerja)
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
              play_arrow
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Apa itu Verb?
            </h2>
          </div>

          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            <strong className="text-primary">Verb</strong> adalah kata kerja
            yang menunjukkan tindakan, keadaan, atau kejadian dalam sebuah
            kalimat.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm mt-md">
            <div className="bg-surface-container-low p-sm rounded-lg flex items-center gap-sm">
              <span className="material-symbols-outlined text-secondary">
                directions_run
              </span>
              <span className="font-label-md text-label-md">Run (berlari)</span>
            </div>

            <div className="bg-surface-container-low p-sm rounded-lg flex items-center gap-sm">
              <span className="material-symbols-outlined text-secondary">
                restaurant
              </span>
              <span className="font-label-md text-label-md">Eat (makan)</span>
            </div>

            <div className="bg-surface-container-low p-sm rounded-lg flex items-center gap-sm">
              <span className="material-symbols-outlined text-secondary">
                visibility
              </span>
              <span className="font-label-md text-label-md">See (melihat)</span>
            </div>

            <div className="bg-surface-container-low p-sm rounded-lg flex items-center gap-sm">
              <span className="material-symbols-outlined text-secondary">
                psychology
              </span>
              <span className="font-label-md text-label-md">
                Think (berpikir)
              </span>
            </div>
          </div>

          <div className="mt-md p-sm bg-blue-50 border-l-4 border-primary rounded-r-lg italic font-body-md text-on-surface">
            Contoh: <b>She eats</b> every morning.
          </div>
        </section>

        {/* Section 2 */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(26,86,219,0.05)] border border-blue-50">
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            berdasarkan jenisnya verb dibagi menjadi:
          </p>

          <div className="flex items-center gap-sm mb-md">
            <span className="material-symbols-outlined text-primary text-3xl">
              category
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Action vs Stative Verb
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Action Verb */}
            <div className="border-2 border-surface-container-high p-md rounded-xl">
              <div className="text-primary font-headline-md mb-xs">
                Action Verb
              </div>
              <p className="text-body-sm text-outline mb-sm">
                Kata kerja yang menunjukkan tindakan fisik atau aktivitas.
              </p>
              <div className="flex flex-wrap gap-xs">
                <span className="px-sm py-xs bg-blue-50 text-primary-container font-label-sm rounded-full">
                  Run
                </span>
                <span className="px-sm py-xs bg-blue-50 text-primary-container font-label-sm rounded-full">
                  Eat
                </span>
                <span className="px-sm py-xs bg-blue-50 text-primary-container font-label-sm rounded-full">
                  Write
                </span>
              </div>
              <p className="mt-sm text-body-sm">
                Contoh: <b>He runs</b> every day.
              </p>
            </div>

            {/* Stative Verb */}
            <div className="border-2 border-surface-container-high p-md rounded-xl">
              <div className="text-secondary font-headline-md mb-xs">
                Stative Verb
              </div>
              <p className="text-body-sm text-outline mb-sm">
                Kata kerja yang menunjukkan keadaan, perasaan, atau pikiran.
              </p>
              <div className="flex flex-wrap gap-xs">
                <span className="px-sm py-xs bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm rounded-full">
                  Know
                </span>
                <span className="px-sm py-xs bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm rounded-full">
                  Love
                </span>
                <span className="px-sm py-xs bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm rounded-full">
                  Believe
                </span>
              </div>
              <p className="mt-sm text-body-sm">
                Contoh: <b>I know</b> the answer.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(26,86,219,0.05)] border border-blue-50">
          <div className="flex items-center gap-sm mb-md">
            <span className="material-symbols-outlined text-primary text-3xl">
              transform
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Verb + To Infinitive & Gerund
            </h2>
          </div>

          <div className="space-y-sm">
            {/* To Infinitive */}
            <div className="p-sm border-b border-surface-variant">
              <h4 className="font-label-md text-primary">
                Verb + To Infinitive (to + V1)
              </h4>
              <p className="text-body-sm text-on-surface-variant">
                To infinitive adalah bentuk dasar verb yang didahului oleh “to”
                (to + kata kerja). Struktur ini dipakai ketika kita ingin
                menunjukkan tujuan, keinginan, rencana, atau keputusan
              </p>
              <div className="mt-xs font-bold">
                I want <span className="text-secondary">to learn English</span>
              </div>
            </div>

            {/* Gerund */}
            <div className="p-sm">
              <h4 className="font-label-md text-primary">
                Verb + Gerund (V-ing)
              </h4>
              <p className="text-body-sm text-on-surface-variant">
                Gerund adalah bentuk kata kerja (verb) yang diberi akhiran -ing
                (V-ing), seperti: learning, reading, swimming, writing, dan
                sebagainya. Meskipun berasal dari verb, gerund berfungsi sebagai
                kata benda (noun) di dalam kalimat. Artinya, gerund bisa dipakai
                sebagai subjek, objek, atau pelengkap dalam kalimat.
              </p>
              <div className="mt-xs font-bold">
                I enjoy <span className="text-secondary">learning English</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(26,86,219,0.05)] border border-blue-50">
          <div className="flex items-center gap-sm mb-md">
            <span className="material-symbols-outlined text-primary text-3xl">
              lightbulb
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Tips Penting
            </h2>
          </div>

          <div className="p-md bg-tertiary-fixed/30 rounded-xl flex gap-sm">
            <span className="material-symbols-outlined text-tertiary">
              info
            </span>
            <p className="text-sm">
              <b>Tips:</b> Tidak semua verb bisa diikuti gerund atau infinitive.
              Contoh: "want to go" ✔, tetapi "want going" ✘.
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
              Kuasai verb untuk membentuk semua kalimat dalam bahasa Inggris!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
