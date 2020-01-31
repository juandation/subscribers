const pool = require('../database');

const subscribersCtrl = ((req, res) => {

    pool.query('SELECT * FROM subscribers', (error, results) => {
        if (error)
            throw error;
        res.status(200).json(results);
    });
});


module.exports = subscribersCtrl;