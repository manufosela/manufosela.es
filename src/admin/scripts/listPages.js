const fs = require('fs')
const path = require('path')

const pagesDir = path.join(__dirname, '../src/pages')

function listPages() {
  return fs
    .readdirSync(pagesDir)
    .filter((file) => file.endsWith('.astro'))
    .map((file) => file.replace('.astro', ''))
}

module.exports = listPages

if (require.main === module) {
  console.log(JSON.stringify(listPages()))
}
