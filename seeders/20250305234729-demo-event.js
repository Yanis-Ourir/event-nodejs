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
  return queryInterface.bulkInsert('Events', [
    {
      name: 'KCX 4',
      description: 'Event karmine corp',
      date: new Date(),
      image: null,
      UserId: 11,
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
  return queryInterface.bulkDelete('Events', null, {});
}
