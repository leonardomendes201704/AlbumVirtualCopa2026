const fs = require("fs");
const path = require("path");

const stickersDir = path.join(__dirname, "Paginas", "Figurinhas");
const outputFile = path.join(__dirname, "figurinhas.json");

const files = fs.existsSync(stickersDir)
  ? fs
      .readdirSync(stickersDir)
      .filter((file) => file.toLowerCase().endsWith(".png"))
      .sort((a, b) => a.localeCompare(b, "pt-BR", { numeric: true }))
  : [];

fs.writeFileSync(outputFile, `${JSON.stringify(files, null, 2)}\n`);
console.log(`Manifesto atualizado: ${files.length} figurinhas`);
