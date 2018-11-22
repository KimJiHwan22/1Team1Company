import express from 'express';

import sequelize from '../../database/connection';

const api = express();

api.get('/userShow', (req, res) => {
  sequelize.models.user.findAll(
    {
      where: {
        userId: req.session.userId
      }
    }).then((result) => {
    if (result) {
      res.render('userShow.ejs', {
        des: result
      });
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
