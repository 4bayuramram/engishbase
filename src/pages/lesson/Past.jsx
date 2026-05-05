import React from "react";
import "../../index.css";

export default function PastTenseLessonPage() {
  return (
    <div className="bg-background text-on-background font-body-md antialiased">
      <main className="mt-2 mb-16 px-4 md:px-margin max-w-4xl mx-auto space-y-md">
        {/* Header */}
        <header className="text-center space-y-xs py-lg">
          <h1 className="font-headline-xl text-headline-xl text-primary">
            Simple Past (Did / Was / Were)
          </h1>
          <p className="font-headline-md text-headline-md text-outline">
            Kalimat Lampau dalam Bahasa Inggris
          </p>
          <div className="w-16 h-1 bg-secondary mx-auto mt-sm rounded-full"></div>
        </header>

        {/* Intro */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow border border-blue-50">
          <p className="text-body-lg text-on-surface-variant leading-relaxed">
            Simple past digunakan untuk menyatakan kejadian yang sudah terjadi
            di masa lalu. Biasanya ada keterangan waktu seperti <b>yesterday</b>
            , <b>last night</b>, atau <b>last week</b>.
          </p>
        </section>

        {/* VERBAL */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow border border-blue-50">
          <h2 className="font-headline-lg text-primary mb-sm">
            Kalimat Verbal (Menggunakan Kata Kerja)
          </h2>

          <p className="text-body-sm text-on-surface-variant mb-sm">
            Kalimat ini menggunakan kata kerja (verb). Kata kerja berubah ke
            bentuk kedua (V2).
          </p>

          {/* Rumus */}
          <div className="p-sm bg-blue-50 rounded-lg mb-md text-body-sm">
            <div>S + V2</div>
            <div>S + did not (didn't) + V1</div>
            <div>Did + S + V1 ?</div>
          </div>

          {/* Contoh */}
          <div className="space-y-sm text-body-sm">
            <div>
              <b>(+)</b> She visited her grandmother yesterday <br />
              Dia mengunjungi neneknya kemarin
            </div>

            <div>
              <b>(-)</b> She did not visit her grandmother yesterday <br />
              Dia tidak mengunjungi neneknya kemarin
            </div>

            <div>
              <b>(?)</b> Did she visit her grandmother yesterday? <br />
              Apakah dia mengunjungi neneknya kemarin?
            </div>
          </div>
        </section>

        {/* NOMINAL */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow border border-blue-50">
          <h2 className="font-headline-lg text-primary mb-sm">
            Kalimat Nominal (Tanpa Kata Kerja)
          </h2>

          <p className="text-body-sm text-on-surface-variant mb-sm">
            Kalimat ini tidak memakai kata kerja utama. Digunakan untuk
            menyatakan keadaan, sifat, atau identitas di masa lalu.
          </p>

          {/* Rumus */}
          <div className="p-sm bg-blue-50 rounded-lg mb-md text-body-sm">
            <div>S + was / were + non verb</div>
            <div>S + was not (wasn't) / were not (weren't) + non verb</div>
            <div>Was / Were + S + non verb ?</div>
          </div>

          {/* Contoh */}
          <div className="space-y-sm text-body-sm">
            <div>
              <b>(+)</b> She was happy yesterday <br />
              Dia bahagia kemarin
            </div>

            <div>
              <b>(-)</b> She was not happy yesterday <br />
              Dia tidak bahagia kemarin
            </div>

            <div>
              <b>(?)</b> Was she happy yesterday? <br />
              Apakah dia bahagia kemarin?
            </div>
          </div>
        </section>

        {/* Tambahan Was Were */}
        <section className="bg-surface-container-lowest p-md rounded-xl shadow border border-blue-50">
          <h2 className="font-headline-lg text-primary mb-sm">
            Penggunaan Was / Were
          </h2>

          <div className="text-body-sm space-y-1 mb-sm">
            <div>• I / He / She / It → was</div>
            <div>• You / We / They → were</div>
          </div>

          <div className="space-y-sm text-body-sm">
            <div>
              I was at home last night <br />
              Saya di rumah tadi malam
            </div>

            <div>
              They were in the classroom <br />
              Mereka berada di kelas
            </div>

            <div>
              We were tired after the trip <br />
              Kami lelah setelah perjalanan
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
              Perhatikan perbedaan:
              <br />
              Kalimat verbal menggunakan <b>did</b> dan verb kembali ke V1.
              <br />
              Kalimat nominal menggunakan <b>was / were</b> tanpa kata kerja
              utama.
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
              Pahami pola, maka kalimat lampau jadi mudah digunakan
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
