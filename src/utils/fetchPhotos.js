const RTDB_URL = 'https://manufosela-es-default-rtdb.europe-west1.firebasedatabase.app';

export async function fetchPhotos(section) {
  try {
    const res = await fetch(`${RTDB_URL}/photos.json`);
    if (!res.ok) return [];
    const data = await res.json();
    if (!data) return [];
    const all = Object.values(data).sort((a, b) => (a.order || 99) - (b.order || 99));
    if (section) return all.filter((p) => p.section === section);
    return all;
  } catch {
    return [];
  }
}
