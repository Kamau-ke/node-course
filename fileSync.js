const {readFileSync, writeFileSync}=require('fs');

const file=readFileSync('./content/text.txt','utf8')

for(let i=0; i<100; i++){
    writeFileSync('./content/bigFile.txt', `Hello world ${i}\n`, {flag:'a'})
}


