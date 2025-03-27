// scripts/loadPageContent.js
const fs = require('fs')
const path = require('path')

const pagesDir = path.join(__dirname, '../src/pages')
const dataDir = path.join(__dirname, '../src/data')

function loadPageContent(pageName) {
  const pagePath = path.join(pagesDir, `${pageName}.astro`)
  const dataPath = path.join(dataDir, `${pageName}.ts`)

  // Cargar el contenido de la página y del archivo de datos
  const pageContent = fs.readFileSync(pagePath, 'utf-8')
  const dataContent = require(dataPath)

  // Analiza y procesa el contenido para ser editable en el frontend
  // Ejemplo de lógica simplificada
  let processedContent = pageContent
  for (const [key, value] of Object.entries(dataContent)) {
    const regex = new RegExp(value, 'g')
    processedContent = processedContent.replace(regex, `<span contenteditable="true" data-ref="${key}">${value}</span>`)
  }

  return processedContent
}

module.exports = loadPageContent
