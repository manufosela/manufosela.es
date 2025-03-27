// scripts/saveContent.js
const fs = require('fs')
const path = require('path')

const dataDir = path.join(__dirname, '../src/data')

function saveContent(pageName, newData) {
  const dataPath = path.join(dataDir, `${pageName}.ts`)
  const backupPath = `${dataPath}.${new Date().toISOString().replace(/[:.]/g, '-')}.bak`

  // Copia de seguridad
  fs.copyFileSync(dataPath, backupPath)

  // Guardar nuevo contenido
  const updatedContent = `export const content = ${JSON.stringify(newData, null, 2)};`
  fs.writeFileSync(dataPath, updatedContent)
}

module.exports = saveContent
