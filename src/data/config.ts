import { link } from 'fs';
import { describe } from 'node:test';

interface Site {
  title: string;
  description: string;
  url: string;
}

interface Footer {
  name: string;
}

interface NavigationData {
  text: Array<string>;
  links: Array<string>;
}

interface Navigation {
  [key: string]: NavigationData;
}

export const Site = {
  title: 'Manu Fosela',
  description: 'Personal website of Manu Fosela, Head of Engineering at Geniova Technologies',
  url: 'https://manufosela.es'
} as const;

export const Footer = {
  name: 'Mánu Fosela'
} as Footer;

export const Navigation = {
  es: {
    text: ['Inicio', 'Sobre mí', 'Contribuciones', 'Artículos', 'Media'],
    links: ['/', '/about', '/contributions', '/articles', '/media']
  },
  en: {
    text: ['Home', 'About', 'Contributions', 'Articles', 'Media'],
    links: ['/', '/about', '/contributions', '/articles', '/media']
  }
} as Navigation;

export const Book = {
  es: {
    title: 'Mi nuevo libro: Liderazgo Afectivo',
    description: 'Descubre mi nuevo libro sobre liderazgo emocional y gestión de equipos.',
    bookLink: 'https://liderazgoafectivo.com',
    blogLink: 'https://manufosela.substack.com'
  },
  en: {
    title: 'My new book: Affective Leadership',
    description: 'Discover my new book about emotional leadership and team management.',
    bookLink: 'https://liderazgoafectivo.com',
    blogLink: 'https://manufosela.substack.com'
  }
} as const;
