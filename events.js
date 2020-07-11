var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on('data_received', function() {
    console.log('data received succesfully.');
});

eventEmitter.emit('data_received'); 
//One-time event handler
eventEmitter.once('data_received', function() {
    console.log('data received succesfully.');
});
eventEmitter.emit('data_received');
eventEmitter.emit('data_received');
//Inspecting Event Listeners
console.log(eventEmitter.listenerCount(eventEmitter,'data_received'));
//New Listener
var events = require('events');
var eventEmitter = events.EventEmitter;
var emitter = new eventEmitter();
emitter.on("newListener", function(eventName, listener) {
    console.log("Added listener for " + eventName + " events");
});
emitter.on('data_received', function() {});
emitter.on('data_received', function() {}); 