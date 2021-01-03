const event = require('events');
const emitter = new event.EventEmitter();

function demo()
{
    setTimeout(()=>{
        console.log('Set time out handler');
        emitter.emit("setTimeoutFinished",{
            name: 'Tk'
        });
    },300);
}

emitter.on('setTimeoutFinished',(data)=>{
    console.log('Data ',data);
    console.log("Event Fired setTimeoutFinished");
});

demo();
console.log("After demo");