// scripts/buildProject.js
const { exec } = require('child_process')

exec('npm run build', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error de build: ${err}`)
    return
  }
  console.log(stdout)
})
