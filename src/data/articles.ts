export const articlesDesc = {
  es: 'Collage de 4 fotos. Foto de un post en LinkedIn sobre liderazgo. Foto de un post en LinkedIn sobre organización jerarquica y agile. Foto de un post en LinkedIn sobre cambio de empresa. Foto de un post en LinkedIn sobre ascenso en la empresa',
  en: 'Collage of 4 photos. Photo of a post on LinkedIn about leadership. Photo of a post on LinkedIn about hierarchical organization and agile. Photo of a post on LinkedIn about changing companies. Photo of a post on LinkedIn about moving up in the company'
} as { [key: string]: string };

interface Article {
  title: string;
  url: string;
}

interface ArticlesByYear {
  [key: string]: Article[];
}

interface Tab {
  name: string;
  articles: ArticlesByYear;
}

interface Articles {
  [key: string]: Tab[];
}

export const articles: Articles = {
  es: [
    {
      name: 'Liderazgo',
      articles: {
        '2025': [
          {
            title: 'Proceso de creación del libro "Liderazgo Afectivo"',
            url: 'https://manufosela.substack.com/p/mi-libro-liderazgo-afectivo5'
          },
          {
            title: 'La empatia',
            url: 'https://manufosela.substack.com/p/la-empatia'
          },
          {
            title: 'El futuro de las empresas: líderes afectivos',
            url: 'https://manufosela.substack.com/p/el-futuro-de-las-empresas-lideres'
          },
          {
            title: 'Disculpa, ¿Tienes F.O.G.O.?',
            url: 'https://www.linkedin.com/feed/update/urn:li:activity:7321163293581041668/'
          }
        ],
        '2024': [
          {
            title: 'Reflexiones de un Año en Lean Mind: Crecimiento, Cambio y Nuevos Retos',
            url: 'https://www.linkedin.com/pulse/reflexiones-de-un-a%25C3%25B1o-en-lean-mind-crecimiento-cambio-m%25C3%25A1nu-fosela-fncaf/?trackingId=vkQm65cdScuQf%2BhHsa3iHA%3D%3D'
          },
          {
            title: 'Hace 6 meses cambié de empresa',
            url: 'https://www.linkedin.com/pulse/hace-6-meses-que-cambi%25C3%25A9-de-empresa-m%25C3%25A1nu-fosela-dtygf'
          },
          {
            title: 'El bienestar de los empleados',
            url: 'https://www.linkedin.com/pulse/el-bienestar-de-los-empleados-m%25C3%25A1nu-fosela-whwof/?trackingId=vkQm65cdScuQf%2BhHsa3iHA%3D%3D'
          }
        ],
        '2022': [
          {
            title: 'Como ser un buen líder',
            url: 'https://www.linkedin.com/pulse/c%25C3%25B3mo-ser-un-buen-l%25C3%25ADder-m%25C3%25A1nu-fosela'
          }
        ],
        '2021': [
          {
            title: 'Organización jerarquica y agile',
            url: 'https://www.linkedin.com/pulse/organizaci%25C3%25B3n-jer%25C3%25A1rquica-y-agile-m%25C3%25A1nu-fosela'
          }
        ],
        '2018': [
          {
            title: 'Cómo ascender en la empresa',
            url: 'https://www.linkedin.com/pulse/c%25C3%25B3mo-ascender-en-la-empresa-m%25C3%25A1nu-fosela'
          },
          {
            title: 'Están buscando Talento o pareja',
            url: 'https://www.linkedin.com/pulse/est%25C3%25A1n-buscando-talento-o-pareja-manuel-juan-fosela-aguila'
          }
        ]
      }
    },
    {
      name: 'Tecnología',
      articles: {
        '2023': [
          {
            title: 'Developer FullStack',
            url: 'https://www.linkedin.com/pulse/developer-fullstack-m%25C3%25A1nu-fosela'
          }
        ],
        '2022': [
          {
            title: 'Si sabes cocinar con Thermomix, ¿eres cocinero?',
            url: 'https://www.linkedin.com/pulse/si-sabes-cocinar-con-thermomix-eres-un-cocinero-m%25C3%25A1nu-fosela/'
          },
          {
            title: 'Javascript Proxy: algunos usos prácticos',
            url: 'https://dev.to/manufosela/javascript-proxy-algunos-usos-practicos-1hie'
          },
          {
            title: 'Desarrollo web y web components',
            url: 'https://dev.to/manufosela/desarrollo-web-y-web-components-1j0g'
          }
        ],
        '2021': [
          {
            title: 'Introducción práctica a Docker y Docker Compose',
            url: 'https://medium.com/@manufosela/introducci%C3%B3n-pr%C3%A1ctica-a-docker-y-docker-compose-f0dba8d7fd28'
          }
        ]
      }
    }
  ],
  en: [
    {
      name: 'Leadership',
      articles: {
        '2025': [
          {
            title: 'Process of creating the book "Affective Leadership"',
            url: 'https://manufosela.substack.com/p/mi-libro-liderazgo-afectivo5'
          },
          {
            title: 'Empathy',
            url: 'https://manufosela.substack.com/p/la-empatia'
          },
          {
            title: 'The future of companies: affective leaders',
            url: 'https://manufosela.substack.com/p/el-futuro-de-las-empresas-lideres'
          },
          {
            title: 'Excuse me, do you have F.O.G.O.?',
            url: 'https://www.linkedin.com/feed/update/urn:li:activity:7321163293581041668/'
          }
        ],
        '2024': [
          {
            title: 'Reflections on a Year at Lean Mind: Growth, Change and New Challenges',
            url: 'https://www.linkedin.com/pulse/reflexiones-de-un-a%25C3%25B1o-en-lean-mind-crecimiento-cambio-m%25C3%25A1nu-fosela-fncaf/?trackingId=vkQm65cdScuQf%2BhHsa3iHA%3D%3D'
          },
          {
            title: '6 months ago I changed companies',
            url: 'https://www.linkedin.com/pulse/hace-6-meses-que-cambi%25C3%25A9-de-empresa-m%25C3%25A1nu-fosela-dtygf'
          },
          {
            title: 'Employee well-being',
            url: 'https://www.linkedin.com/pulse/el-bienestar-de-los-empleados-m%25C3%25A1nu-fosela-whwof/?trackingId=vkQm65cdScuQf%2BhHsa3iHA%3D%3D'
          }
        ],
        '2022': [
          {
            title: 'How to be a good leader',
            url: 'https://www.linkedin.com/pulse/c%25C3%25B3mo-ser-un-buen-l%25C3%25ADder-m%25C3%25A1nu-fosela'
          }
        ],
        '2021': [
          {
            title: 'Hierarchical organization and agile',
            url: 'https://www.linkedin.com/pulse/organizaci%25C3%25B3n-jer%25C3%25A1rquica-y-agile-m%25C3%25A1nu-fosela'
          }
        ],
        '2018': [
          {
            title: 'How to move up in the company',
            url: 'https://www.linkedin.com/pulse/c%25C3%25B3mo-ascender-en-la-empresa-m%25C3%25A1nu-fosela'
          },
          {
            title: 'Are they looking for Talent or a partner',
            url: 'https://www.linkedin.com/pulse/est%25C3%25A1n-buscando-talento-o-pareja-manuel-juan-fosela-aguila'
          }
        ]
      }
    },
    {
      name: 'Technology',
      articles: {
        '2023': [
          {
            title: 'Developer FullStack',
            url: 'https://www.linkedin.com/pulse/developer-fullstack-m%25C3%25A1nu-fosela'
          }
        ],
        '2022': [
          {
            title: 'If you know how to cook with Thermomix, are you a cook?',
            url: 'https://www.linkedin.com/pulse/si-sabes-cocinar-con-thermomix-eres-un-cocinero-m%25C3%25A1nu-fosela/'
          },
          {
            title: 'Javascript Proxy: some practical uses',
            url: 'https://dev.to/manufosela/javascript-proxy-algunos-usos-practicos-1hie'
          },
          {
            title: 'Web Development and web components',
            url: 'https://dev.to/manufosela/desarrollo-web-y-web-components-1j0g'
          }
        ],
        '2021': [
          {
            title: 'Practical introduction to Docker and Docker Compose',
            url: 'https://medium.com/@manufosela/introducci%C3%B3n-pr%C3%A1ctica-a-docker-y-docker-compose-f0dba8d7fd28'
          }
        ]
      }
    }
  ]
};
