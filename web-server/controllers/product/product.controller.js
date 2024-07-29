const jwt = require("jsonwebtoken");
const Product = require('../../models/product/Product');

exports.getProductList = async (req, res) => { 
    let product = await Product.findAll();
    console.log('product',product);
    if(product == null) {
        res.send({
            status: 200,
            resp: 0,
            msg: 'No product found.'
        });
    } else {
        res.send({
            status: 200,
            resp: 1,
            data: {
                records: product
            },
            msg: 'Product Fetched Successfully'
        });
    }
}
