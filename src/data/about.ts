const calculateAge = (birthDate: Date): number => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

const edad = calculateAge(new Date(1971, 4, 8)); // May is 4 because months are 0-indexed
const ultimosaños = new Date().getFullYear() - 1997;

export const aboutDesc = {
  es: 'Collage de 9 fotos. De izquierda a derecha y de arriba a abajo. Foto con el equipo de Kairós en el ultimo JSDay Madrid. Foto con todo el equipo de LeanMind en Tenerife. Selfie de Mánu en la oficina de LeanMind con el logo de la empresa de fondo. Foto del equipo de Madrid en un coworking. Foto con Adrián Ferrera durante un vuelo. Foto comiendo con compañeros de LeanMind en Gran Canaria. Foto del equipo de LeanMind en la Bilbostack 2024. Foto en la que estoy con mi hijo Dani, Carlos Blé y Rei Aguilera en la TRG23. Foto en la que estoy con Jorge del Casar y Rei Aguilera en la TRG23',
  en: 'Collage of 9 photos. From left to right and top to bottom. Photo with the Kairós team at the last JSDay Madrid. Photo with the entire LeanMind team in Tenerife. Selfie of Mánu in the LeanMind office with the company logo in the background. Photo of the Madrid team in a coworking space. Photo with Adrián Ferrera during a flight. Photo eating with LeanMind colleagues in Gran Canaria. Photo of the LeanMind team at Bilbostack 2024. Photo in which I am with my son Dani, Carlos Blé and Rei Aguilera at TRG23. Photo in which I am with Jorge del Casar and Rei Aguilera at TRG23'
} as { [key: string]: string };

interface About {
  title: string;
  slides: {
    subtitle: string;
    description: string;
  }[];
}

interface Abouts {
  [key: string]: About;
}

export const aboutData = {
  es: {
    title: 'Sobre mí',
    slides: [
      {
        subtitle: 'Personal',
        description: `Tengo ${edad} años. Nacido en Mayo.\nExtrovertido y divertido.\nApasionado. Creativo. Resolutivo.\nQuisquilloso a veces. Testarudo.\nMe molestan los cambios imprevistos, pero me adapto rápido a ellos.\nSoy el mayor de 5 hermanos.\nEsposo de una persona maravillosa y padre de dos jovenes estupendos.\nActualmente trabajo como Head of Engineering en Geniova Technologies.`
      },
      {
        subtitle: 'Profesional',
        description: `Durante los últimos ${ultimosaños} años, he participado en muchos proyectos que han ayudado a muchos clientes y empresas a alcanzar sus objetivos.\n
Empecé a desarrollar con 14 años, allá por el año 1985, escribiendo los programas en un cuaderno y luego iba a teclearlo a un ZX-Spectrum 48K de un amigo.\n
Estudié B.U.P., C.O.U., FP de Electrónica Industrial y después cursé dos especialidades de Ingenieria de Telecomunicaciones, Sistemas de telecomunicación y Telemática.\n
Por azares del destino entré a trabajar en una startup, plus.es, y arranqué mi andadura como desarrollador web.\n
He trabajado con ASP, Java, PHP, Perl, ShellScript, Javascript, desde vanilla ES1 hasta VueJS, pasando por dojo, prototype, scriptaculous, jquery, backbone, AngularJS, React, Angular 2, Polymer, Lit-Element...\n
Y me he pegado con sistemas Windows y Linux. Apache, Nginx. MySQL, Oracle, PostgreSQL, IBMDb2, mongoDB...\n
En total mas de 20 años de experiencia en el mundo del desarrollo de software web.\n
Desde 2016 mas enfocado en liderar equipos de ingeniería que cumplan con los objetivos a la vez que a velar por su desarrollo profesional y bienestar. A organizar departamentos técnicos, mentorizar y hacer coaching.\n`
      },
      {
        subtitle: 'Experiencia',
        description: `Comencé trabajando en plus.es del Grupo Prisa.\n
Después estuve en Eresmas del grupo Auna, que compró después France Telecom, y que pasó a ser Orange.\n
Pase al sector de viajes y hoteles, en Mundicolor, del grupo Marsans.\n
El siguiente reto en una pequeña, por aquel entonces, empresa de reservas hoteleras llamada Mirai.\n
Volví a Orange, al departamento de I+D, en el que estuve 4 años, para después pasar al equipo de desarrollo de la web de Orange.\n
En 2015 me uní a Kairós DS, siendo el empleado 23 y donde comencé a dar el giro hacia el liderazgo de equipos y proyectos.\n
Durante 2023-2024, ejercí como Director de Operaciones en Lean Mind.\n
Actualmente, desde enero de 2025, estoy enfocado en montar un equipo de ingenieria y dirigir toda la parte de desarrollo de software e IT en Geniova Technologies.
      `
      }
    ]
  },
  en: {
    title: 'About me',
    slides: [
      {
        subtitle: 'Personal',
        description: `I'm ${edad} years old. Born in May.\nOutgoing and fun.\nPassionate. Creative. Problem-solver.\nPicky sometimes. Stubborn.\nUnexpected changes bother me, but I adapt quickly to them.\nI am the eldest of 5 siblings.\nHusband to a wonderful person and father of two amazing young people.\nCurrently, I am Head of Engineering at Geniova Technologies.\n`
      },
      {
        subtitle: 'Professional',
        description: `Over the past ${ultimosaños} years, I have participated in many projects that have helped numerous clients and companies achieve their goals.\n
I started developing at the age of 14, back in 1985, writing programs in a notebook and then typing them into a friend's ZX-Spectrum 48K.\n
I studied B.U.P., C.O.U., Industrial Electronics FP, and then pursued two specializations in Telecommunications Engineering: Telecommunication Systems and Telematics.\n
By chance, I began working at a startup, plus.es, and started my journey as a web developer.\n
I have worked with ASP, Java, PHP, Perl, ShellScript, JavaScript, from vanilla ES1 to VueJS, including dojo, prototype, scriptaculous, jquery, backbone, AngularJS, React, Angular 2, Polymer, Lit-Element...\n
I have also dealt with Windows and Linux systems. Apache, Nginx. MySQL, Oracle, PostgreSQL, IBMDb2, mongoDB...\n
In total, 20 years of experience in the world of web software development.\n
Since 2016, I have been more focused on leading engineering teams to meet objectives while ensuring their professional development and well-being. I organize technical departments, mentor, and coach.\n`
      },
      {
        subtitle: 'Experience',
        description: `I started working at plus.es, part of the Prisa Group.\n
After that, I was at Eresmas, part of the Auna Group, which was later acquired by France Telecom and became Orange.\n
I then moved to the travel and hospitality sector at Mundicolor, part of the Marsans Group.\nThe next challenge was at a small hotel booking company at the time, called Mirai.\n
I returned to Orange, where I spent 4 years in the R&D department, before joining the web development team at Orange.\n
In 2015, I joined Kairós DS as the 23rd employee, where I began transitioning towards team and project leadership.\n
During 2023-2024, I served as Director of Operations at Lean Mind.\n
Currently, since January 2025, I am focused on building an engineering team and leading all software development and IT at Geniova Technologies.
      `
      }
    ]
  }
} as Abouts;
