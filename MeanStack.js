var express=require('express');
var app=express();
var mongodb=require('mongodb').MongoClient;
var url='mongodb://localhost/EmployeeDB';
var str=""
app.route('/EmployeeID').get(function(req,res){
    mongodb.connect(url,function(err,db){
        console.log("Connected");
        var c=db.db('EmployeeDB').collection('Employee').find();
        str="Employee Details\n";
        c.each(function(err,item){
            if(item!=null){
                str=str+" Employee ID : "+item.EmployeeID+"<br>";
            }
            if(err!=null){
               console.error(err);
            }
        });
        db.close();
        res.send(str);
    });
});
var server = app.listen(7000, function() {
    console.log("Server Listening");
}); 