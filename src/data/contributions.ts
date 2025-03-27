export const contributionsDesc = {
  es: 'Collage de 3 fotos. Foto de la portada del libro "Liderazgo Afectivo". Captura del GitHub de Mánu. Captura de Codepen de Mánu',
  en: 'Collage of 3 photos. Photo of the cover of the book "Affective Leadership". Screenshot of Mánu\'s GitHub. Screenshot of Mánu\'s Codepen'
} as { [key: string]: string }

interface Project {
  title: string
  description: string
}

interface Contributions {
  [key: string]: Project[]
}

export const contributionsData = {
  es: [
    {
      title: 'Autor del libro "Liderazgo Afectivo"',
      description:
        '[A la venta desde el 3 de abril de 2025 en Savvily Editorial](https://savvily.es/libros/liderazgo-afectivo/). En el que cuento mi experiencia liderando equipos de desarrollo y como el liderazgo afectivo puede ayudar a mejorar la productividad y el bienestar de los equipos.'
    },
    {
      title: 'Speaker',
      description:
        'Doy charlas sobre temas de liderazgo. He hablado en eventos como Codemotion y CommitConf. Tambien doy charlas sobre desarrollo.'
    },
    {
      title: 'Escritor de Artículos',
      description: `Escribo artículos sobre liderazgo y desarrollo en [LinkedIn](https://www.linkedin.com/in/manufosela/recent-activity/articles/),
      [SubStack](https://manufosela.substack.com/), [dev.to](https://dev.to/manufosela) y [Medium](https://medium.com/@manufosela).`
    },
    {
      title: 'Organizador de Eventos Tecnológicos',
      description:
        'Co-organizo meetups de NodeJSMadrid y Codify Meetup para la comunidad de desarrolladores en Madrid. He co-organizado eventos como el JSDay de Madrid y el Polymer Day.'
    },
    {
      title: 'Mentor',
      description:
        'Ayudo a personas que quieren empezar en el mundo de la programación y a personas que quieren dar el salto al liderazgo.'
    },
    {
      title: 'Contribuciones al Open Source',
      description:
        'Tengo varios proyectos en GitHub, Codepen y Stackoverflow, incluyendo herramientas para validación automática de formularios en JavaScript, introducción a docker y generadores de componentes web usando Lit-Element entre otros.'
    }
  ],
  en: [
    {
      title: 'Author of the book "Affective Leadership"',
      description:
        '[Available for sale since April 3, 2025 in Savvily Editorial](https://savvily.es/libros/liderazgo-afectivo/). In which I tell my experience leading development teams and how affective leadership can help improve the productivity and well-being of teams.'
    },
    {
      title: 'Speaker',
      description:
        'I give talks on leadership topics. I have spoken at events like Codemotion and CommitConf. I also give talks on development.'
    },
    {
      title: 'Articles Writer',
      description: 'I write articles on leadership and development on LinkedIn, dev.to, or medium.'
    },
    {
      title: 'Tech Events Organizer',
      description:
        'I co-organize meetups for the NodeJSMadrid and Codify Meetup communities of developers in Madrid. I have co-organized events such as JSDay Madrid and Polymer Day.'
    },
    {
      title: 'Mentor',
      description:
        'I help people who want to start in the world of programming and people who want to make the leap to leadership.'
    },
    {
      title: 'Open Source contributions',
      description:
        'I have some projects on GitHub, Codepen and Stackoverflow, including tools for automatic form validation in JavaScript, an introduction to docker, and web component generators using Lit-Element, among others.'
    }
  ]
} as Contributions
