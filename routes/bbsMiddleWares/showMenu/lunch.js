import express from 'express';

import School from 'node-school-kr';

const api = express();

const school = new School();

school.init(school.eduType.high, school.region.seoul, 'B100000662');
/* GET index page. */
api.get('/schoolMenu', (req, res) => {
  const men = () => {
    school.getMeal().then((result) => {
      console.log(result.today);
      res.render('lunch.ejs', {
        menu: result
      });
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
