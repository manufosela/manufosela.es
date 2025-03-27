import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  try {
    const response = await fetch('https://librecounter.org/counter.svg');
    const svg = await response.text();

    return new Response(svg, {
      status: 200,
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  } catch (error) {
    return new Response('Error fetching counter', { status: 500 });
  }
}
