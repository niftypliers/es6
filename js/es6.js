// Async

setTimeout(function() {
  console.log(3000);
}, 3000);


// Promise

let fileReadStatus = new Promise(function(resolve, reject) {
  // Read  a file.
  let file = false;
  if (file) {
    resolve("Done");
  } else {
    reject("Some error");
  }
});

fileReadStatus.then(
  function (value) {
    console.log(value);
  },
  function (error) {
    console.log(error)
  }
);