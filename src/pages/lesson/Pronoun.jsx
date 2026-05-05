import React from "react";
import "../../index.css";

export default function PronounLessonPage() {
  return (
    <div className="bg-background text-on-background font-body-md antialiased">
      <main className="mt-2 mb-16 px-4 md:px-margin max-w-4xl mx-auto space-y-md">
        {/* Header */}
        <header className="text-center space-y-xs py-lg">
          <h1 className="font-headline-xl text-headline-xl text-primary">
            Pronoun (Kata Ganti)
          </h1>
          <p className="font-headline-md text-headline-md text-outline">
            Dasar Grammar Bahasa Inggris
          </p>
          <div className="w-16 h-1 bg-secondary mx-auto mt-sm rounded-full"></div>
        </header>

        {/* Section 1: Apa itu Pronoun */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow border border-blue-50">
          <div className="flex items-center gap-sm mb-md">
            <span className="material-symbols-outlined text-primary text-3xl">
              record_voice_over
            </span>
            <h2 className="font-headline-lg text-on-surface">
              Apa itu Pronoun?
            </h2>
          </div>

          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            <strong className="text-primary">Pronoun</strong> adalah kata yang
            digunakan untuk menggantikan noun (kata benda) agar tidak terjadi
            pengulangan dalam kalimat.
          </p>

          <div className="mt-md p-sm bg-blue-50 border-l-4 border-primary rounded-r-lg italic">
            Contoh:
            <br />
            <b>Budi is a student. Budi is smart.</b> ❌ (berulang)
            <br />
            <b>Budi is a student. He is smart.</b> ✔
          </div>
        </section>

        {/* Section 2: Subject Pronoun */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow border border-blue-50">
          <div className="flex items-center gap-sm mb-md">
            <span className="material-symbols-outlined text-primary text-3xl">
              person
            </span>
            <h2 className="font-headline-lg text-on-surface">
              Subject Pronoun
            </h2>
          </div>

          <p className="text-body-md text-on-surface-variant mb-md">
            Subject pronoun adalah kata ganti yang digunakan sebagai subjek
            (pelaku) dalam kalimat.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-sm">
            {["I", "You", "We", "They", "He", "She", "It"].map((item) => (
              <div
                key={item}
                className="bg-blue-50 text-center p-sm rounded-lg font-bold text-primary"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-md space-y-xs text-body-sm">
            <p>
              <b>I</b> am a student → Saya adalah seorang siswa
            </p>
            <p>
              <b>She</b> is happy → Dia (perempuan) bahagia
            </p>
            <p>
              <b>They</b> play football → Mereka bermain bola
            </p>
          </div>
        </section>

        {/* Section 3: Object Pronoun */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow border border-blue-50">
          <div className="flex items-center gap-sm mb-md">
            <span className="material-symbols-outlined text-primary text-3xl">
              arrow_forward
            </span>
            <h2 className="font-headline-lg text-on-surface">Object Pronoun</h2>
          </div>

          <p className="text-body-md text-on-surface-variant mb-md">
            Object pronoun digunakan sebagai objek (yang dikenai tindakan).
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-sm">
            {["Me", "You", "Us", "Them", "Him", "Her", "It"].map((item) => (
              <div
                key={item}
                className="bg-secondary-fixed text-center p-sm rounded-lg font-bold"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-md space-y-xs text-body-sm">
            <p>
              She loves <b>him</b> → Dia mencintai dia (laki-laki)
            </p>
            <p>
              They help <b>us</b> → Mereka membantu kami
            </p>
            <p>
              I see <b>her</b> → Saya melihat dia (perempuan)
            </p>
          </div>
        </section>

        {/* Section 4: Possessive Pronoun */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow border border-blue-50">
          <div className="flex items-center gap-sm mb-md">
            <span className="material-symbols-outlined text-primary text-3xl">
              lock
            </span>
            <h2 className="font-headline-lg text-on-surface">
              Possessive Pronoun
            </h2>
          </div>

          <p className="text-body-md text-on-surface-variant mb-md">
            Possessive pronoun digunakan untuk menunjukkan kepemilikan.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-sm">
            {["Mine", "Yours", "Ours", "Theirs", "His", "Hers", "Its"].map(
              (item) => (
                <div
                  key={item}
                  className="bg-surface-container text-center p-sm rounded-lg font-bold"
                >
                  {item}
                </div>
              )
            )}
          </div>

          <div className="mt-md space-y-xs text-body-sm">
            <p>
              This book is <b>mine</b> → Buku ini milik saya
            </p>
            <p>
              The house is <b>theirs</b> → Rumah itu milik mereka
            </p>
            <p>
              The bag is <b>hers</b> → Tas itu miliknya (perempuan)
            </p>
          </div>
        </section>

        {/* Section 5: Perbandingan */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow border border-blue-50">
          <div className="flex items-center gap-sm mb-md">
            <span className="material-symbols-outlined text-primary text-3xl">
              table_chart
            </span>
            <h2 className="font-headline-lg text-on-surface">
              Perbandingan Pronoun
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="text-primary">
                  <th className="p-2">Subject</th>
                  <th className="p-2">Object</th>
                  <th className="p-2">Possessive</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">I</td>
                  <td className="p-2">Me</td>
                  <td className="p-2">Mine</td>
                </tr>
                <tr>
                  <td className="p-2">You</td>
                  <td className="p-2">You</td>
                  <td className="p-2">Yours</td>
                </tr>
                <tr>
                  <td className="p-2">He</td>
                  <td className="p-2">Him</td>
                  <td className="p-2">His</td>
                </tr>
                <tr>
                  <td className="p-2">She</td>
                  <td className="p-2">Her</td>
                  <td className="p-2">Hers</td>
                </tr>
                <tr>
                  <td className="p-2">They</td>
                  <td className="p-2">Them</td>
                  <td className="p-2">Theirs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 6: Tips */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow border border-blue-50">
          <div className="p-md bg-tertiary-fixed/30 rounded-xl flex gap-sm">
            <span className="material-symbols-outlined text-tertiary">
              lightbulb
            </span>
            <p className="text-sm">
              <b>Tips:</b> Gunakan subject pronoun sebagai pelaku, object
              pronoun sebagai penerima aksi, dan possessive pronoun untuk
              menunjukkan kepemilikan.
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
