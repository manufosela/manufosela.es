// scripts/adminFunctions.js

// Obtener la lista de páginas
export async function loadPagesList() {
  const response = await fetch('/scripts/listPages.js')
  const pages = await response.json()
  return pages
}

// Cargar el contenido de la página seleccionada
export async function loadPageContent(pageName) {
  // Fetch a Node endpoint that will return and process the selected page
  const response = await fetch(`/scripts/loadPageContent.js?page=${pageName}`)
  const content = await response.text()

  // Insert the content with contenteditable if needed
  document.getElementById('content').innerHTML = content
}

// Guardar contenido actualizado
export async function saveContent() {
  const content = document.getElementById('content').innerHTML
  await fetch('/scripts/saveContent.js', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content })
  })
}

// Función para construir el proyecto
export async function buildProject() {
  await fetch('/scripts/buildProject.js', { method: 'POST' })
}

// Función para desplegar el proyecto
export async function deployProject() {
  await fetch('/scripts/deployProject.js', { method: 'POST' })
}
