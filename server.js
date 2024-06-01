const http=require('http')

const server=http.createServer((req, res)=>{
  if(req.url==='/'){
    res.end('Welcome to home page');
    
  }
  else if(req.url==='/about'){
    res.end('This is our short history')
    
  }else{
    res.end(`
    <h1>Oops!</h1>
    <p>We can't find the page you're looking for</p>
    <a href='/'>Go back to home page</a>
  `)
  }
 
  
  
})
server.listen(5000, ()=>{
  console.log(`server running on port 5000 `)
})