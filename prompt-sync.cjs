// Initialize prompt-sync properly in one step
var prompt = require("prompt-sync")({ sigint: true });

// Now 'prompt' can be called directly to ask for input
var name = prompt("What is your name? ");
console.log(`Hey there ${name}`);