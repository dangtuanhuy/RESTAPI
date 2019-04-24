const express = require('express');

const router = express.Router();
// handle incomming GET request to orders
router.get('/',(req,res,next)=>{
    res.status(200).json({
    message: 'Order fetch'
    });
});

router.post('/',(req,res,next)=>{
    const order ={
        productsId: req.body.productsId,
        quantity: req.body.quantity
    };
    res.status(208).json({
    message: 'Order created',
    order: order
    });
});

router.get('/:orderId',(req,res,next)=>{
    res.status(208).json({
    message: 'Order Details',
    orderId:req.params.orderId
    });
});

router.delete('/:orderId',(req,res,next)=>{
    res.status(208).json({
    message: 'Order Deleted',
    orderId:req.params.orderId
    });
});
module.exports = router;