// Helping Travis to start the server Slowly 10 sec

console.log("Starting Delayer 10 sec");

  const myVar = setTimeout(myFunction, 10000);
  function myFunction() {
    console.log("Ending Delayer. Good Luck! :)");
  }

