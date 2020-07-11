var fs=require('fs');
var stream;
//Reading
stream=fs.createReadStream("D://Data//NodeJS//bluebird.txt");
stream.on("data",function(data){
    var chunk=data.toString();
    console.log(chunk);
});
//Writing(create new)
stream=fs.createWriteStream("D://Data//NodeJS//bluebird.txt");
stream.write("File stream tutorial");
//pipes
stream=fs.createReadStream("D://Data//NodeJS//bluebird.txt");
var stream2=fs.createWriteStream("D://Data//NodeJS//data.txt");
stream.pipe(stream2);