const fs = require("fs");
const path = require("path");

// streams break large files up into chunks of data to be read and passed into a buffer rather than one larger read/pass to the buffer at once - this is
// a great optimization tool

// creates a read stream to parse the txt file to create data streams from it - assign it an encoding option of utf8 for normal string representation
const rdStream = fs.createReadStream(path.join(__dirname, "/docs/blog2.txt"), {
  encoding: "utf8",
});

const wrStream = fs.createWriteStream(path.join(__dirname, "/docs/blog3.txt"));

// NodeJS event listener - same as normal frontend events - but in node. This is accepting data events from a chunk of data of a stream
rdStream.on("data", (chunk) => {
  // read the chunk from the file stream being read and write to a new stream the same chunk to the new blog3.txt file
  wrStream.write("--New Stream Chunk--\n");
  wrStream.write(chunk);
});

// rdStream.pipe(wrStream); can write to file too
