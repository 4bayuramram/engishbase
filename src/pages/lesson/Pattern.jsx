import React from "react";
import "../../index.css";

export default function GrammarPatternPage() {
  return (
    <div className="bg-background text-on-background font-body-md antialiased">
      <main className="mt-2 mb-16 px-4 md:px-margin max-w-4xl mx-auto space-y-md">
        {/* Header */}
        <header className="text-center space-y-xs py-lg">
          <h1 className="font-headline-xl text-headline-xl text-primary">
            Grammar Patterns
          </h1>
          <p className="font-headline-md text-headline-md text-outline">
            Pola Gabungan Kata dalam Bahasa Inggris
          </p>
          <div className="w-16 h-1 bg-secondary mx-auto mt-sm rounded-full"></div>
        </header>

        {/* Intro */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow border border-blue-50">
          <p className="text-body-lg text-on-surface-variant leading-relaxed">
            Dalam bahasa Inggris, kata jarang berdiri sendiri. Kata biasanya
            digabung dengan kata lain untuk membentuk makna yang lebih jelas.
            Pola-pola seperti ini disebut grammar patterns. Dengan memahami
            pola, kamu tidak perlu menghafal terlalu banyak, karena kamu bisa
            mengenali bentuk yang sering digunakan dalam kalimat sehari-hari.
          </p>
        </section>

        {/* Verb + Verb */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow border border-blue-50">
          <h2 className="font-headline-lg text-primary mb-sm">Verb + Verb</h2>

          <p className="text-body-sm text-on-surface-variant mb-sm">
            Pola ini digunakan ketika satu kata kerja diikuti oleh kata kerja
            lain. Biasanya digunakan untuk menunjukkan keinginan, rencana, atau
            aktivitas.
          </p>

          <p className="text-body-sm text-on-surface-variant mb-sm">
            Ada dua bentuk yang paling umum:
          </p>

          <div className="text-body-sm space-y-1 mb-sm">
            <div>• Verb + to + verb (to infinitive)</div>
            <div>• Verb + verb-ing (gerund)</div>
          </div>

          <div className="text-body-sm space-y-2">
            <div>
              I want <b className="text-secondary">to learn English</b>
              <br />
              Saya ingin belajar bahasa Inggris
            </div>
            <div>
              She enjoys <b className="text-secondary">reading books</b>
              <br />
              Dia menikmati membaca buku
            </div>
            <div>
              They decided <b className="text-secondary">to move</b>
              <br />
              Mereka memutuskan untuk pindah
            </div>
          </div>
        </section>

        {/* Noun + Noun */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow border border-blue-50">
          <h2 className="font-headline-lg text-primary mb-sm">
            Noun + Noun (Compound Noun)
          </h2>

          <p className="text-body-sm text-on-surface-variant mb-sm">
            Dua kata benda bisa digabung untuk membentuk makna baru. Biasanya
            kata pertama menjelaskan fungsi atau jenis dari kata kedua.
          </p>

          <div className="text-body-sm space-y-2">
            <div>
              I bought a <b className="text-secondary">coffee cup</b>
              <br />
              Saya membeli cangkir kopi
            </div>
            <div>
              She works in a <b className="text-secondary">school office</b>
              <br />
              Dia bekerja di kantor sekolah
            </div>
            <div>
              He lost his <b className="text-secondary">phone charger</b>
              <br />
              Dia kehilangan charger handphonenya
            </div>
          </div>
        </section>

        {/* Noun + Of */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow border border-blue-50">
          <h2 className="font-headline-lg text-primary mb-sm">
            Noun + of + Noun
          </h2>

          <p className="text-body-sm text-on-surface-variant mb-sm">
            Pola ini digunakan ketika ingin menunjukkan isi, bagian, atau
            hubungan antara dua benda. Berbeda dengan noun + noun, pola ini
            lebih menekankan pada apa yang ada di dalam atau bagian dari
            sesuatu.
          </p>

          <div className="text-body-sm space-y-2">
            <div>
              a <b className="text-secondary">cup of coffee</b>
              <br />
              secangkir kopi
            </div>
            <div>
              a <b className="text-secondary">bottle of water</b>
              <br />
              sebotol air
            </div>
            <div>
              the <b className="text-secondary">door of the car</b>
              <br />
              pintu mobil
            </div>
          </div>

          <div className="mt-sm text-body-sm text-on-surface-variant">
            Perbedaan penting:
            <br />
            "coffee cup" fokus ke bendanya (cangkir)
            <br />
            "cup of coffee" fokus ke isinya (kopi)
          </div>
        </section>

        {/* Noun + Adjective */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow border border-blue-50">
          <h2 className="font-headline-lg text-primary mb-sm">
            Noun + Adjective
          </h2>

          <p className="text-body-sm text-on-surface-variant mb-sm">
            Untuk mendeskripsikan noun, bahasa Inggris membutuhkan kata kerja
            penghubung seperti "is", "am", atau "are". Pola ini digunakan untuk
            memberikan informasi atau sifat dari sesuatu.
          </p>

          <div className="text-body-sm space-y-2">
            <div>
              The sky is <b className="text-secondary">blue</b>
              <br />
              Langit berwarna biru
            </div>
            <div>
              She is <b className="text-secondary">happy</b>
              <br />
              Dia merasa bahagia
            </div>
            <div>
              This food is <b className="text-secondary">delicious</b>
              <br />
              Makanan ini enak
            </div>
          </div>
        </section>

        {/* Basic Sentence */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow border border-blue-50">
          <h2 className="font-headline-lg text-primary mb-sm">
            Pola Kalimat Dasar
          </h2>

          <p className="text-body-sm text-on-surface-variant mb-sm">
            Hampir semua kalimat bahasa Inggris mengikuti pola dasar berikut:
          </p>

          <div className="text-body-sm space-y-2">
            <div>
              She runs
              <br />
              Dia berlari
            </div>
            <div>
              She eats an apple
              <br />
              Dia makan sebuah apel
            </div>
            <div>
              She is happy
              <br />
              Dia bahagia
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow border border-blue-50">
          <div className="p-md bg-tertiary-fixed/30 rounded-xl flex gap-sm">
            <span className="material-symbols-outlined text-tertiary">
              info
            </span>
            <p className="text-sm">
              Fokus belajar pada pola, bukan hanya kata. Dengan memahami pola
              seperti "want to learn" atau "cup of coffee", kamu akan lebih
              mudah membuat kalimat secara alami tanpa harus menerjemahkan kata
              per kata.
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
              Memahami pola membuat belajar bahasa lebih cepat dan natural
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
