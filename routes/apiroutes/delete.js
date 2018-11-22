import express from 'express';

import sequelize from '../../database/connection';

const api = express();

// api.delete쓰기
api.post('/delete/:id', (req, res) => {
  sequelize.models.bbs.destroy({
    where: {
      id: req.params.id
    }
  }).then((result) => {
    if (!req.session.userId) {
      alert('로그인되지 않은 사용자입니다.');
      res.redirect('/api/show/1');
    }
    if (result) {
      res.redirect('/api/show/1');
      console.log('게시물 삭제에 성공하셧습니다.');
    } else {
      res.json({
        success: false
      });
    }
  }).catch((err) => {
    console.log(err);
    res.json({
      success: false
    });
  });
});

export default api;
