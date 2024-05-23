const {readFileSync, writeFileSync}=require('fs');

const file=readFileSync('./content/text.txt','utf8')

writeFileSync('./content/result.txt', 'Hello this is result file')
console.log(file)