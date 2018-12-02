import express from 'express';

// 게시판 라우터
import insertRouter from './bbsMiddleWares/makePost/insert';
import showRouter from './bbsMiddleWares/showList/show';
import tkdRouter from './bbsMiddleWares/showPoster/tkd';
import updateRouter from './bbsMiddleWares/updatePost/update';
import deleteRouter from './bbsMiddleWares/deletePost/delete';
import replyRouter from './bbsMiddleWares/makeReply/reply';
import schoolRouter from './bbsMiddleWares/showMenu/lunch';

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

// 급식 라우터
api.use('/', schoolRouter);

export default api;
