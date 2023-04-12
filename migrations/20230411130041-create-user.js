'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name:{
        type:Sequelize.STRING,
        allowNull:false,
        

      },
      firstName: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true,
      },
      password: {
        type:Sequelize.STRING,
        allowNull:false,
      },
      level: {
        type:Sequelize.INTEGER,
        allowNull:false,
      },
      points: {
        type: Sequelize.INTEGER,
        allowNull:false,

      },

      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });

    await queryInterface.createTable('books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Name: {
        type:Sequelize.STRING,
        allowNull:false,

      },
      Description: {
        type: Sequelize.STRING,
        allowNull:false,

      },
      level: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      author: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'books',
          key:'id',
        },
        
      },
      uploader: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      verified: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      }
    });

    await queryInterface.createTable('levels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name:{
        type:Sequelize.STRING,
        allowNull:false,

      },
      verified: {
          type:Sequelize.STRING,
          allowNull:false,
      },
    });

    await queryInterface.createTable('Topics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name:{
        type:Sequelize.STRING,
        allowNull:false,

      },
     parent:{
      type:Sequelize.INTEGER,
      allowNull:false,
      references: {
        model: 'Topics',
        key:'id',
      },
    
     },
     uploader:{
      type:Sequelize.INTEGER,
      allowNull:false,
     },
    });

    await queryInterface.createTable('Notes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content:{
        type:Sequelize.TEXT,
        allowNull:false,

      },
      date: {
        type: Sequelize.DATE,
        allowNull:false,
      },
      topic: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      note_by: {
        type: Sequelize.STRING,
        allowNull:false,
        references: {    //Foreign key reference
          model: 'notes',
          key:'topic',
        },
        
      },
      
    });






  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropAllTables;
  }
};