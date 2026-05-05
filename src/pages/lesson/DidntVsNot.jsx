import React from "react";
import "../../index.css";

export default function DidntVsNotPage() {
  return (
    <div className="bg-background text-on-background font-body-md antialiased">
      <main className="mt-2 mb-16 px-4 md:px-margin max-w-4xl mx-auto space-y-md">
        {/* Header */}
        <header className="text-center space-y-xs py-lg">
          <h1 className="font-headline-xl text-headline-xl text-primary">
            I didn’t vs I’m not
          </h1>
          <p className="font-headline-md text-headline-md text-outline">
            Perbedaan Negatif Verb dan To Be
          </p>
          <div className="w-16 h-1 bg-secondary mx-auto mt-sm rounded-full"></div>
        </header>

        {/* Intro */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow border border-blue-50">
          <p className="text-body-lg text-on-surface-variant leading-relaxed">
            Banyak yang bingung antara <b>I didn’t</b> dan <b>I’m not</b>.
            Keduanya sama-sama negatif, tetapi dipakai dalam situasi yang
            berbeda.
          </p>
        </section>

        {/* I DIDNT */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow border border-blue-50">
          <h2 className="font-headline-lg text-primary mb-sm">
            I didn’t (Did not)
          </h2>

          <p className="text-body-sm text-on-surface-variant mb-sm">
            Digunakan untuk kalimat <b>verb (kata kerja)</b> di masa lalu.
            Setelah "didn't", kata kerja kembali ke bentuk dasar (V1).
          </p>

          {/* Rumus */}
          <div className="p-sm bg-blue-50 rounded-lg mb-md text-body-sm">
            S + did not (didn't) + V1
          </div>

          {/* Contoh */}
          <div className="space-y-sm text-body-sm">
            <div>
              I didn’t go to school yesterday <br />
              Saya tidak pergi ke sekolah kemarin
            </div>

            <div>
              I didn’t eat breakfast this morning <br />
              Saya tidak makan sarapan pagi ini
            </div>

            <div>
              I didn’t understand the lesson <br />
              Saya tidak memahami pelajaran itu
            </div>
          </div>
        </section>

        {/* IM NOT */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow border border-blue-50">
          <h2 className="font-headline-lg text-primary mb-sm">
            I’m not (I am not)
          </h2>

          <p className="text-body-sm text-on-surface-variant mb-sm">
            Digunakan untuk kalimat <b>tanpa verb utama</b>. Biasanya diikuti
            adjective, noun, atau keterangan.
          </p>

          {/* Rumus */}
          <div className="p-sm bg-blue-50 rounded-lg mb-md text-body-sm">
            S + am not + non verb (adjective / noun / place)
          </div>

          {/* Contoh */}
          <div className="space-y-sm text-body-sm">
            <div>
              I’m not tired <br />
              Saya tidak lelah
            </div>

            <div>
              I’m not a teacher <br />
              Saya bukan seorang guru
            </div>

            <div>
              I’m not at home <br />
              Saya tidak di rumah
            </div>
          </div>
        </section>

        {/* Perbandingan */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow border border-blue-50">
          <h2 className="font-headline-lg text-primary mb-sm">
            Perbedaan Utama
          </h2>

          <div className="space-y-sm text-body-sm">
            <div>
              I didn’t eat <br />
              Saya tidak makan <br />
              (ada aktivitas → verb)
            </div>

            <div>
              I’m not hungry <br />
              Saya tidak lapar <br />
              (menyatakan kondisi → adjective)
            </div>

            <div>
              I didn’t go <br />
              Saya tidak pergi <br />
              (aksi)
            </div>

            <div>
              I’m not ready <br />
              Saya tidak siap <br />
              (keadaan)
            </div>
          </div>
        </section>

        {/* Kesimpulan */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow border border-blue-50">
          <div className="p-md bg-tertiary-fixed/30 rounded-xl flex gap-sm">
            <span className="material-symbols-outlined text-tertiary">
              info
            </span>
            <p className="text-sm">
              Gunakan <b>didn’t</b> jika ada kata kerja (aksi). <br />
              Gunakan <b>am not</b> jika hanya menjelaskan keadaan, sifat, atau
              identitas.
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
              Bedakan aksi dan kondisi agar tidak salah menggunakan negatif
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
