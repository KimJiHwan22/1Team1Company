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
  images: {
    type: Sequelize.BLOB,
    allowNull: true
  },
  createdAt: {
    type: Sequelize.DATEONLY,
    allowNull: false
  }
};


export default bbs;
