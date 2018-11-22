import express from 'express';

import sequelize from '../../database/connection';

const Op = sequelize.Op;

const api = express();

api.get('/show/:page', (req, res) => {
  const pageNum = req.params.page;
  let offset = 0;

  // 뛰어넘을 게시물 수
  if (pageNum > 1) {
    offset = 7 * (pageNum - 1);
  }
  sequelize.models.bbs.findAll({
    // pagination
    offset,
    limit: 7
  }).then((result) => {
    console.log(result.length);
    res.render('index.ejs', {
      des: result
    });
  }).catch((err) => {
    console.log(err);
    res.json({
      success: false
    });
  });
});


export default api;
