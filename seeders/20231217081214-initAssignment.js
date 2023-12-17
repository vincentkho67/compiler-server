'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Assignments', [
    {
      name: 'Array Mapping',
      context: 'const sumArray = (input) => {}',
      test_cases: 'const testCases = (code) => { const input = [1,2,3,4,5]; const expected = 15; const result = code(input); if (result === expected) { return true } else { return false } }; testCases(sumArray);',
      display: 'const sumArray = (input) => {//write your solution here}',
      description: 'Given an array of numbers, sum all the numbers in the array and return the sum',
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ])

   await queryInterface.bulkInsert('Users', [
    {
      name: 'Joni',
      email: 'jonistik@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      await queryInterface.bulkDelete('Assignments', null, {});
      await queryInterface.bulkDelete('Users', null, {});
  }
};
