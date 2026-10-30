// Programas y áreas que se muestran en la portada («Lo que hacemos»)
export const PROGRAMS = [
  {
    id: 'orientacion',
    // Fondo de su ilustración (ProgramArt) y si el texto encima va en blanco
    bg: '#001E77',
    dark: true,
    title: 'Orientación y trámites',
    description: 'Te explicamos tu situación y preparamos contigo regularizaciones, renovaciones, nacionalidad y reagrupación familiar.',
    tags: ['Extranjería', 'Regularización', 'Nacionalidad', 'Reagrupación'],
    to: '/servicios'
  },
  {
    id: 'reinventate',
    // Fondo de su ilustración (ProgramArt) y si el texto encima va en blanco
    bg: '#F8C31C',
    dark: false,
    title: 'Reinvéntate y Trabaja',
    description: 'Programa de empleo: bolsa de trabajo, orientación profesional y preparación de entrevistas para encontrar tu sitio.',
    tags: ['Empleo', 'Orientación', 'Entrevistas'],
    to: '/servicios'
  },
  {
    id: 'galicia-activa',
    // Fondo de su ilustración (ProgramArt) y si el texto encima va en blanco
    bg: '#EEF2FB',
    dark: false,
    title: 'Galicia Activa',
    description: 'Participación social y comunitaria: eventos, alianzas y redes para que formes parte de la vida de Galicia.',
    tags: ['Comunidad', 'Eventos', 'Alianzas'],
    to: '/sobre-nosotros'
  },
  {
    id: 'convivencia',
    // Fondo de su ilustración (ProgramArt) y si el texto encima va en blanco
    bg: '#00278f',
    dark: true,
    title: 'Programa +Convivencia',
    description: 'Actividades culturales y salidas en familia para conocer Galicia y convivir con nuestros vecinos.',
    tags: ['Cultura', 'Familias', 'Convivencia'],
    to: '/sobre-nosotros'
  },
  {
    id: 'presente',
    // Fondo de su ilustración (ProgramArt) y si el texto encima va en blanco
    bg: '#E10E2F',
    dark: true,
    title: 'Asovedra Presente',
    description: 'Red de apoyo psicosocial y ayuda humanitaria tras el terremoto de Venezuela del 24 de junio de 2026.',
    tags: ['Emergencia', 'Apoyo psicosocial', 'Venezuela'],
    to: '/emergencia-terremoto-venezuela'
  }
]
