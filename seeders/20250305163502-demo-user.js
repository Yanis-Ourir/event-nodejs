'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  /**
   * Add seed commands here.
   *
   * Example:
   * await queryInterface.bulkInsert('People', [{
   *   name: 'John Doe',
   *   isBetaMember: false
   * }], {});
  */
  return queryInterface.bulkInsert('Users', [
    {
      pseudo: 'John Doe',
      email: 'example@example.com',
      password: 'password',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
}
export async function down(queryInterface, Sequelize) {
  /**
   * Add commands to revert seed here.
   *
   * Example:
   * await queryInterface.bulkDelete('People', null, {});
   */
  return queryInterface.bulkDelete('Users', null, {});
}
