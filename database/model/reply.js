import Sequelize from 'sequelize';

const reply = {
  postId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  writer: {
    type: Sequelize.STRING,
    allowNull: false
  },
  contents: {
    type: Sequelize.STRING,
    allowNull: false
  }
};

export default reply;
