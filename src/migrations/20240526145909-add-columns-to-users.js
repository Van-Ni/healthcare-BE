'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Users', 'address', {
      type: Sequelize.STRING,
      allowNull: false, // Set to false if you want this field to be required
    });
    await queryInterface.addColumn('Users', 'gender', {
      type: Sequelize.BOOLEAN,
      allowNull: false, // Set to false if you want this field to be required
    });
    await queryInterface.addColumn('Users', 'roleId', {
      type: Sequelize.INTEGER,
      allowNull: false, // Set to false if you want this field to be required
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Users', 'address');
    await queryInterface.removeColumn('Users', 'gender');
    await queryInterface.removeColumn('Users', 'roleId');
  }
};
