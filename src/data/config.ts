import { link } from 'fs'
import { describe } from 'node:test'

interface Site {
  title: string
  description: string
  url: string
}

interface Footer {
  name: string
}

interface NavigationData {
  text: Array<string>
  links: Array<string>
}

interface Navigation {
  [key: string]: NavigationData
}

export const Site = {
  title: 'Mánu Fosela personal page',
  description: 'Personal page of Mánu Fosela, Chief Operating Officer at LeanMind',
  url: 'https://manufosela.es'
} as Site

export const Footer = {
  name: 'Mánu Fosela'
} as Footer

export const Navigation = {
  es: {
    text: ['Inicio', 'Sobre mí', 'Contribuciones', 'Artículos', 'Media'],
    links: ['/', '/about', '/contributions', '/articles', '/media']
  },
  en: {
    text: ['Home', 'About', 'Contributions', 'Articles', 'Media'],
    links: ['/', '/about', '/contributions', '/articles', '/media']
  }
} as Navigation
