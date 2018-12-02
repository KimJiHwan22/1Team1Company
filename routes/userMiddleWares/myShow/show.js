import express from 'express';

import sequelize from '../../../database/connection';

const api = express();

api.get('/userShow', (req, res) => {
  sequelize.models.user.find(
    {
      where: {
        userId: req.session.userId
      }
    }).then((result) => {
    res.render('userShow.ejs', {
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
