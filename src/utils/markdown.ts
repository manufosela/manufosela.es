/**
 * Convierte enlaces en formato Markdown a HTML
 * @param text Texto que puede contener enlaces en formato Markdown
 * @returns Texto con los enlaces convertidos a HTML
 */
export function convertMarkdownLinks(text: string): string {
  return text.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );
}
