const STORAGE_KEY = 'manufosela.globalState';
export const THEME_KEY = `${STORAGE_KEY}.theme`;

/**
 * Inicializa el estado global leyendo de localStorage o usando valores por defecto del navegador.
 */
export function initializeThemeState() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  const theme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  if (!savedTheme) localStorage.setItem(THEME_KEY, theme);
  return theme;
}

/**
 * Obtiene el tema actual desde localStorage.
 */
export function getTheme() {
  return localStorage.getItem(THEME_KEY) || initializeState().theme;
}

/**
 * Establece un nuevo tema y lo guarda en localStorage.
 * @param {string} theme - El nuevo tema a establecer.
 */
export function setTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
}

document.addEventListener("DOMContentLoaded", () => {
  const currentTheme = initializeThemeState();
  setTheme(currentTheme);
  document.body.classList.add(currentTheme);
  console.log('Tema actual:', currentTheme);
});
