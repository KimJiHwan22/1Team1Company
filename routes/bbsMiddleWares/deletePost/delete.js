import alert from 'alert-node';
import express from 'express';

import sequelize from '../../../database/connection';

const api = express();

// api.delete쓰기
api.post('/delete/:id', (req, res) => {
  sequelize.models.bbs.find({
    where: { id: req.params.id }
  }).then((resu) => {
    if (resu.writer === req.session.userId) {
      sequelize.models.bbs.destroy({
        where: {
          id: req.params.id
        }
      }).then((result) => {
        res.redirect('/api/show/1');
        console.log('게시물 삭제에 성공하셧습니다.');
      });
    } else {
      res.redirect('/api/show/1');
      console.log('권한이 없습니다.');
      alert('권한이 없습니다.');
    }
  }).catch((err) => {
    console.log(err);
    res.json({
      success: false
    });
  });
});

export default api;
