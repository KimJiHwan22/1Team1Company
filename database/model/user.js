import Sequelize from 'sequelize';

const user = {
  userId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  userPw: {
    type: Sequelize.STRING,
    allowNull: false
  },
  userName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  salt: {
    type: Sequelize.STRING
  }
};

export default user;
