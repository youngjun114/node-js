const EventEmitter = require('events');
const emitter = new EventEmitter();

const callback1 = (args) => {
  console.log('first callback - ', args);
};

emitter.on('woo', callback1);
emitter.on('woo', (args) => {
  console.log('second callback -', args);
});

// emit(eventName, data)
emitter.emit('woo', { message: 1 });
emitter.emit('woo', { message: 2 });
emitter.removeListener('woo', callback1);
emitter.removeAllListeners();
emitter.emit('woo', { message: 3 });


