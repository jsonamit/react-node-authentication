const controller = require('../../controllers/product/product.controller');

module.exports = (app) => {
    app.get('/product/getProductList', controller.getProductList);
}