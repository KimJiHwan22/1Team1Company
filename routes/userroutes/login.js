import express from 'express';
import crypto from 'crypto';

import sequelize from '../../database/connection';

const api = express();

api.post('/login', (req, res) => {
  sequelize.models.user.find({
    where: { userId: req.body.userId }
  }).then((result, err) => {
    const dbPassword = result.dataValues.userPw;

    const salt = result.dataValues.salt;
    const hashPassword = crypto.createHash('sha512').update(req.body.userPw + salt).digest('hex');

    if (dbPassword === hashPassword) {
      console.log('로그인 성공');

      req.session.userId = req.body.userId;

      res.redirect('/api/show/1');
    } else {
      console.log(err);
      console.log('비밀번호 불일치');
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
