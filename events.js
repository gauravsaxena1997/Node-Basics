let events = require('events');

// eventEmitter = new events.EventEmitter();
// connectHandler = () => {
//     console.log('Connection Successful...');
//     eventEmitter.emit('data_received');
// }
// eventEmitter.on('connection',connectHandler);
// eventEmitter.on('data_received',()=>{
//     console.log('Data received.');   
// });
// eventEmitter.emit('connection');
// console.log('Program ended.');

eventEmitter = new events.EventEmitter();
listener1 =()=>{
    console.log('Listener1 is executed.');
}
listener2 =()=>{
    console.log('Listener2 is executed.');
}
const getListenerCount=()=>{
    lisCount = require('events').EventEmitter.listenerCount(eventEmitter,'event');
    console.log(lisCount+' Listener(s) listening to the event.');
}
eventEmitter.addListener('event',listener1);
eventEmitter.on('event',listener2);
getListenerCount();
eventEmitter.emit('event');
eventEmitter.removeListener('event',listener1);
getListenerCount();
eventEmitter.emit('event');
eventEmitter.removeListener('event',listener2);
getListenerCount();
eventEmitter.emit('event');
