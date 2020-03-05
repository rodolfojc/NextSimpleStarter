var express = require('express'),
router = express.Router();

router.get('/hello/:foo/:bar', function(req,res){
    res.json({result: "Hello World! 😤😱🥵🤡", data: [
        req.params.foo,
        req.params.bar
    ]});
});

router.post('/hello', function(req,res){
    res.json({result: "The POST request was sent", data: req.body});

});

module.exports = router;