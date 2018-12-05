import Sequelize from 'sequelize';
import reply from './reply';

const bbs = {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  writer: {
    type: Sequelize.STRING,
    allowNull: false
  },
  contents: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  createdAt: {
    type: Sequelize.DATEONLY,
    allowNull: false
  }
};


export default bbs;
