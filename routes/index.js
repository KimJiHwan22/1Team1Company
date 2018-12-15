import alert from 'alert-node';
import express from 'express';
import sequelize from '../database/connection';

const router = express.Router();

// 게시글 작성 페이지 라우터
router.get('/insert', (req, res) => {
  if (!req.session.userId) {
    console.log('로그인이 되지않은 사용자입니다.');
    res.redirect('/api/show/1');
    message.addNotification({
      title: 'Alert!!!',
      body: 'Abnormal data access'
    });
  }
  res.render('insert.ejs');
});

// 게시글 업데이트 페이지 라우터
router.get('/update/:id', (req, res) => {
  sequelize.models.bbs.find({
    where: { id: req.params.id }
  }).then((result) => {
    console.log(result);
    if (!(result.writer === req.session.userId)) {
      console.log('권한이 없습니다.');
      res.redirect('/api/show/1');
      alert('권한이 없습니다.');
    } else {
      res.render('update.ejs', { id: req.params.id });
    }
  });
});

// 유저 회원가입 페이지 라우터
router.get('/userInsert', (req, res) => {
  res.render('userInsert.ejs');
});

// 유저 회원정보 페이지 라우터
// router.get('/userShow', (req, res) => {
//   res.render('userShow.ejs');
// });

// 유저 로그인 페이지 라우터
router.get('/userLogin', (req, res) => {
  res.render('userLogin.ejs');
});

router.get('/main', (req, res) => {
  res.render('index.ejs');
});
export default router;
