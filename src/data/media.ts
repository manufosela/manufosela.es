export const mediaDesc = {
  es: 'Collage de capturas de pantalla de diferentes videos de las charlas de Mánu Fosela',
  en: "Collage of screenshots of different videos of Mánu Fosela's talks"
} as { [key: string]: string };

interface Media {
  title: string;
  link: string;
}

interface MediaByYear {
  [key: string]: Media[];
}

interface MediaByType {
  Charlas?: MediaByYear;
  Entrevistas?: MediaByYear;
  Talks?: MediaByYear;
  Interviews?: MediaByYear;
}

interface Medias {
  [key: string]: MediaByType;
}

export const mediaData: Medias = {
  es: {
    Charlas: {
      '2025': [
        {
          title: 'Liderazgo Afectivo: Transformando organizaciones a través de conexiones humanas (Commintconf) (3/3)',
          link: 'https://www.youtube.com/watch?v=lb0dHsvZyOA'
        },
        {
          title: 'Liderazgo Afectivo: Liderar desde el afecto (Sirviendo Codigo)',
          link: 'https://www.youtube.com/watch?v=tCvEQM4drIs'
        },
        {
          title: 'Presentación del libro: Liderazgo Afectivo (Celonis)',
          link: 'https://www.youtube.com/watch?v=7Pa0sjV0EFU'
        }
      ],
      '2024': [
        {
          title: 'Liderar no es coser y cantar (CommitConf) (1/3)',
          link: 'https://www.youtube.com/watch?v=WNlaWIQseUo'
        },
        {
          title: 'Liderar o Liderrar (Codemotion) (2/3)',
          link: 'https://www.youtube.com/watch?v=4Zen-_UsWis'
        },
        {
          title: 'Cómo refactorizar tu código para que sea sostenible',
          link: 'https://www.youtube.com/watch?v=DHypxM3cBFA&pp=ygULbWFudSBmb3NlbGE%3D'
        }
      ],
      '2022': [
        {
          title: 'Lo que no te contaron de los web-components (Salmorejo Tech)',
          link: 'https://www.youtube.com/watch?v=VAhQRA9NurA'
        }
      ],
      '2021': [
        {
          title: 'Entre componentes anda el juego',
          link: 'https://www.youtube.com/watch?v=P-t9MJ1dGLE&t=13s&pp=ygULbWFudSBmb3NlbGE%3D'
        },
        {
          title: 'Principios fundamentales del desarrollo web-components',
          link: 'https://www.youtube.com/watch?v=UxsvI_R0qeI&t=12s&pp=ygULbWFudSBmb3NlbGE%3D'
        }
      ],
      '2019': [
        {
          title: 'VueJS y Docker',
          link: 'https://www.youtube.com/watch?v=4QaQT1iVSBA&t=29s&pp=ygULbWFudSBmb3NlbGE%3D'
        }
      ]
    },
    Entrevistas: {
      '2025': [
        {
          title: 'Cómo montar equipos técnicos (GetManfred)',
          link: 'https://www.youtube.com/watch?v=BBDL4i9TaF0'
        }
      ],
      '2024': [
        {
          title: 'Podcast: Hablando con Tech Leaders',
          link: 'https://www.youtube.com/watch?v=yTAEVLwuK-E&pp=ygULbWFudSBmb3NlbGE%3D'
        },
        {
          title: 'Commitconf 2024',
          link: 'https://www.youtube.com/watch?v=VfM7tiwKpMQ&t=8s&pp=ygULbWFudSBmb3NlbGE%3D'
        }
      ],
      '2023': [
        {
          title: 'Podacast: Ni cero ni uno',
          link: 'https://savvily.es/podcasts/ni-cero-ni-uno/episodios/e46/'
        }
      ],
      '2022': [
        {
          title: 'ETSII Job Days URJC (2022)',
          link: 'https://www.youtube.com/watch?v=eEEZzipbYQc&t=1014s&pp=ygULbWFudSBmb3NlbGE%3D'
        }
      ],
      '2021': [
        {
          title: 'Socra Talks (2021)',
          link: 'https://www.youtube.com/watch?v=1DbKhCMaR9M&t=45s&pp=ygULbWFudSBmb3NlbGE%3D'
        }
      ]
    }
  },
  en: {
    Talks: {
      '2025': [
        {
          title: 'Affective Leadership: Transforming organizations through human connections (CommitConf) (3/3)',
          link: 'https://www.youtube.com/watch?v=lb0dHsvZyOA'
        },
        {
          title: 'Affective Leadership: Leading with affection (Sirviendo Codigo)',
          link: 'https://www.youtube.com/watch?v=tCvEQM4drIs'
        },
        {
          title: 'Book presentation: Affective Leadership (Celonis)',
          link: 'https://www.youtube.com/watch?v=7Pa0sjV0EFU'
        }
      ],
      '2024': [
        {
          title: 'Leading is Not a Walk in the Park (CommitConf)',
          link: 'https://www.youtube.com/watch?v=WNlaWIQseUo'
        },
        {
          title: 'Lead or Bleed (Codemotion)',
          link: 'https://www.youtube.com/watch?v=4Zen-_UsWis'
        },
        {
          title: 'How to Refactor Your Code for Maintainability (2024)',
          link: 'https://www.youtube.com/watch?v=DHypxM3cBFA&pp=ygULbWFudSBmb3NlbGE%3D'
        }
      ],
      '2022': [
        {
          title: "What They Didn't Tell You About Web Components (Salmorejo Tech 2022)",
          link: 'https://www.youtube.com/watch?v=VAhQRA9NurA'
        }
      ],
      '2021': [
        {
          title: 'The Game is in the Components (2021)',
          link: 'https://www.youtube.com/watch?v=P-t9MJ1dGLE&t=13s&pp=ygULbWFudSBmb3NlbGE%3D'
        },
        {
          title: 'Fundamental Principles of Web Components Development (2021)',
          link: 'https://www.youtube.com/watch?v=UxsvI_R0qeI&t=12s&pp=ygULbWFudSBmb3NlbGE%3D'
        }
      ],
      '2019': [
        {
          title: 'VueJS and Docker (2019)',
          link: 'https://www.youtube.com/watch?v=4QaQT1iVSBA&t=29s&pp=ygULbWFudSBmb3NlbGE%3D'
        }
      ]
    },
    Interviews: {
      '2025': [
        {
          title: 'How to build technical teams (GetManfred)',
          link: 'https://www.youtube.com/watch?v=BBDL4i9TaF0'
        }
      ],
      '2024': [
        {
          title: 'Talking with Tech Leaders (podcast) (2024)',
          link: 'https://www.youtube.com/watch?v=yTAEVLwuK-E&pp=ygULbWFudSBmb3NlbGE%3D'
        },
        {
          title: 'Commitconf 2024',
          link: 'https://www.youtube.com/watch?v=VfM7tiwKpMQ&t=8s&pp=ygULbWFudSBmb3NlbGE%3D'
        }
      ],
      '2023': [
        {
          title: 'Neither Zero nor One (podcast) (2023)',
          link: 'https://savvily.es/podcasts/ni-cero-ni-uno/episodios/e46/'
        }
      ],
      '2022': [
        {
          title: 'ETSII Job Days URJC (2022)',
          link: 'https://www.youtube.com/watch?v=eEEZzipbYQc&t=1014s&pp=ygULbWFudSBmb3NlbGE%3D'
        }
      ],
      '2021': [
        {
          title: 'Socra Talks (2021)',
          link: 'https://www.youtube.com/watch?v=1DbKhCMaR9M&t=45s&pp=ygULbWFudSBmb3NlbGE%3D'
        }
      ]
    }
  }
} as Medias;

interface Link {
  name: string;
  url: string;
}

interface Links {
  contact: Array<Link>;
  social: Array<Link>;
  software: Array<Link>;
}

export const Links = {
  contact: [
    {
      name: 'Telegram',
      url: 'https://t.me/manufosela'
    },
    {
      name: 'Email',
      url: 'mailto:manu@fosela.com'
    }
  ],
  social: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/manufosela/'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/manufosela'
    },
    {
      name: 'Bluesky',
      url: 'https://bsky.app/profile/manufosela.es'
    }
  ],
  software: [
    {
      name: 'GitHub',
      url: 'https://github.com/manufosela'
    },
    {
      name: 'StackOverflow',
      url: 'https://stackoverflow.com/users/1833198/manufosela'
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/manufosela'
    },
    {
      name: 'Npm',
      url: 'https://www.npmjs.com/~manufosela'
    }
  ]
} as Links;
