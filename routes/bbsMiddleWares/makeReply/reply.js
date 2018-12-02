import alert from 'alert-node';
import express from 'express';

import sequelize from '../../../database/connection';

const api = express();


api.post('/reply/:id', (req, res) => {
  sequelize.models.bbs.find({
    where: { id: req.params.id }
  }).then((resu) => {
    if (resu.writer === req.session.userId) {
      sequelize.models.reply.create({
        postId: req.params.id,
        writer: req.session.userId,
        contents: req.body.contents
      }).then((result) => {
        console.log('댓글 작성 성공');
        res.redirect(req.get('referer'));
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
