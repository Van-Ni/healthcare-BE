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
    await queryInterface.addColumn('Users', 'typeRole', {
      type: Sequelize.STRING,
      allowNull: false, 
    });
    await queryInterface.addColumn('Users', 'keyRole', {
      type: Sequelize.STRING,
      allowNull: false, 
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
    await queryInterface.removeColumn('Users', 'typeRole');
    await queryInterface.removeColumn('Users', 'keyRole');
  }
};
