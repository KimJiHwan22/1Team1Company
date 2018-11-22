import express from 'express';

import sequelize from '../../database/connection';

const api = express();

api.post('/insert', (req, res) => {
  sequelize.models.bbs.create({
    title: req.body.title,
    writer: req.session.userId,
    contents: req.body.contents
  }).then((result) => {
    if (!req.session.userId) {
      alert('로그인되지 않은 사용자입니다.');
      res.redirect('/api/show/1');
    }
    console.log('글쓰기 성공');
    res.redirect('/api/show/1');
  }).catch((err) => {
    console.log('오류');
    console.log(err);
    res.json({
      success: false
    });
  });
});


export default api;
