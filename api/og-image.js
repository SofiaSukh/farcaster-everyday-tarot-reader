import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    const imagePath = path.join(process.cwd(), 'og-image.png');
    const imageBuffer = fs.readFileSync(imagePath);
    
    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Cache-Control', 'public, max-age=31536000');
    res.send(imageBuffer);
  } catch (error) {
    console.error('Error serving OG image:', error);
    res.status(404).send('Image not found');
  }
}
