const {createReadStream }=require('fs')


const stream=createReadStream('./content/bigFile.txt',{highWaterMark: 9000, encoding:'utf8'})

// streams return data in chuncks of default 64kb
// highWaterMark - control size of chunck


stream.on('data', (result)=>{
    console.log(result)
})

stream.on('error',(err)=>console.log(err))