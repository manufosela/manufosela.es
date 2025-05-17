export const indexDesc = {
  es: 'Imagen de Mánu Fosela, con camisa magenta electrico y tirantes azul oscuro. De lado, con brazos cruzados. La imagen ocupa la mitad izquierda de la pantalla',
  en: 'Image of Mánu Fosela, with electric magenta shirt and dark blue suspenders. Sideways, with arms crossed. The image takes up the left half of the screen'
} as { [key: string]: string };

interface Person {
  name: string;
  rol: string;
  position: string;
  bio: string;
}

interface Persons {
  [key: string]: Person;
}

export const ManuFosela = {
  es: {
    name: ' Mánu Fosela',
    rol: 'Liderazgo Afectivo',
    liderazgo_afectivo: '/images/liderazgo_afectivo.svg',
    position: 'Head of Engineering en Geniova Technologies',
    bio: `Ingeniero de Telecomunicaciones de formación.<br>
Liderazgo de equipos tecnológicos.<br>
Transformación digital y metodologías ágiles.<br>
Desarrollo de competencias en liderazgo y trabajo en equipo.<br>
Centrado en las personas.<br>
Apasionado por la Cultura Organizacional.<br>
Apoyo a los Juniors.`
  },
  en: {
    name: ' Mánu Fosela',
    rol: 'Affective Leadership',
    liderazgo_afectivo: '/images/liderazgo_afectivo.svg',
    position: 'Head of Engineering at Geniova Technologies',
    bio: `Telecommunications Engineer by training.<br>
Leadership of technological teams.<br>
Digital transformation and agile methodologies.<br>
Development of leadership and teamwork skills.<br>
People-focused.<br>
Passionate about Organizational Culture.<br>
Support for Junior professionals.`
  }
} as Persons;
