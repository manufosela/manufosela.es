export const indexDesc = {
  es: 'Imagen de Mánu Fosela, con camisa magenta electrico y tirantes azul oscuro. De lado, con brazos cruzados. La imagen ocupa la mitad izquierda de la pantalla',
  en: 'Image of Mánu Fosela, with electric magenta shirt and dark blue suspenders. Sideways, with arms crossed. The image takes up the left half of the screen'
} as { [key: string]: string }

interface Person {
  name: string
  rol: string
  position: string
  bio: string
}

interface Persons {
  [key: string]: Person
}

export const ManuFosela = {
  es: {
    name: ' Mánu Fosela',
    rol: 'Liderazgo Afectivo',
    liderazgo_afectivo: '/images/liderazgo_afectivo.svg',
    position: 'Head of Engineering en Geniova Technologies',
    bio: `Ingeniero de Telecomunicaciones de formación.
Liderazgo de equipos tecnológicos.
Executive Coaching & Mentoring.
Asesoramiento en transformación digital y metodologías ágiles.
Desarrollo de competencias en liderazgo y trabajo en equipo.
Centrado en las personas.
Apasionado por la Cultura Organizacional.
Interesado en el liderazgo de equipos.
Apoyo a los Juniors.`
  },
  en: {
    name: ' Mánu Fosela',
    rol: 'Affective Leadership',
    liderazgo_afectivo: '/images/liderazgo_afectivo.svg',
    position: 'Head of Engineering at Geniova Technologies',
    bio: `Telecommunications Engineer by training.
Leadership of technological teams.
Executive Coaching & Mentoring.
Consulting in digital transformation and agile methodologies.
Development of leadership and teamwork skills.
People-focused.
Passionate about Organizational Culture.
Interested in team leadership.
Support for Junior professionals.`
  }
} as Persons
