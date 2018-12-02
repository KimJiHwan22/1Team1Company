import express from 'express';

import sequelize from '../../../database/connection';

const api = express();

let re;

api.get('/tkd/:id', (req, res) => {
  sequelize.models.bbs.findAll({
    where: { id: req.params.id }
  })
    .then((result) => {
      re = result;
      sequelize.models.reply.findAll({
        where: { postId: req.params.id }
      })
        .then((result2) => {
          console.log(result2, 'dsa', re);

          res.render('show.ejs', {
            des: re, rep: result2
          });
        });
    }).catch((err) => {
      console.log(err);
      res.json({
        success: false
      });
    });
});

export default api;
