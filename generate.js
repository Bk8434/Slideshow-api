// api/generate.js
export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed. Use POST.' });
    }

    const body = req.body || {};
    // Expected fields:
    // images: array of base64 URLs or image URLs
    // audio: url string to audio file
    // title: video title
    // duration: seconds per image (optional)

    const images = body.images || [];
    const audio = body.audio || '';
    const title = body.title || 'untitled';
    const duration = Number(body.duration) || 5;

    // Basic validation
    if (!images.length) {
      return res.status(400).json({ error: 'images array required (min 1).' });
    }
    if (!audio) {
      return res.status(400).json({ error: 'audio url required.' });
    }

    // Simulate generation: generate a fake URL with timestamp.
    // Replace this block with real generator (ffmpeg / external service) later.
    const id = Date.now();
    const fakeVideoUrl = `https://storage.example.com/generated/${id}.mp4`;

    // Return success payload expected by n8n
    return res.status(200).json({
      ok: true,
      videoUrl: fakeVideoUrl,
      meta: {
        title,
        imagesCount: images.length,
        audio,
        duration,
        generatedAt: new Date().toISOString()
      }
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'internal_error', details: err.message });
  }
}
