const StudyField = require('../../models/field');

// spell-checker: disable
const seedFields = async () => {
  try {
    const fieldsData = [
      {
        name: 'Contaduría Pública',
        description: 'La contaduría pública es una carrera que se encarga del registro, control y análisis de las operaciones financieras de una organización.'
      },
      {
        name: 'Negocios Internacionales',
        description: 'Los negocios internacionales se enfocan en el comercio y las transacciones económicas entre diferentes países y culturas.'
      },
      {
        name: 'Administración Turística',
        description: 'La administración turística se centra en la gestión de empresas y servicios relacionados con la industria del turismo y la hospitalidad.'
      },
      {
        name: 'Gastronomía',
        description: 'La gastronomía es el estudio y la práctica del arte de cocinar y preparar alimentos.'
      },
      {
        name: 'Ingeniería Ambiental',
        description: 'La ingeniería ambiental se dedica al estudio y la aplicación de tecnologías para proteger y mejorar el medio ambiente.'
      },
      {
        name: 'Ingeniería Civil',
        description: 'La ingeniería civil se encarga del diseño, la construcción y el mantenimiento de infraestructuras como carreteras, puentes y edificios.'
      },
      {
        name: 'Ingeniería Industrial',
        description: 'La ingeniería industrial se enfoca en mejorar los procesos y sistemas de producción para aumentar la eficiencia y la productividad en las organizaciones.'
      },
      {
        name: 'Ingeniería de Software y Sistemas Computacionales',
        description: 'La ingeniería de software y sistemas computacionales se centra en el desarrollo, la implementación y el mantenimiento de software y sistemas informáticos.'
      },
      {
        name: 'Arquitectura',
        description: 'La arquitectura es el arte y la ciencia de diseñar y construir edificaciones y espacios habitables.'
      },
      {
        name: 'Ingeniería Mecatrónica',
        description: 'La ingeniería mecatrónica combina la ingeniería mecánica, electrónica y de control para diseñar sistemas y productos automatizados.'
      },
      {
        name: 'Enfermería',
        description: 'La enfermería se dedica al cuidado y la atención de la salud de individuos y comunidades.'
      },
      {
        name: 'Fisioterapia',
        description: 'La fisioterapia es una disciplina de la salud que utiliza técnicas de movimiento y ejercicio para rehabilitar lesiones y mejorar la función física.'
      },
      {
        name: 'Nutrición',
        description: 'La nutrición se enfoca en el estudio de los alimentos y su relación con la salud y el bienestar humano.'
      },
      {
        name: 'Psicología',
        description: 'La psicología es la ciencia que estudia la mente y el comportamiento humano, así como los procesos mentales y emocionales.'
      },
      {
        name: 'Ciencias en el Deporte',
        description: 'Las ciencias en el deporte investigan los aspectos fisiológicos, psicológicos y biomecánicos del rendimiento deportivo y la actividad física.'
      },
      {
        name: 'Lenguas Modernas e Interculturalidad',
        description: 'El estudio de las lenguas modernas e interculturalidad se centra en el aprendizaje de idiomas y la comprensión de diferentes culturas.'
      },
      {
        name: 'Gestión y Desarrollo de las Artes',
        description: 'La gestión y desarrollo de las artes se enfoca en la promoción, producción y administración de actividades artísticas y culturales.'
      },
      {
        name: 'Derecho',
        description: 'El derecho es el conjunto de normas y principios que regulan la convivencia social y las relaciones entre individuos e instituciones.'
      },
      {
        name: 'Educación',
        description: 'La educación se dedica al proceso de enseñanza y aprendizaje, así como al desarrollo integral de las personas en diferentes etapas de la vida.'
      },
      {
        name: 'Comunicación y Medios Digitales',
        description: 'La comunicación y medios digitales estudian los procesos de comunicación en la era digital, incluyendo medios de comunicación y tecnologías digitales.'
      }
    ]

    await StudyField.insertMany(fieldsData);

    console.log('StudyFields seeded successfully');
  } catch (err) {
    console.error('Error seeding StudyFields:', err);
  }
}

exports.seedFields = seedFields;