

//What is a callback function?

// A callback function is a function passed as an argument into another function to be executed later.
// We use callback functions to handle asynchronous tasks (like timers, API requests, and event handlers).


function greeting(name, cb) {
  console.log(`Hi ${name}, who are you?`);
  cb(name); 
}

function reply(boyName) {
  console.log(`Hi, I am ${boyName} and I am a JavaScript developer.`);
}

greeting('karan', reply);