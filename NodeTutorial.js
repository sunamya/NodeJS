var app=require('./Tutorial.js');
var exports=module.exports={};
exports.NodeTutorial=function(){
    console.log("Node Tutorial")
    this.Tutor=function()
    {
    var P=app;
    P.tutorial();
    }
};