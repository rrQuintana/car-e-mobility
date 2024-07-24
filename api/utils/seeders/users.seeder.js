const User = require('../../models/user');
const Rol = require('../../models/rol');
const field = require('../../models/field');

// spell-checker: disable
const seedUsers = async () => {
  try {
    const adminRole = await Rol.findOne({ name: 'admin' });
    const studyField = await field.findOne({ name: 'Ingeniería de Software y Sistemas Computacionales' });

    const usersData = [
      {
        username: 'rrquintana',
        name: 'Roberto',
        lastName: 'Quintana',
        email: '014409267@ulsaoaxaca.edu.mx',
        password: 'Rrquintana123',
        institution: 'La Salle Oaxaca',
        skills: ['Programación', 'Resolución de problemas', 'Trabajo en equipo'],
        interests: ['Tecnología', 'Arte'],
        role: adminRole._id,
        studyField: studyField._id
      }
    ];

    await User.insertMany(usersData);

    console.log('Users seeded successfully');
  } catch (err) {
    console.error('Error seeding users:', err);
  }
}

exports.seedUsers = seedUsers;