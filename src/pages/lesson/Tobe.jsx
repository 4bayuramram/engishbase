import React from "react";
import "../../index.css";

export default function ToBeLessonPage() {
  return (
    <div className="bg-background text-on-background font-body-md antialiased">
      <main className="mt-2 mb-16 px-4 md:px-margin max-w-4xl mx-auto space-y-md">
        {/* Header */}
        <header className="text-center space-y-xs py-lg">
          <h1 className="font-headline-xl text-headline-xl text-primary">
            To Be (Is / Am / Are / Was / Were)
          </h1>
          <p className="font-headline-md text-headline-md text-outline">
            Dasar Kalimat Bahasa Inggris
          </p>
          <div className="w-16 h-1 bg-secondary mx-auto mt-sm rounded-full"></div>
        </header>

        {/* Intro */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow border border-blue-50">
          <p className="text-body-lg text-on-surface-variant leading-relaxed">
            <b className="text-primary">To be</b> adalah kata kerja dasar yang
            digunakan untuk menghubungkan subjek dengan informasi tambahan
            seperti sifat (adjective), benda (noun), atau aktivitas (verb-ing).
          </p>
        </section>

        {/* Is Am Are */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow border border-blue-50">
          <h2 className="font-headline-lg text-primary mb-sm">
            Is / Am / Are (Present)
          </h2>

          <p className="text-body-sm text-on-surface-variant mb-sm">
            Digunakan untuk menyatakan kondisi sekarang.
          </p>

          <div className="text-body-sm space-y-1 mb-sm">
            <div>• I → am</div>
            <div>• You / We / They → are</div>
            <div>• He / She / It → is</div>
          </div>

          <div className="space-y-2 text-body-sm">
            <div>
              She is <b className="text-secondary">happy</b> <br />
              Dia bahagia
            </div>
            <div>
              I am <b className="text-secondary">a student</b> <br />
              Saya adalah seorang siswa
            </div>
            <div>
              They are <b className="text-secondary">at home</b> <br />
              Mereka di rumah
            </div>
          </div>
        </section>

        {/* Negative */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow border border-blue-50">
          <h2 className="font-headline-lg text-primary mb-sm">
            Bentuk Negatif (Present)
          </h2>

          <p className="text-body-sm text-on-surface-variant mb-sm">
            Tambahkan <b>not</b> setelah to be.
          </p>

          <div className="space-y-2 text-body-sm">
            <div>
              She is not happy <br />
              Dia tidak bahagia
            </div>
            <div>
              I am not tired <br />
              Saya tidak lelah
            </div>
            <div>
              They are not ready <br />
              Mereka tidak siap
            </div>
          </div>
        </section>

        {/* S + Adjective */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow border border-blue-50">
          <h2 className="font-headline-lg text-primary mb-sm">
            S + To Be + Adjective
          </h2>

          <p className="text-body-sm text-on-surface-variant mb-sm">
            Digunakan untuk menyatakan sifat atau kondisi.
          </p>

          <div className="space-y-2 text-body-sm">
            <div>
              The sky is <b className="text-secondary">blue</b> <br />
              Langit berwarna biru
            </div>
            <div>
              She is <b className="text-secondary">beautiful</b> <br />
              Dia cantik
            </div>
            <div>
              I am <b className="text-secondary">hungry</b> <br />
              Saya lapar
            </div>
          </div>
        </section>

        {/* S + Noun */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow border border-blue-50">
          <h2 className="font-headline-lg text-primary mb-sm">
            S + To Be + Noun
          </h2>

          <p className="text-body-sm text-on-surface-variant mb-sm">
            Digunakan untuk menyatakan identitas atau pekerjaan.
          </p>

          <div className="space-y-2 text-body-sm">
            <div>
              He is <b className="text-secondary">a teacher</b> <br />
              Dia adalah seorang guru
            </div>
            <div>
              I am <b className="text-secondary">a student</b> <br />
              Saya adalah seorang siswa
            </div>
            <div>
              They are <b className="text-secondary">friends</b> <br />
              Mereka adalah teman
            </div>
          </div>
        </section>

        {/* S + Ving */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow border border-blue-50">
          <h2 className="font-headline-lg text-primary mb-sm">
            S + To Be + Verb-ing
          </h2>

          <p className="text-body-sm text-on-surface-variant mb-sm">
            Digunakan untuk menyatakan aktivitas yang sedang berlangsung.
          </p>

          <div className="space-y-2 text-body-sm">
            <div>
              She is <b className="text-secondary">studying</b> <br />
              Dia sedang belajar
            </div>
            <div>
              I am <b className="text-secondary">eating</b> <br />
              Saya sedang makan
            </div>
            <div>
              They are <b className="text-secondary">playing</b> <br />
              Mereka sedang bermain
            </div>
          </div>
        </section>

        {/* Was Were */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow border border-blue-50">
          <h2 className="font-headline-lg text-primary mb-sm">
            Was / Were (Past)
          </h2>

          <p className="text-body-sm text-on-surface-variant mb-sm">
            Digunakan untuk menyatakan kondisi di masa lalu.
          </p>

          <div className="text-body-sm space-y-1 mb-sm">
            <div>• I / He / She / It → was</div>
            <div>• You / We / They → were</div>
          </div>

          <div className="space-y-2 text-body-sm">
            <div>
              She was happy <br />
              Dia dulu bahagia
            </div>
            <div>
              They were at school <br />
              Mereka dulu di sekolah
            </div>
            <div>
              I was tired <br />
              Saya dulu lelah
            </div>
          </div>
        </section>

        {/* Negative Past */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow border border-blue-50">
          <h2 className="font-headline-lg text-primary mb-sm">
            Negatif Was / Were
          </h2>

          <p className="text-body-sm text-on-surface-variant mb-sm">
            Tambahkan <b>not</b> setelah was / were.
          </p>

          <div className="space-y-2 text-body-sm">
            <div>
              She was not happy <br />
              Dia tidak bahagia (dulu)
            </div>
            <div>
              They were not at home <br />
              Mereka tidak di rumah (dulu)
            </div>
            <div>
              I was not ready <br />
              Saya tidak siap (dulu)
            </div>
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
              To be adalah dasar dari hampir semua kalimat bahasa Inggris
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
