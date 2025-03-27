// scripts/deployProject.js
const { exec } = require('child_process')

exec('firebase deploy --only=hosting', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error de deploy: ${err}`)
    return
  }
  console.log(stdout)
})
