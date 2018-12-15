import express from 'express';

import School from 'node-school-kr';

const api = express();

const school = new School();

school.init(school.eduType.high, school.region.seoul, 'B100000662');
/* GET index page. */
api.get('/calenderMenu', (req, res) => {
  const men = () => {
    school.getNotice().then((result) => {
      const i = '1';
      console.log(result);
      res.render('calender.ejs', { result });
    }).catch((err) => {
      if (err) {
        console.log(err);
        res.json({
          success: false
        });
      }
    });
  };

  men();
});

export default api;

