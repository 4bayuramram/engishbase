import { useEffect, useState } from "react";
import { getNews } from "../../services/newsApi";

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
    return <div className="p-10 text-center">Loading articles...</div>;
  }

  return (
    <div className="min-h-screen bg-background px-6 py-10 font-manrope">
      <h1 className="text-headline-lg text-primary mb-8">📚 English Reading</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {news.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            className="bg-surface-container rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            {/* IMAGE */}
            {item.thumbnail ? (
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
            ) : (
              <div className="w-full h-40 bg-surface-container-high" />
            )}

            {/* CONTENT */}
            <div className="p-4">
              <h2 className="text-body-lg font-semibold text-onSurface">
                {item.title}
              </h2>

              <p className="text-body-sm text-on-surface-variant mt-2">
                {item.contentSnippet?.slice(0, 100)}...
              </p>

              <p className="mt-3 text-primary text-label-md">
                Read full article →
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
