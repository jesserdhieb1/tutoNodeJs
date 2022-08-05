const EventEmitter = require('events');

const myEvent = new EventEmitter();

myEvent.on('eve1',(name,age)=>{
    console.log(name,age);
})
myEvent.on('eve1',()=>{
    console.log('wassap :)');
})

myEvent.emit('eve1','jess',22);
