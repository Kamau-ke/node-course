const {readFile, writeFile}=require('fs')

readFile('./content/result.txt','utf8', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    const data=result

    writeFile('./content/second.txt', 'This is my second file', (err, result)=>{
        if(err){
            console.log(err)
            return
        }
        
    } )
        
    
    
})

