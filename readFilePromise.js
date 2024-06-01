const { readFile,writeFile }=require('fs')
const utils=require('util')

const readFilePromise=utils.promisify(readFile)
const writeFilePromise=utils.promisify(writeFile)




const start=async ()=>{
    try{
        const first=await readFilePromise('./content/result.txt', 'utf8')
        await writeFilePromise('./content/promise.txt', 'This is my promise text')
    }
    catch(err){
        console.log(err)
    }
    
    
}

start();

// const getFile=(path)=>{
//     return new Promise((resolve, reject)=>{
//         readFile(path, 'utf8', (err, result)=>{
//             if(result){
//                 resolve(result)
//             }else{
//                 reject(err)
//             }
//         })
//     })
// }

// start()




// getFile('./content/result.txt').then(data=>{
//     console.log(data)
// }).catch(err=>{
//     console.log(err)
// })