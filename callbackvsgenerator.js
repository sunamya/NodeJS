function Timedelay(ptime, callback) {

    setTimeout(function() {
      
        callback("Pausing for " + ptime);
        
      });
    }
    //Callback
    Timedelay(1000, function(msg) {
  
        console.log("Inside callback : "+msg);
        Timedelay(2000, function(msg) {
          
          console.log("Inside callback : "+msg);
          Timedelay(3000, function(msg) {
            
            console.log("Inside callback : "+msg);
        })
        })
      })
    //Generator  
    function* Messages() {
        yield(Timedelay(1000, function(message){console.log("Inside generator : "+message)}));
        yield(Timedelay(2000, function(message){console.log("Inside generator : "+message)}));
        yield(Timedelay(3000, function(message){console.log("Inside generator : "+message)}));
      }
      var g=Messages();
      g.next();
      g.next();
      g.next();