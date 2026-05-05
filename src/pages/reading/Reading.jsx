import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getNews } from "../../services/newsApi.js";

export default function Reading() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNews().then((data) => {
      setNews(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center bg-background text-on-surface-variant"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        Loading articles...
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-background px-6 py-14"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-black">
          English Reading
        </h1>

        <p className="mt-3 text-on-surface-variant max-w-2xl mx-auto">
          Improve your English by reading real articles. Learn vocabulary,
          grammar, and sentence structure naturally.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {news.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            whileHover={{ scale: 1.03 }}
            className="
              bg-gray-500/10
              border border-gray-200/30
              backdrop-blur-md
              rounded-2xl
              overflow-hidden
              shadow-sm
              hover:shadow-xl
              transition-all duration-300
            "
          >
            {/* IMAGE */}
            {item.thumbnail ? (
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-44 object-cover"
              />
            ) : (
              <div className="w-full h-44 bg-gray-200/30" />
            )}

            {/* CONTENT */}
            <div className="p-5">
              <h2 className="text-lg font-semibold text-onSurface leading-snug line-clamp-2">
                {item.title}
              </h2>

              <p className="text-sm text-on-surface-variant mt-3 line-clamp-3">
                {item.contentSnippet?.slice(0, 120)}...
              </p>

              <div className="mt-4 text-primary text-sm font-medium">
                Read full article...
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
