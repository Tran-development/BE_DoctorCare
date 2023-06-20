'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //bulkInsert : chen nhieu ban ghi vao cung 1 luc
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '123456', // thay lai hash password
      firstName: 'Tinh',
      lastName: 'Tran',
      address: 'USA',
      phonenumber: '84359861423',
      gender: 1,
      image: 'http://localhost/',
      positionId: '23 street South',
      roleId: 'ROLE',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
