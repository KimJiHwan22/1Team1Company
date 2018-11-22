import express from 'express';

import sequelize from '../../database/connection';

const api = express();


api.post('/reply/:id', (req, res) => {
  sequelize.models.reply.create({
    postId: req.params.id,
    writer: req.body.writer,
    contents: req.body.contents
  }).then((result) => {
    console.log('댓글 작성 성공');
    res.redirect(req.get('referer'));
  }).catch((err) => {
    console.log(err);
    res.json({
      success: false
    });
  });
});

export default api;
