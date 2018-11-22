import express from 'express';

const router = express.Router();

// 게시글 작성 페이지 라우터
router.get('/insert', (req, res) => {
  if (!req.session.userId) {
    console.log('로그인이 되지않은 사용자입니다.');
    res.redirect('/api/show');
  }
  res.render('insert.ejs');
});
// 게시글 업데이트 페이지 라우터
router.get('/update/:id', (req, res) => {
  if (!req.session.userId) {
    console.log('로그인이 되지않은 사용자입니다.');
    res.redirect('/api/show');
  }
  res.render('update.ejs', { id: req.params.id });
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

export default router;
