const asyncHandler = require("../middleware/async");
const connecDb = require('../config/connectDb');
let allProducts = [];


connecDb().then(
  (db) => {
    console.log('db connected _________________________________________', db);
    const producs = db.collection('products').find();
    producs.forEach(product => {
      console.log('product', product);
      allProducts.push(product);
    });
  },
  (err) => { console.log('err conn db _________________________________', err) }
)


exports.getProducts = asyncHandler(async (req, res, next) => {
  setTimeout(() => {
    return res.status(200).json({
      success: 1,
      data: allProducts
    });
  }, 300)
});
