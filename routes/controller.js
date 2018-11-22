import express from 'express';

// 게시판 라우터
import insertRouter from './apiroutes/insert';
import showRouter from './apiroutes/show';
import tkdRouter from './apiroutes/tkd';
import updateRouter from './apiroutes/update';
import deleteRouter from './apiroutes/delete';
import replyRouter from './apiroutes/reply';

// 유저 라우터
import userInsert from './userroutes/insert';
import userShow from './userroutes/show';
import userLogin from './userroutes/login';

const api = express();


// 게시글 작성 라우터
api.use('/', insertRouter);

// 게시글 목록 라우터
api.use('/', showRouter);

// 게시글 상세 라우터
api.use('/', tkdRouter);

// 게시글 업데이트 라우터
api.use('/', updateRouter);

// 게시글 삭제 라우터
api.use('/', deleteRouter);

// 댓글 등록하는 라우터
api.use('/', replyRouter);


// 유저 회원가입 라우터
api.use('/', userInsert);

// 유저 로그인 라우터
api.use('/', userLogin);

// 유저 정보보기 라우터
api.use('/', userShow);


export default api;
