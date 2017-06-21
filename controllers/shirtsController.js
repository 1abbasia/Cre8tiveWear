const Quote = require('../models/shirts');

const controller = {};

controller.index = (req, res) => {
  Shirts.findAll()
    .then(quotes => {
      res.render('Shirts-index', {
        documentTitle: 'Featued Shirts',
        quotesData: shirts,
      });
    })
    .catch(err => {
      res.status(400).json(err);
    });
};