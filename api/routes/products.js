const express = require('express');

const router = express.Router();
//GET
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "GET"
    });
});
//POST
router.post('/', (req, res, next) => {
    const product = {
        name:req.body.name,
        price: req.body.price,
    }
    //using BodyParser
    res.status(200).json({
        message: 'Hachibi POST',
        createProducts:product
    });
});
//GET With ID params
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'hachi') {
        res.status(200).json({
            message: 'YOUR DISCOVER THE Hachi'
        });
    } else {
        res.status(200).json({
            message: 'Fail'
        });
    }
});
//PATCH Cập Nhật Một Thành Phần
router.patch('/:productId',(req,res,next)=>{
    res.status(200).json({
        message: 'Update products'
    });
});
//DELETE
router.delete('/:productId',(req,res,next)=>{
    res.status(200).json({
        message: 'Delete products'
    });
});
module.exports = router;