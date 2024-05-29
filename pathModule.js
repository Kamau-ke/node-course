const path=require('path')
const filePath=path.join('\content', 'text.txt'); //this method is used to create sub path
//To create full path we use resolve method

const fullPath=path.resolve(__dirname, 'content', 'text.txt')

//const fullpath=path.resolve(__dirname, './node-express/02-express-tutorial/navbar-app/index.html');

console.log()
