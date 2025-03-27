export const mediaDesc = {
  es: 'Collage de capturas de pantalla de diferentes videos de las charlas de Mánu Fosela',
  en: "Collage of screenshots of different videos of Mánu Fosela's talks"
} as { [key: string]: string }

interface Media {
  title: string
  link: string
}

interface Medias {
  [key: string]: {
    [key: string]: Media[]
  }
}

export const mediaData: Medias = {
  es: {
    Charlas: [
      {
        title: 'Liderar no es coser y cantar (CommitConf 2024)',
        link: 'https://www.youtube.com/watch?v=WNlaWIQseUo'
      },
      {
        title: 'Liderar o Liderrar (Codemotion 2024)',
        link: 'https://www.youtube.com/watch?v=4Zen-_UsWis'
      },
      {
        title: 'Cómo refactorizar tu código para que sea sostenible (2024)',
        link: 'https://www.youtube.com/watch?v=DHypxM3cBFA&pp=ygULbWFudSBmb3NlbGE%3D'
      },
      {
        title: 'Lo que no te contaron de los web-components (Salmorejo Tech 2022)',
        link: 'https://www.youtube.com/watch?v=VAhQRA9NurA'
      },
      {
        title: 'Entre componentes anda el juego (2021)',
        link: 'https://www.youtube.com/watch?v=P-t9MJ1dGLE&t=13s&pp=ygULbWFudSBmb3NlbGE%3D'
      },
      {
        title: 'Principios fundamentales del desarrollo web-components (2021)',
        link: 'https://www.youtube.com/watch?v=UxsvI_R0qeI&t=12s&pp=ygULbWFudSBmb3NlbGE%3D'
      },
      {
        title: 'VueJS y Docker (2019)',
        link: 'https://www.youtube.com/watch?v=4QaQT1iVSBA&t=29s&pp=ygULbWFudSBmb3NlbGE%3D'
      }
    ],
    Entrevistas: [
      {
        title: 'Hablando con Tech Leaders (podcast) (2024)',
        link: 'https://www.youtube.com/watch?v=yTAEVLwuK-E&pp=ygULbWFudSBmb3NlbGE%3D'
      },
      {
        title: 'Commitconf 2024',
        link: 'https://www.youtube.com/watch?v=VfM7tiwKpMQ&t=8s&pp=ygULbWFudSBmb3NlbGE%3D'
      },
      {
        title: 'Ni cero ni uno (podcast) (2023)',
        link: 'https://savvily.es/podcasts/ni-cero-ni-uno/episodios/e46/'
      },
      {
        title: 'ETSII Job Days URJC (2022)',
        link: 'https://www.youtube.com/watch?v=eEEZzipbYQc&t=1014s&pp=ygULbWFudSBmb3NlbGE%3D'
      },
      {
        title: 'Socra Talks (2021)',
        link: 'https://www.youtube.com/watch?v=1DbKhCMaR9M&t=45s&pp=ygULbWFudSBmb3NlbGE%3D'
      }
    ]
  },
  en: {
    Talks: [
      {
        title: 'Leading is Not a Walk in the Park (CommitConf 2024)',
        link: 'https://www.youtube.com/watch?v=WNlaWIQseUo'
      },
      {
        title: 'Lead or Bleed (Codemotion 2024)',
        link: 'https://www.youtube.com/watch?v=4Zen-_UsWis'
      },
      {
        title: 'How to Refactor Your Code for Maintainability (2024)',
        link: 'https://www.youtube.com/watch?v=DHypxM3cBFA&pp=ygULbWFudSBmb3NlbGE%3D'
      },
      {
        title: "What They Didn't Tell You About Web Components (Salmorejo Tech 2022)",
        link: 'https://www.youtube.com/watch?v=VAhQRA9NurA'
      },
      {
        title: 'The Game is in the Components (2021)',
        link: 'https://www.youtube.com/watch?v=P-t9MJ1dGLE&t=13s&pp=ygULbWFudSBmb3NlbGE%3D'
      },
      {
        title: 'Fundamental Principles of Web Components Development (2021)',
        link: 'https://www.youtube.com/watch?v=UxsvI_R0qeI&t=12s&pp=ygULbWFudSBmb3NlbGE%3D'
      },
      {
        title: 'VueJS and Docker (2019)',
        link: 'https://www.youtube.com/watch?v=4QaQT1iVSBA&t=29s&pp=ygULbWFudSBmb3NlbGE%3D'
      }
    ],
    Interviews: [
      {
        title: 'Talking with Tech Leaders (podcast) (2024)',
        link: 'https://www.youtube.com/watch?v=yTAEVLwuK-E&pp=ygULbWFudSBmb3NlbGE%3D'
      },
      {
        title: 'Commitconf 2024',
        link: 'https://www.youtube.com/watch?v=VfM7tiwKpMQ&t=8s&pp=ygULbWFudSBmb3NlbGE%3D'
      },
      {
        title: 'Neither Zero nor One (podcast) (2023)',
        link: 'https://savvily.es/podcasts/ni-cero-ni-uno/episodios/e46/'
      },
      {
        title: 'ETSII Job Days URJC (2022)',
        link: 'https://www.youtube.com/watch?v=eEEZzipbYQc&t=1014s&pp=ygULbWFudSBmb3NlbGE%3D'
      },
      {
        title: 'Socra Talks (2021)',
        link: 'https://www.youtube.com/watch?v=1DbKhCMaR9M&t=45s&pp=ygULbWFudSBmb3NlbGE%3D'
      }
    ]
  }
} as Medias

interface Link {
  name: string
  url: string
}

interface Links {
  contact: Array<Link>
  social: Array<Link>
  software: Array<Link>
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
} as Links
