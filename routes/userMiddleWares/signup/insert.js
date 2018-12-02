import express from 'express';
import crypto from 'crypto';

import sequelize from '../../../database/connection';

const api = express();

api.post('/', (req, res) => {
  const salt = `${Math.round((new Date().valueOf() * Math.random()))}`;
  const hashPassword = crypto.createHash('sha512').update(req.body.userPw + salt).digest('hex');

  sequelize.models.user.create({
    userId: req.body.userId,
    userPw: hashPassword,
    userName: req.body.userName,
    salt
  }).then((result) => {
    console.log('데이터 추가 성공');
    res.redirect('/index/main');
  }).catch((err) => {
    console.log(err);
    res.json({
      success: false
    });
  });
});

export default api;
