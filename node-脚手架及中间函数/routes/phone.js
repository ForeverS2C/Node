var express = require('express');
var router = express.Router();

router.get('/create',function(req,res){
    res.send('新建一个phone');
});

module.exports = router;