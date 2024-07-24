const mongoose = require('mongoose');
const config = require('./config');
const logger = require('./logger');
//const usersSeeder = require('./seeders/users.seeder');
//const rolesSeeder = require('./seeders/roles.seeder');
//const categoriesSeeder = require('./seeders/categories.seeder');
//const studyFieldsSeeder = require('./seeders/fields.seeder');

// spell-checker: disable
const connectToMongoDB = async () => {
  try {
    logger.info('Connecting...');
    await mongoose.connect(config.MONGODB_URI);
    logger.info('Connected');

    //rolesSeeder.seedRoles();
    //categoriesSeeder.seedCategories();
    //studyFieldsSeeder.seedFields();
    //usersSeeder.seedUsers();

    mongoose.connection.close(() => {
      logger.info('Connection closed');
      process.exit(0);
    });
  } catch (error) {
    logger.error(
      'Error connecting MongoDB:',
      error.message
    );
  }
};

connectToMongoDB();