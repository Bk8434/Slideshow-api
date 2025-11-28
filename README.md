# Slideshow API (Vercel serverless)

## Deploy (one-click)
1. Create a GitHub repo with these files.
2. Go to https://vercel.com, login, **Import Project** → choose this repo → Deploy.
3. After deploy, your endpoint will be:
   `https://<your-vercel-project>.vercel.app/api/generate`

## How to call (example cURL)
```bash
curl -X POST "https://<your-vercel-project>.vercel.app/api/generate" \
 -H "Content-Type: application/json" \
 -d '{
   "images": ["https://example.com/img1.jpg","https://example.com/img2.jpg"],
   "audio": "https://example.com/music.mp3",
   "title": "My Test Video",
   "duration": 4
 }'
