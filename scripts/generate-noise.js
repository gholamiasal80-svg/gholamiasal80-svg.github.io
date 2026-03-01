import sharp from "sharp";
import { mkdirSync } from "fs";

const size = 200;
const channels = 4;
const pixelData = Buffer.alloc(size * size * channels);

for (let i = 0; i < pixelData.length; i += channels) {
  const val = Math.floor(Math.random() * 180 + 40);
  pixelData[i] = val;       // R
  pixelData[i + 1] = val;   // G
  pixelData[i + 2] = val;   // B
  pixelData[i + 3] = Math.floor(Math.random() * 30 + 8); // A - subtle
}

const outputDir = "/vercel/share/v0-project/public/images";
mkdirSync(outputDir, { recursive: true });

await sharp(pixelData, {
  raw: { width: size, height: size, channels },
})
  .png()
  .toFile(outputDir + "/noise.png");

console.log("Noise texture generated at /vercel/share/v0-project/public/images/noise.png");
