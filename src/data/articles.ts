export const articlesDesc = {
  es: 'Collage de 4 fotos. Foto de un post en LinkedIn sobre liderazgo. Foto de un post en LinkedIn sobre organización jerarquica y agile. Foto de un post en LinkedIn sobre cambio de empresa. Foto de un post en LinkedIn sobre ascenso en la empresa',
  en: 'Collage of 4 photos. Photo of a post on LinkedIn about leadership. Photo of a post on LinkedIn about hierarchical organization and agile. Photo of a post on LinkedIn about changing companies. Photo of a post on LinkedIn about moving up in the company'
} as { [key: string]: string }

interface Article {
  title: string
  link: string
}

interface Articles {
  [key: string]: {
    [key: string]: Article[]
  }
}

export const articlesData = {
  es: {
    Liderazgo: [
      {
        title: 'Como ser un buen líder',
        link: 'https://www.linkedin.com/pulse/c%25C3%25B3mo-ser-un-buen-l%25C3%25ADder-m%25C3%25A1nu-fosela'
      },
      {
        title: 'Organización jerarquica y agile',
        link: 'https://www.linkedin.com/pulse/organizaci%25C3%25B3n-jer%25C3%25A1rquica-y-agile-m%25C3%25A1nu-fosela'
      },
      {
        title: 'Hace 6 meses cambié de empresa',
        link: 'https://www.linkedin.com/pulse/hace-6-meses-que-cambi%25C3%25A9-de-empresa-m%25C3%25A1nu-fosela-dtygf'
      },
      {
        title: 'Cómo ascender en la empresa',
        link: 'https://www.linkedin.com/pulse/c%25C3%25B3mo-ascender-en-la-empresa-m%25C3%25A1nu-fosela'
      },
      {
        title: 'Están buscando Talento o pareja',
        link: 'https://www.linkedin.com/pulse/est%25C3%25A1n-buscando-talento-o-pareja-manuel-juan-fosela-aguila'
      }
    ],
    Tecnologia: [
      {
        title: 'Si sabes cocinar con Thermomix ¿eres cocinero?',
        link: 'https://www.linkedin.com/pulse/si-sabes-cocinar-con-thermomix-eres-un-cocinero-m%25C3%25A1nu-fosela/'
      },
      {
        title: 'Developer FullStack',
        link: 'https://www.linkedin.com/pulse/developer-fullstack-m%25C3%25A1nu-fosela'
      },
      {
        title: 'Javascript Proxy: algunos usos prácticos',
        link: 'https://dev.to/manufosela/javascript-proxy-algunos-usos-practicos-1hie'
      },
      {
        title: 'Desarrollo web y web components',
        link: 'https://dev.to/manufosela/desarrollo-web-y-web-components-1j0g'
      },
      {
        title: 'Introducción práctica a Docker y Docker Compose',
        link: 'https://medium.com/@manufosela/introducci%C3%B3n-pr%C3%A1ctica-a-docker-y-docker-compose-f0dba8d7fd28'
      }
    ]
  },
  en: {
    Lidership: [
      {
        title: 'How to be a good leader',
        link: 'https://www.linkedin.com/pulse/c%25C3%25B3mo-ser-un-buen-l%25C3%25ADder-m%25C3%25A1nu-fosela'
      },
      {
        title: 'Hierarchical organization and agile',
        link: 'https://www.linkedin.com/pulse/organizaci%25C3%25B3n-jer%25C3%25A1rquica-y-agile-m%25C3%25A1nu-fosela'
      },
      {
        title: '6 months ago I changed companies',
        link: 'https://www.linkedin.com/pulse/hace-6-meses-que-cambi%25C3%25A9-de-empresa-m%25C3%25A1nu-fosela-dtygf'
      },
      {
        title: 'How to move up in the company',
        link: 'https://www.linkedin.com/pulse/c%25C3%25B3mo-ascender-en-la-empresa-m%25C3%25A1nu-fosela'
      },
      {
        title: 'Are they looking for Talent or a partner',
        link: 'https://www.linkedin.com/pulse/est%25C3%25A1n-buscando-talento-o-pareja-manuel-juan-fosela-aguila'
      }
    ],
    Technology: [
      {
        title: 'If you know how to cook with Thermomix, are you a cook?',
        link: 'https://www.linkedin.com/pulse/si-sabes-cocinar-con-thermomix-eres-un-cocinero-m%25C3%25A1nu-fosela/'
      },
      {
        title: 'Developer FullStack',
        link: 'https://www.linkedin.com/pulse/developer-fullstack-m%25C3%25A1nu-fosela'
      },
      {
        title: 'Javascript Proxy: some practical uses',
        link: 'https://dev.to/manufosela/javascript-proxy-algunos-usos-practicos-1hie'
      },
      {
        title: 'Web Development and web components',
        link: 'https://dev.to/manufosela/desarrollo-web-y-web-components-1j0g'
      },
      {
        title: 'Practical introduction to Docker and Docker Compose',
        link: 'https://medium.com/@manufosela/introducci%C3%B3n-pr%C3%A1ctica-a-docker-y-docker-compose-f0dba8d7fd28'
      }
    ]
  }
} as Articles
