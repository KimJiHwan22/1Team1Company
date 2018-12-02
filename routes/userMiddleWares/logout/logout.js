import express from 'express';

const api = express();

api.get('/logout', (req, res) => {
  if (req.session.userId) {
    req.session.destroy((err) => {
      console.log(err);
    });
  }
  res.redirect('/index/main');
});
export default api;
