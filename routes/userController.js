import express from 'express';

// 유저 라우터
import userInsert from './userMiddleWares/signup/insert';
import userShow from './userMiddleWares/myShow/show';
import userLogin from './userMiddleWares/login/login';
import userLogout from './userMiddleWares//logout/logout';

const api = express();

// 유저 회원가입 라우터
api.use('/', userInsert);

// 유저 로그인 라우터
api.use('/', userLogin);

// 유저 정보보기 라우터
api.use('/', userShow);

// 유저 로그아웃 라우터
api.use('/', userLogout);

export default api;
