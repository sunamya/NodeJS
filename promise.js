var Promise = require('promise');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/EmployeeDB';

//Method 1
MongoClient.connect(url)
.then(function(db) {
    db.db('EmployeeDB').collection('Employee').updateOne({
        "EmployeeID": 2
    }, {
        $set: {
            "EmployeeName": "Rohan"
        }
    })
    console.log("Updated Successfully");
    })
.catch(function(err){
    console.log(err)
}); 
//Method 2
MongoClient.connect(url)
.then(function(db) {
    db.db('EmployeeDB').collection('Employee').updateOne({
        "EmployeeID": 2
    }, {
        $set: {
            "EmployeeName": "Mohan"
        }
    })
    .then(function(data){
        console.log("Updated Successfully")
    })
    .catch(function(err){
        console.log(err)
    })
    })
.catch(function(err){
    console.log(err)
}); 
//Method 3
//Bluebird method
//https://vispud.blogspot.com/2019/03/how-to-use-mongodb-with-promises-in.html
