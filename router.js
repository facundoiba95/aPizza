// const http = require('http')
const express = require('express');
const app = express();

const Pizzas = require('./datos/pizzas')
const routerPizzas = express.Router();
app.use('/api/pizzas', routerPizzas)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


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