import express from 'express';

import sequelize from '../../database/connection';

const Op = sequelize.Op;

const api = express();

// api.put 쓰기
api.post('/update/:id', (req, res) => {
  sequelize.models.bbs.update({
    title: req.body.new_title,
    writer: req.session.userId,
    contents: req.body.new_contents,
  },
  {
    where: {
      id: req.params.id
    }
  }).then((result) => {
    if (!req.session.userId) {
      alert('로그인되지 않은 사용자입니다.');
      res.redirect('/api/show/1');
    }
    console.log('글수정 성공');
    res.redirect('/api/show/1');
  }).catch((err) => {
    console.log('글수정 오류');
    console.log(err);
    res.json({
      success: false
    });
  });
});

export default api;
