export async function getNews() {
  try {
    const res = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://feeds.bbci.co.uk/news/world/rss.xml"
    );

    const data = await res.json();

    return data.items || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}
