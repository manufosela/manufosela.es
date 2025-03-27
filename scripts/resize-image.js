// convert-webp.js
import sharp from 'sharp';
import path from 'path';

// Obtener el archivo de entrada de los argumentos de línea de comandos
const inputPath = process.argv[2];

if (!inputPath) {
  console.error('❌ Error: Debes proporcionar un archivo de entrada');
  console.error('Uso: node resize-image.js <archivo_entrada>');
  process.exit(1);
}

// Obtener el directorio y nombre del archivo de entrada
const inputDir = path.dirname(inputPath);
const inputFileName = path.basename(inputPath, path.extname(inputPath));

const sizes = [
  { width: 1280, suffix: '' },
  { width: 768, suffix: '' },
  { width: 480, suffix: '' },
  { width: 320, suffix: '' },
  { width: 320, suffix: '@2x', multiplier: 2 },
];

for (const { width, suffix, multiplier = 1 } of sizes) {
  const outputPath = path.join(inputDir, `${inputFileName}${width}${suffix}.webp`);
  sharp(inputPath)
    .resize(width * multiplier)
    .webp({ quality: 80 })
    .toFile(outputPath)
    .then(() => console.log(`✅ ${outputPath} generado`))
    .catch(err => console.error(err));
}
