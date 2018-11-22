import Sequelize from 'sequelize';

import model from './model';

const sequelize = new Sequelize('node_bbs', 'root', 'root', {
  host: '127.0.0.1',
  port: '3306',
  dialect: 'mysql'
});

sequelize.authenticate()

  .then(() => {
    console.log('DB연결 성공');
  }).catch((err) => {
    if (err) {
      console.log(err);
      console.log('DB연결 실패');
    }
  });

const Bbs = sequelize.define('bbs', model.bbs);
const User = sequelize.define('user', model.user);
const Reply = sequelize.define('reply', model.reply);

Bbs.hasMany(Reply, { foreignKey: 'postId' });
Reply.belongsTo(Bbs, { foreignKey: 'postId' });

sequelize.sync(/*{force:true} */);

export default sequelize;
