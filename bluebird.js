var p=require('bluebird');
const { ResumeToken } = require('mongodb');
var mongodb=p.promisifyAll(require('mongodb')).MongoClient
var url='mongodb://localhost/EmployeeDB';
mongodb.connect(url)
.then((db)=>{
    return db.db('EmployeeDB').collection('Employee').findAsync()
})
.then(function(cursor) {
    cursor.each(function(err, doc) {
        console.log(doc);
    })
}); 