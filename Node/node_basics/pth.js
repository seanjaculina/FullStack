const path = require("path"); //node module

/**
 * Let's show what the path object contains when we use both filename and dir name
 */

const representThePathObj = path.parse(__filename);
console.log(representThePathObj);
/**
 * this returns:
 * {
  root: '/',
  dir: '/Users/tannerbarcelos/Desktop/first_pp',
  base: 'pth.js',
  ext: '.js',
  name: 'pth'
}

root path
directory it is in
name of file
file extension
and file name

this represents info about the file

Now if we do the dirname..
 */

const dirNamePath = path.parse(__dirname);
console.log(dirNamePath);

/**
 * shows infor about this directory!
 * {
  root: '/',
  dir: '/Users/tannerbarcelos/Desktop',
  base: 'first_pp',
  ext: '',
  name: 'first_pp'
}
 */

//this just prints the dirname (we need to parse it with path module)
console.log(__dirname);
