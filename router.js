// const http = require('http')
const express = require('express');
const app = express();

const Pizzas = require('./datos/pizzas')
const routerPizzas = express.Router();
app.use('/api/pizzas', routerPizzas)


// routerPizzas.get('/',(req,res)=> {
//     return res.send(JSON.stringify(Pizzas))
// })
routerPizzas.get('/',(req,res)=> {
    const path = req.path;
    if(path === '/'){
       return res.send(Pizzas)
    } else {
        return res.status(404).send('No se encontro la pagina :/')
    }
})



const PUERTO = process.env.PORT || 3001;
app.listen(PUERTO, ()=> {
    console.log(`El servidor esta escuchando en el puerto: ${PUERTO}`)
})