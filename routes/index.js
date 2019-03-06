const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // res.end('Hello World');
    res.render('index', {
        title: 'My WebStore'
    });
});

router.get('/products', (req, res, next) => {
    res.render('products', {
        title: 'List of Products'
    });
});

module.exports = router;