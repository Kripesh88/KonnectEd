'use strict';

const { DATE } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
        'user',
         [
          
          {
            id:1,
        name: 'Kripesh Neupane',
        firstName: 'Kripesh',
        lastName: 'Neupane',
        email: 'kripeshneupane10@gmail.com',
        password: '12345',
        level:'10',
        points: '100',
        created_at: new Date(),
        updated_at: new Date(),
       
      },
      {
        id:2,
        name: 'Suraj Pulami',
        firstName: 'Suraj',
        lastName: 'Pulami',
        email: 'srjmgr1@gmail.com',
        password: '12354',
        level:'9',
        points: '110',
        created_at: new Date(),
        updated_at: new Date(),
       
      },
      {
        id:3,
        name: 'Manish Timilsina',
        firstName: 'Manish',
        lastName: 'Timilsia',
        email: 'mtimilsina007@gmail.com',
        password: '7654321',
        level:'7',
        points: '77',
        created_at: new Date(),
        updated_at: new Date(),
       
      },

    ],
     {}
     
     );
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
