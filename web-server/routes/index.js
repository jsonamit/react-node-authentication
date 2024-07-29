module.exports = (app) => { 
    require('./user/user.routes')(app);
    require('./product/product.routes')(app);
    return app;
}