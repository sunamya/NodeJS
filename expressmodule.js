var app=require('express');
var a=app();
a.set('view engine','html');
a.get('/',function(req,res){
    res.send('Hell - o');
    res.render('html',{title:'Trial',message:'Hell - 0  Sexy!'});
});
a.route('/Node').get(function(req,res){
    res.send("Node JS");
});
a.route('/Angular').get(function(req,res){
    res.send("Angular JS");
});
var server=a.listen(3000,function(){});
