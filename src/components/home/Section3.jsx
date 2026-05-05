export default function Section3() {
  const items = [
    {
      icon: "menu_book",
      title: "Belajar Bertahap",
      desc: "Materi disusun dari dasar sampai mahir.",
    },
    {
      icon: "psychology",
      title: "Mudah Dipahami",
      desc: "Penjelasan sederhana tanpa ribet.",
    },
    {
      icon: "autorenew",
      title: "Latihan Harian",
      desc: "Biar cepat ingat dan terbiasa.",
    },
    {
      icon: "rocket_launch",
      title: "Fokus Pemula",
      desc: "Cocok untuk yang baru mulai belajar.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      {/* TITLE */}
      <div className="text-center mb-10">
        <h2
          className="text-3xl md:text-4xl font-bold text-onBackground"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Kenapa EnglishBase?
        </h2>

        <p
          className="mt-3 text-on-surface-variant max-w-xl mx-auto text-base md:text-lg"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Platform belajar bahasa Inggris yang dibuat sederhana, terstruktur,
          dan mudah dipahami.
        </p>
      </div>

      {/* CAROUSEL */}
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-2 pb-2 justify-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="min-w-[280px] md:min-w-[320px] snap-center flex-shrink-0"
          >
            <div className="h-full p-6 rounded-2xl bg-surface shadow-sm border border-border hover:shadow-md transition text-center">
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
          </div>
        ))}
      </div>
    </section>
  );
}
