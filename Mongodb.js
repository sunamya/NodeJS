const { MongoClient } = require('mongodb');

var app=require('mongodb').MongoClient;
var url='mongodb://localhost/EmployeeDB';
app.connect(url,function(err,db){
    //Connecting and closing
    console.log("Connected");
    var c=db.db('EmployeeDB');
    var curr=c.collection('Employee').find();
    //Querying
    //var curr=c.collection('Employee').find({EmployeeName: "Sunamya"});
    curr.each(function(err,doc){
        console.log(doc);
    });
    //Inserting
    c.collection('Employee').insertOne({
        "EmployeeID":6,
        "EmployeeName":"try!"
    });
    //Updating
    c.collection('Employee').updateOne({
        //Search Criteria
        "EmployeeID":2},
        {
            //update
            $set:{"EmployeeName":"Sunamra"}
        }
    );
    //Delete
    c.collection('Employee').deleteOne({
        "EmployeeID":4
    });
    db.close;
});
