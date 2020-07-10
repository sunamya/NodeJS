var express=require('express');
var promise=require('promise');
var app=express();
var mongodb=require('mongodb').MongoClient;
var url='mongodb://localhost/EmployeeDB';
var str=""
app.route('/').get(function(req,res){
    mongodb.connect(url)
    .then(function(db){
        db.db('EmployeeDB').collection('Employee').find().toArray()
        .then((result)=>{
            result.forEach(function(item){
                str=str+" Employee ID : "+item.EmployeeID+"<br>";
            })
            res.send("Hello<br> Employee Details <br>"+str);
        })
        .catch((error)=>{
            console.error(error)
        })
    })
    .catch((error)=>{
        console.error(error)
    })
});
var server = app.listen(4000, function() {
    console.log("Server Listening");
}); 