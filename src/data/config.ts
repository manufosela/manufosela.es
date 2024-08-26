import { link } from 'fs';
import { describe } from 'node:test';

const edad = new Date().getFullYear() - 1971;
const ultimosaños = new Date().getFullYear() - 1997;

interface Site {
  title: string,
  description: string,
  url: string,
}

interface Footer {
  name: string,
}

interface NavigationData {
  text: Array<string>,
  links: Array<string>,
}

interface Navigation {
  [key: string]: NavigationData;
}

interface Person {
  name: string,
  rol: string,
  position: string,
  bio: string,
}

interface Persons {
  [key: string]: Person,
}

interface Link {
  name: string,
  url: string,
}

interface Links {
  contact: Array<Link>,
  social: Array<Link>,
  software: Array<Link>,
}

interface About {
  title: string,
  slides: {
    subtitle: string,
    description: string,
  }[],
}

interface Abouts {
  [key: string]: About,
}

interface Project {
  title: string,
  description: string,
}

interface Contributions {
  [key: string]: Project[],
}

interface Article {
  title: string,
  link: string,
}

interface Articles {
  [key: string]: {
    [key: string]: Article[],
  },
}

interface Media {
  title: string;
  link: string;
}

interface Medias {
  [key: string]: {
    [key: string]: Media[];
  },
}

export const Site = {
  title: 'Mánu Fosela personal page',
  description: 'Personal page of Mánu Fosela, Chief Operating Officer at LeanMind',
  url: 'https://manufosela.es',
} as Site

export const indexDesc = {
  'es': 'Imagen de Mánu Fosela, con camisa azul celeste y tirantes azul oscuro. De lado, con brazos cruzados. La imagen ocupa la mitad izquierda de la pantalla',
  'en': 'Image of Mánu Fosela, with light blue shirt and dark blue suspenders. Sideways, with arms crossed. The image takes up the left half of the screen',
} as { [key: string]: string }

export const aboutDesc = {
  'es': 'Collage de 9 fotos. De izquierda a derecha y de arriba a abajo. Foto con el equipo de Kairós en el ultimo JSDay Madrid. Foto con todo el equipo de LeanMind en Tenerife. Selfie de Mánu en la oficina de LeanMind con el logo de la empresa de fondo. Foto del equipo de Madrid en un coworking. Foto con Adrián Ferrera durante un vuelo. Foto comiendo con compañeros de LeanMind en Gran Canaria. Foto del equipo de LeanMind en la Bilbostack 2024. Foto en la que estoy con mi hijo Dani, Carlos Blé y Rei Aguilera en la TRG23. Foto en la que estoy con Jorge del Casar y Rei Aguilera en la TRG23',
  'en': 'Collage of 9 photos. From left to right and top to bottom. Photo with the Kairós team at the last JSDay Madrid. Photo with the entire LeanMind team in Tenerife. Selfie of Mánu in the LeanMind office with the company logo in the background. Photo of the Madrid team in a coworking space. Photo with Adrián Ferrera during a flight. Photo eating with LeanMind colleagues in Gran Canaria. Photo of the LeanMind team at Bilbostack 2024. Photo in which I am with my son Dani, Carlos Blé and Rei Aguilera at TRG23. Photo in which I am with Jorge del Casar and Rei Aguilera at TRG23',
} as { [key: string]: string }

export const contributionsDesc = {
  'es': 'Collage de 3 fotos. Foto de la portada del libro "Liderazgo Afectivo". Captura del GitHub de Mánu. Captura de Codepen de Mánu',
  'en': 'Collage of 3 photos. Photo of the cover of the book "Affective Leadership". Screenshot of Mánu\'s GitHub. Screenshot of Mánu\'s Codepen',
} as { [key: string]: string }

export const articlesDesc = {
  'es': 'Collage de 4 fotos. Foto de un post en LinkedIn sobre liderazgo. Foto de un post en LinkedIn sobre organización jerarquica y agile. Foto de un post en LinkedIn sobre cambio de empresa. Foto de un post en LinkedIn sobre ascenso en la empresa',
  'en': 'Collage of 4 photos. Photo of a post on LinkedIn about leadership. Photo of a post on LinkedIn about hierarchical organization and agile. Photo of a post on LinkedIn about changing companies. Photo of a post on LinkedIn about moving up in the company',
} as { [key: string]: string }

export const mediaDesc = {
  'es': 'Collage de capturas de pantalla de diferentes videos de las charlas de Mánu Fosela',
  'en': 'Collage of screenshots of different videos of Mánu Fosela\'s talks',
} as { [key: string]: string }


export const Footer = {
  name: 'Mánu Fosela',
} as Footer

export const Navigation = {
  'es': {
    text: ['Inicio', 'Sobre mí', 'Contribuciones', 'Artículos', 'Media'],
    links: ['/', '/about', '/contributions', '/articles', '/media'],
  },
  'en': {
    text: ['Home', 'About', 'Contributions', 'Articles', 'Media'],
    links: ['/', '/about', '/contributions', '/articles', '/media'],
  },
} as Navigation

export const ManuFosela = {
  'es': {
    name: ' Mánu Fosela',
    rol: 'Líder Afectivo',
    position: 'Chief Operating Officer en LeanMind',
    bio: `Ingeniero de Telecomunicaciones.\nCentrado en las personas.\nApasionado por la Cultura Organizacional.\nInteresado en el liderazgo de equipos.\nApoyo a los Juniors.\nDesarrollador de fin de semana.\n`,
  },
  'en': {
    name: ' Mánu Fosela',
    rol: 'Affective Leader',
    position: 'Chief Operating Officer at LeanMind',
    bio: `Telecomunicactions Engineer.\nFocuses in people.\nPassionate about Organizational Culture.\nInterested in team leadership.\nSupport for Juniors.\nWeekEnd JS Dev.`,
  },
} as Persons

export const Links = {
  contact: [
    {
      name: 'Telegram',
      url: 'https://t.me/manufosela',
    },
    {
      name: 'Email',
      url: 'mailto:manu@fosela.com'
    },
  ],
  social: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/manufosela/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/manufosela',
    },
  ],
  software: [
    {
      name: 'GitHub',
      url: 'https://github.com/manufosela',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/manufosela',
    }, {
      name: 'StackOverflow',
      url: 'https://stackoverflow.com/users/1833198/manufosela',
    }, {
      name: 'npm',
      url: 'https://www.npmjs.com/~manufosela',
    }
  ],
} as Links

export const aboutData = {
  'es' : {
    title: 'Sobre mí',
    slides: [
      {
        subtitle: 'Personal',
        description:`Tengo ${edad} años. Nacido en Mayo.\nExtrovertido y divertido.\nApasionado. Creativo. Resolutivo.\nQuisquilloso a veces. Testarudo.\nMe molestan los cambios imprevistos, pero me adapto rápido a ellos.\nSoy el mayor de 5 hermanos.\nEsposo de una persona maravillosa y padre de dos jovenes estupendos.\nActualmente trabajo como Director de operaciones en Lean Mind.`,
      }, {
        subtitle: 'Profesional',
        description: `Durante los últimos ${ultimosaños} años, he participado en muchos proyectos que han ayudado a muchos clientes y empresas a alcanzar sus objetivos.\n
Ahora lo hago desde la perspectiva de la dirección de operaciones de una consultora tecnológica, aprovechando la experiencia que da haber trabajado para muchas empresas.\n
Empecé a desarrollar con 14 años, allá por el año 1985, escribiendo los programas en un cuaderno y luego iba a teclearlo a un ZX-Spectrum 48K de un amigo.\n
Estudié B.U.P., C.O.U., FP de Electrónica Industrial y después cursé dos especialidades de Ingenieria de Telecomunicaciones, Sistemas de telecomunicación y Telemática.\n
Por azares del destino entré a trabajar en una startup, plus.es, y arranqué mi andadura como desarrollador web.\n
He trabajado con ASP, Java, PHP, Perl, ShellScript, Javascript, desde vanilla ES1 hasta VueJS, pasando por dojo, prototype, scriptaculous, jquery, backbone, AngularJS, React, Angular 2, Polymer, Lit-Element...\n
Y me he pegado con sistemas Windows y Linux. Apache, Nginx. MySQL, Oracle, PostgreSQL, IBMDb2, mongoDB...\n
En total 20 años de experiencia en el mundo del desarrollo de software web.\n
Desde 2016 en la aventura del liderazgo, ayudando a mis compañeros a desarrollarse profesionalmente, a generar un entorno donde las personas trabajen a gusto, y puedan crecer, a encontrar proyectos donde aprender y aportar y ayudando y enseñando a nuestros clientes a crear software sostenible.`
      }, {
        subtitle: 'Experiencia',
        description: `Comencé trabajando en plus.es del Grupo Prisa.\n
Después estuve en Eresmas del grupo Auna, que compró después France Telecom, y que pasó a ser Orange.\n
Pase al sector de viajes y hoteles, en Mundicolor, del grupo Marsans.\n
El siguiente reto en una pequeña, por aquel entonces, empresa de reservas hoteleras llamada Mirai.\n
Volví a Orange, al departamento de I+D, en el que estuve 4 años, para después pasar al equipo de desarrollo de la web de Orange.\n
En 2015 me uní a Kairós DS, siendo el empleado 23 y donde comencé a dar el giro hacia el liderazgo de equipos y proyectos.\n
Actualmente, desde octubre de 2023, soy Director de Operaciones en Lean Mind.
      `
      },
    ]
  },
  'en': {
    title: 'About me',
    slides: [
      {
        subtitle: 'Personal',
        description: `I'm ${edad} years old. Born in May.\nOutgoing and fun.\nPassionate. Creative. Problem-solver.\nPicky sometimes. Stubborn.\nUnexpected changes bother me, but I adapt quickly to them.\nCurrently, I am the Director of Operations at Lean Mind.\nI am the eldest of 5 siblings.\nHusband to a wonderful person and father of two amazing young people.`,
      }, {
        subtitle: 'Professional',
        description: `Over the past ${ultimosaños} years, I have participated in many projects that have helped numerous clients and companies achieve their goals. Now, I do this from the perspective of operations management at a technology consulting firm, leveraging the experience gained from working with many companies.\n
I started developing at the age of 14, back in 1985, writing programs in a notebook and then typing them into a friend's ZX-Spectrum 48K.\n
I studied B.U.P., C.O.U., Industrial Electronics FP, and then pursued two specializations in Telecommunications Engineering: Telecommunication Systems and Telematics.\n
By chance, I began working at a startup, plus.es, and started my journey as a web developer.\n
I have worked with ASP, Java, PHP, Perl, ShellScript, JavaScript, from vanilla ES1 to VueJS, including dojo, prototype, scriptaculous, jquery, backbone, AngularJS, React, Angular 2, Polymer, Lit-Element...\n
I have also dealt with Windows and Linux systems. Apache, Nginx. MySQL, Oracle, PostgreSQL, IBMDb2, mongoDB...\n
In total, 20 years of experience in the world of web software development.\n
Since 2016, I have embarked on the leadership adventure, helping my colleagues develop professionally, creating an environment where people enjoy working and can grow, finding projects where they can learn and contribute, and assisting and teaching our clients to create maintainable software.`
      }, {
        subtitle: 'Experience',
        description: `I started working at plus.es, part of the Prisa Group.\n
After that, I was at Eresmas, part of the Auna Group, which was later acquired by France Telecom and became Orange.\n
I then moved to the travel and hospitality sector at Mundicolor, part of the Marsans Group.\nThe next challenge was at a small hotel booking company at the time, called Mirai.\n
I returned to Orange, where I spent 4 years in the R&D department, before joining the web development team at Orange.\n
In 2015, I joined Kairós DS as the 23rd employee, where I began transitioning towards team and project leadership.\n
Currently, since October 2023, I am the Director of Operations at Lean Mind.`
      },
    ],
  },
} as Abouts

export const contributionsData = {
  'es': [
    {
      title: 'Autor del libro "Liderazgo Afectivo"',
      description: '(a la venta próximamente) En el que cuento mi experiencia liderando equipos de desarrollo y como el liderazgo afectivo puede ayudar a mejorar la productividad y el bienestar de los equipos.',
    }, {
      title: 'Speaker',
      description: 'Doy charlas sobre temas de liderazgo. He hablado en eventos como Codemotion y CommitConf. Tambien doy charlas sobre desarrollo.',
    }, {
      title: 'Escritor de Artículos',
      description: 'Escribo artículos sobre liderazgo y desarrollo en LinkedIn, dev.to o medium.',
    }, {
      title: 'Organizador de Eventos Tecnológicos',
      description: 'Co-organizo meetups de NodeJSMadrid y Codify Meetup para la comunidad de desarrolladores en Madrid. He co-organizado eventos como el JSDay de Madrid y el Polymer Day.',
    }, {
      title: 'Mentor',
      description: 'Ayudo a personas que quieren empezar en el mundo de la programación y a personas que quieren dar el salto al liderazgo',
    }, {
      title: 'Contribuciones al Open Source',
      description: 'Tengo unos proyectos en GitHub, incluyendo herramientas para validación automática de formularios en JavaScript, introducción a docker y generadores de componentes web usando Lit-Element entre otros',
    },
  ],
  'en': [
    {
      title: 'Author of the book "Affective Leadership"',
      description: '(coming soon) In which I tell my experience leading development teams and how affective leadership can help improve the productivity and well-being of teams.',
    }, {
      title: 'Speaker',
      description: 'I give talks on leadership topics. I have spoken at events like Codemotion and CommitConf. I also give talks on development.',
    }, {
      title: 'Articles Writer',
      description: 'I write articles on leadership and development on LinkedIn, dev.to, or medium.',
    }, {
      title: 'Tech Events Organizer',
      description: 'I co-organize meetups for the NodeJSMadrid and Codify Meetup communities of developers in Madrid. I have co-organized events such as JSDay Madrid and Polymer Day.',
    }, {
      title: 'Mentor',
      description: 'I help people who want to start in the world of programming and people who want to make the leap to leadership',
    }, {
      title: 'Open Source contributions',
      description: 'I have some projects on GitHub, including tools for automatic form validation in JavaScript, an introduction to docker, and web component generators using Lit-Element, among others',
    },
  ],
} as Contributions

export const articlesData = {
  'es': {
    'Liderazgo': [
      {
        title: 'Como ser un buen líder',
        link: 'https://www.linkedin.com/pulse/c%25C3%25B3mo-ser-un-buen-l%25C3%25ADder-m%25C3%25A1nu-fosela',
      }, {
        title: 'Organización jerarquica y agile',
        link: 'https://www.linkedin.com/pulse/organizaci%25C3%25B3n-jer%25C3%25A1rquica-y-agile-m%25C3%25A1nu-fosela',
      },{
        title: 'Hace 6 meses cambié de empresa',
        link: 'https://www.linkedin.com/pulse/hace-6-meses-que-cambi%25C3%25A9-de-empresa-m%25C3%25A1nu-fosela-dtygf'
      }, {
        title: 'Cómo ascender en la empresa',
        link: 'https://www.linkedin.com/pulse/c%25C3%25B3mo-ascender-en-la-empresa-m%25C3%25A1nu-fosela',
      }, {
        title: 'Están buscando Talento o pareja',
        link: 'https://www.linkedin.com/pulse/est%25C3%25A1n-buscando-talento-o-pareja-manuel-juan-fosela-aguila',
      },
    ],
    'Tecnologia': [
      {
        title: 'Si sabes cocinar con Thermomix ¿eres cocinero?',
        link: 'https://www.linkedin.com/pulse/si-sabes-cocinar-con-thermomix-eres-un-cocinero-m%25C3%25A1nu-fosela/',
      }, {
        title: 'Developer FullStack',
        link: 'https://www.linkedin.com/pulse/developer-fullstack-m%25C3%25A1nu-fosela',
      }, {
        title: 'Javascript Proxy: algunos usos prácticos',
        link: 'https://dev.to/manufosela/javascript-proxy-algunos-usos-practicos-1hie',
      }, {
        title: 'Desarrollo web y web components',
        link: 'https://dev.to/manufosela/desarrollo-web-y-web-components-1j0g',
      }, {
        title: 'Introducción práctica a Docker y Docker Compose',
        link: 'https://medium.com/@manufosela/introducci%C3%B3n-pr%C3%A1ctica-a-docker-y-docker-compose-f0dba8d7fd28',
      },
    ],
  },
  'en': {
    'Lidership': [
      {
        title: 'How to be a good leader',
        link: 'https://www.linkedin.com/pulse/c%25C3%25B3mo-ser-un-buen-l%25C3%25ADder-m%25C3%25A1nu-fosela',
      }, {
        title: 'Hierarchical organization and agile',
        link: 'https://www.linkedin.com/pulse/organizaci%25C3%25B3n-jer%25C3%25A1rquica-y-agile-m%25C3%25A1nu-fosela',
      }, {
        title: '6 months ago I changed companies',
        link: 'https://www.linkedin.com/pulse/hace-6-meses-que-cambi%25C3%25A9-de-empresa-m%25C3%25A1nu-fosela-dtygf',
      }, {
        title: 'How to move up in the company',
        link: 'https://www.linkedin.com/pulse/c%25C3%25B3mo-ascender-en-la-empresa-m%25C3%25A1nu-fosela',
      }, {
        title: 'Are they looking for Talent or a partner',
        link: 'https://www.linkedin.com/pulse/est%25C3%25A1n-buscando-talento-o-pareja-manuel-juan-fosela-aguila',
      },
    ],
    'Technology': [
      {
        title: 'If you know how to cook with Thermomix, are you a cook?',
        link: 'https://www.linkedin.com/pulse/si-sabes-cocinar-con-thermomix-eres-un-cocinero-m%25C3%25A1nu-fosela/',
      }, {
        title: 'Developer FullStack',
        link: 'https://www.linkedin.com/pulse/developer-fullstack-m%25C3%25A1nu-fosela',
      }, {
        title: 'Javascript Proxy: some practical uses',
        link: 'https://dev.to/manufosela/javascript-proxy-algunos-usos-practicos-1hie',
      }, {
        title: 'Web Development and web components',
        link: 'https://dev.to/manufosela/desarrollo-web-y-web-components-1j0g',
      }, {
        title: 'Practical introduction to Docker and Docker Compose',
        link: 'https://medium.com/@manufosela/introducci%C3%B3n-pr%C3%A1ctica-a-docker-y-docker-compose-f0dba8d7fd28',
      },
    ],
  },
} as Articles

export const mediaData: Medias = {
  'es': {
    'Charlas': [
      {
        title: 'Liderar no es coser y cantar (CommitConf 2024)',
        link: 'https://www.youtube.com/watch?v=WNlaWIQseUo',
      },
      {
        title: 'Liderar o Liderrar (Codemotion 2024)',
        link: 'https://www.youtube.com/watch?v=4Zen-_UsWis',
      },
      {
        title: 'Cómo refactorizar tu código para que sea sostenible (2024)',
        link: 'https://www.youtube.com/watch?v=DHypxM3cBFA&pp=ygULbWFudSBmb3NlbGE%3D',
      },
      {
        title: 'Lo que no te contaron de los web-components (Salmorejo Tech 2022)',
        link: 'https://www.youtube.com/watch?v=VAhQRA9NurA',
      },
      {
        title: 'Entre componentes anda el juego (2021)',
        link: 'https://www.youtube.com/watch?v=P-t9MJ1dGLE&t=13s&pp=ygULbWFudSBmb3NlbGE%3D',
      },
      {
        title: 'Principios fundamentales del desarrollo web-components (2021)',
        link: 'https://www.youtube.com/watch?v=UxsvI_R0qeI&t=12s&pp=ygULbWFudSBmb3NlbGE%3D',
      },
      {
        title: 'VueJS y Docker (2019)',
        link: 'https://www.youtube.com/watch?v=4QaQT1iVSBA&t=29s&pp=ygULbWFudSBmb3NlbGE%3D',
      },
    ],
    'Entrevistas': [
      {
        title: 'Hablando con Tech Leaders (podcast) (2024)',
        link: 'https://www.youtube.com/watch?v=yTAEVLwuK-E&pp=ygULbWFudSBmb3NlbGE%3D',
      },
      {
        title: 'Commitconf 2024',
        link: 'https://www.youtube.com/watch?v=VfM7tiwKpMQ&t=8s&pp=ygULbWFudSBmb3NlbGE%3D',
      },
      {
        title: 'Ni cero ni uno (podcast) (2023)',
        link: 'https://savvily.es/podcasts/ni-cero-ni-uno/episodios/e46/',
      },
      {
        title: 'ETSII Job Days URJC (2022)',
        link: 'https://www.youtube.com/watch?v=eEEZzipbYQc&t=1014s&pp=ygULbWFudSBmb3NlbGE%3D',
      },
      {
        title: 'Socra Talks (2021)',
        link: 'https://www.youtube.com/watch?v=1DbKhCMaR9M&t=45s&pp=ygULbWFudSBmb3NlbGE%3D',
      },
    ],
  },
  'en': {
    'Talks': [
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
        title: 'What They Didn\'t Tell You About Web Components (Salmorejo Tech 2022)',
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
    'Interviews': [
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
        link: 'https://savvily.es/podcasts/ni-cero-ni-uno/episodios/e46/',
      },
      {
        title: 'ETSII Job Days URJC (2022)',
        link: 'https://www.youtube.com/watch?v=eEEZzipbYQc&t=1014s&pp=ygULbWFudSBmb3NlbGE%3D'
      },
      {
        title: 'Socra Talks (2021)',
        link: 'https://www.youtube.com/watch?v=1DbKhCMaR9M&t=45s&pp=ygULbWFudSBmb3NlbGE%3D'
      },
    ]
  },
} as Medias;
