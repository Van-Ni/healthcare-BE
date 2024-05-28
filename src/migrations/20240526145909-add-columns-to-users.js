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
      allowNull: false, 
    });
    await queryInterface.addColumn('Users', 'gender', {
      type: Sequelize.BOOLEAN,
      allowNull: false, 
    });
    await queryInterface.addColumn('Users', 'roleId', {
      type: Sequelize.INTEGER,
      allowNull: false, 
    });
    await queryInterface.addColumn('Users', 'phonenumber', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('Users', 'positionId', {
      type: Sequelize.INTEGER,
      allowNull: false, 
    });
    await queryInterface.addColumn('Users', 'image', {
      type: Sequelize.STRING,
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
    await queryInterface.removeColumn('Users', 'phonenumber');
    await queryInterface.removeColumn('Users', 'positionId');
    await queryInterface.removeColumn('Users', 'image');
  }
};
