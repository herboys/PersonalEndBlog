var express = require('express');
var router = express.Router();

/* GET home page. */
//设置允许跨域访问该服务.
 router.all('*', function (req, res, next) {
   res.header('Access-Control-Allow-Origin', '*');
   //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  // res.header('Access-Control-Allow-Headers', 'Content-Type');
  // res.header('Access-Control-Allow-Methods', '*');
  // res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});
router.get('/', function(req, res, next) {
  let lists="快代扔"
  res.render('index', { title: lists });
});
router.get('/home',(req,res,next)=>{
  let uid=req.query.uid
  let para={
    uid:100,
    status:200
  }
  res.send(para)
})
console.log( 'server listening to 3000, http://localhost:3000' )
module.exports = router;
