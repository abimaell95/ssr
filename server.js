const express= require('express');
const app = express();
const port= 3000;

app.get('/', (req, resp)=>{
    resp.send('<h1>Hola Mundo SSR</h1>')
})

app.listen(port, ()=>{
    console.log(`Server is running in ${port}`)
})