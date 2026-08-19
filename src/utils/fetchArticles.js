const RSS_FEEDS = [
  { url: 'https://manufosela.substack.com/feed', source: 'substack', topic: 'leadership' },
  { url: 'https://dev.to/feed/manufosela', source: 'devto', topic: 'tech' }
];

function parseItems(xml, source, topic) {
  const items = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;
  while ((match = itemRegex.exec(xml)) !== null) {
    const block = match[1];
    const title = block.match(/<title><!\[CDATA\[(.*?)\]\]>|<title>(.*?)<\/title>/);
    const link = block.match(/<link>(.*?)<\/link>/);
    const pubDate = block.match(/<pubDate>(.*?)<\/pubDate>/);

    if (title && link) {
      items.push({
        title: (title[1] || title[2] || '').trim(),
        url: link[1].trim(),
        date: pubDate ? new Date(pubDate[1]).toISOString() : new Date().toISOString(),
        source,
        topic
      });
    }
  }
  return items;
}

export async function fetchRSSArticles() {
  const all = [];
  for (const feed of RSS_FEEDS) {
    try {
      const res = await fetch(feed.url);
      if (!res.ok) continue;
      const xml = await res.text();
      const items = parseItems(xml, feed.source, feed.topic);
      all.push(...items);
    } catch {
      // feed down — skip silently
    }
  }
  return all;
}

export async function fetchFirebaseArticles() {
  try {
    const res = await fetch('https://manufosela-es-default-rtdb.europe-west1.firebasedatabase.app/articles/linkedin.json');
    if (!res.ok) return [];
    const data = await res.json();
    if (!data) return [];
    return Object.values(data).map((item) => ({
      title: item.title,
      url: item.url,
      date: item.date || new Date().toISOString(),
      source: item.url.includes('dev.to/') ? 'devto' : 'linkedin',
      topic: item.topic || 'leadership',
      order: item.order || 99,
      lang: item.lang || null
    }));
  } catch {
    return [];
  }
}

export async function getAllArticles(lang) {
  const [rss, curated] = await Promise.all([
    fetchRSSArticles(),
    fetchFirebaseArticles()
  ]);
  // Los artículos curados en RTDB son la autoridad: si el RSS trae la misma URL, gana el curado (con su lang)
  const curatedUrls = new Set(curated.map((a) => a.url));
  const all = [...rss.filter((a) => !curatedUrls.has(a.url)), ...curated];
  all.sort((a, b) => (a.order || 99) - (b.order || 99) || new Date(b.date).getTime() - new Date(a.date).getTime());
  if (!lang) return all;
  return all.filter((a) => !a.lang || a.lang === lang);
}

export function filterByTopic(articles, topic) {
  return articles.filter((a) => a.topic === topic);
}

export function groupByYear(articles) {
  const groups = {};
  for (const a of articles) {
    const year = new Date(a.date).getFullYear().toString();
    if (!groups[year]) groups[year] = [];
    groups[year].push(a);
  }
  return Object.entries(groups).sort(([a], [b]) => Number(b) - Number(a));
}
