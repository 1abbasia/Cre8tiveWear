const db = require('../db/config');

const Shirts = {};

Category.findAll = () => {
  return db.query(`
    SELECT * FROM shirts 
    `
  );
};



module.exports = Shirts;