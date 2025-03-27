import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ params }) => {
  try {
    const response = await fetch(`https://res.cloudinary.com/dli1azgd6/image/upload/v1650653110/${params.name}_1_ypolxs.svg`);
    const svg = await response.text();

    return new Response(svg, {
      status: 200,
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  } catch (error) {
    return new Response('Error fetching image', { status: 500 });
  }
}
