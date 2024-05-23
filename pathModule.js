const path=require('path')
const filePath=path.join('\content', 'text.txt'); //this method is used to create sub path
//To create full path we use resolve method

const fullPath=path.resolve(__dirname, 'content', 'text.txt')

console.log(fullPath)
