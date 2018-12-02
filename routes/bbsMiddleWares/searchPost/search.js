import express from 'express';
import sequelize from '../../../database/connection';

const Op = sequelize.Op;
const api = express();

api.get('/s', (req, res) => {
    let searchWord = req.query.searchWord;

    sequelize.models.bbs.findAll({
        where: {
            title: {
                [Op.like]: "%" + searchWord + "%"
            }
        }
    }).then((result) => {
        res.render('search.ejs', {
            des: result
        });
    }).catch((err) => {
        console.log(err);
        res.json({
            success: false
        });
    });
});

export default api;