export default function Section4() {
  const materials = [
    {
      icon: "school",
      title: "Basic English Foundations",
      desc: "Belajar dasar sebelum grammar seperti noun, verb, adjective, to be, subject & object.",
    },
    {
      icon: "menu_book",
      title: "Grammar Fundamentals",
      desc: "Memahami struktur grammar seperti tenses dasar, kalimat sederhana, dan bentuk pertanyaan.",
    },
    {
      icon: "article",
      title: "Reading Practice (Articles)",
      desc: "Latihan membaca artikel pendek untuk memahami konteks dan memperkaya vocabulary.",
    },
    {
      icon: "quiz",
      title: "Grammar Test & Simulation",
      desc: "Simulasi soal dan quiz untuk mengukur pemahaman grammar secara bertahap.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      {/* TITLE */}
      <div className="text-center mb-12">
        <h2
          className="text-3xl md:text-4xl font-bold text-onBackground"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Learning Path
        </h2>

        <p
          className="mt-3 text-on-surface-variant max-w-xl mx-auto text-base md:text-lg"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Alur belajar disusun dari dasar sampai evaluasi agar mudah dipahami
          dan terstruktur.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {materials.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-surface border border-border shadow-sm hover:shadow-md transition text-center"
          >
            {/* ICON */}
            <div className="flex justify-center">
              <span className="material-symbols-outlined text-4xl text-primary">
                {item.icon}
              </span>
            </div>

            {/* TITLE */}
            <h3
              className="mt-4 text-lg font-semibold text-onBackground"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {item.title}
            </h3>

            {/* DESC */}
            <p
              className="mt-2 text-sm md:text-base text-on-surface-variant leading-relaxed"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
