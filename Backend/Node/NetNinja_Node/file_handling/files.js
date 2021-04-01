const fs = require("fs"); // file system module for working with files
const path = require("path"); // for access to path.join() for __dirname = dirname will return path to the file that the __dirname is being ran on currently

//readFile takes the relative path and a callback to execute after some time - returns promise so we need to accept the potential error or response (the read data)
fs.readFile(path.join(__dirname, "./docs/blog1.txt"), (err, data) => {
  console.log("File contents read");
  if (err) {
    console.log(err);
  } else {
    const contents = data.toString();
    console.log(contents);
  }
});

// write to file - takes path, text to write and a callback to be written - also async so returns promise
fs.writeFile(
  path.join(__dirname, "./docs/blog1.txt"),
  "hello there!",
  (err) => {
    if (err) {
      console.log(err);
    }
    console.log("File overwritten");
  }
);

// Create directory if it does not already exist
if (!fs.existsSync(path.join(__dirname, "/assets"))) {
  fs.mkdir(path.join(__dirname, "/assets"), (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Directory Created");
  });
} else {
  // also again async so returns a promise which can be resolved or rejected. Use callback to capture err or resolve the promise with some logic
  fs.rmdir(path.join(__dirname, "/assets"), (err) => {
    if (err) {
      console.log(err);
    }
    console.log("File Successfully removed");
  });
}

// deleting files if they exist
if (fs.existsSync(path.join(__dirname, "/docs/testDelete.txt"))) {
  fs.unlink(path.join(__dirname, "/docs/testDelete.txt"), (err) => {
    if (err) {
      console.log(err);
    }
    console.log("testDelete.txt successfully deleted from system");
  });
} else {
  console.log("File does not yet exist");
}
