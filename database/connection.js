import Sequelize from 'sequelize';

import model from './model';

const sequelize = new Sequelize('node_bbs', 'root', '1234', {
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

sequelize.define('bbs', model.bbs);
sequelize.define('user', model.user);
sequelize.define('reply', model.reply);

// Bbs.hasMany(Reply, { foreignKey: 'postId' });
// Reply.belongsTo(Bbs, { foreignKey: 'postId' });

sequelize.sync( {force:false} );

export default sequelize;
