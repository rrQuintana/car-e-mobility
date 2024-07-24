const Rol = require('../../models/rol');

// spell-checker: disable
const seedRoles = async () => {
  try {
    const rolesData = [
      {
        name: 'admin',
        description: 'System administrator'
      },
      {
        name: 'user',
        description: 'System user'
      }
    ]

    await Rol.insertMany(rolesData);

    console.log('Roles seeded successfully');
  } catch (err) {
    console.error('Error seeding roles:', err);
  }
}

exports.seedRoles = seedRoles;