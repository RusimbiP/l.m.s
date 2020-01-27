module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Issued', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    memberID: {
      type: Sequelize.STRING,
      allowNull: false,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'Users',
        key: 'memberID',
        as: 'issueId',
      },
    },
    isbnNumber: {
      type: Sequelize.STRING,
      allowNull: false,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'Books',
        key: 'isbnNumber',
        as: 'issuedBook',
      },
    },
    fine: {
      allowNull: true,
      type: Sequelize.INTEGER,
    },
    issuedDate: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    returnDate: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('Issued'),
};
