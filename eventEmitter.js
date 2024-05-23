const eventEmitter=require('events')

// To create custom events we use on to listen to an event and emit to emit ab event
// first listen for event before emitting it 

const customEvent=new eventEmitter()

customEvent.on('response', ()=>{
    console.log('data received')
})

customEvent.emit('response')