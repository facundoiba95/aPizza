/*
1) importar express
2)importar app de express para trabajar con un servidor ya creado
3)instalar cors desde npm
4)usar cors mediante app.use(cors())
*/
const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors())

const Menu = require('./datos/Menu')
const routerInfoApi = express.Router()
const routerApi = express.Router();
app.use('/api/', routerApi)
app.use('/', routerInfoApi)

routerInfoApi.get('/',(req,res)=> {
    return res.send('Para ingresar queryParams: ?categoria= valor. CATEGORIAS= pizzas, hamburguesas, papas . Menu de api: /api/')
})

routerApi.get('/',(req,res)=> {
    const path = req.path;    
      if(req.query.categoria === 'pizzas' ||req.query.categoria === 'pizza' ){
        return res.send(Menu[0])
    } if(req.query.categoria === 'hamburguesas' || req.query.categoria === 'hamburguesa'){
        return res.send(Menu[1])
    } if(req.query.categoria === 'papas'){
        return res.send(Menu[2])
    } if(path === '/' || path === ""){
        return res.send(Menu)
    } else {
        const error = res.status(404)
        return res.status(404).send(`No se encontro esa categoria :/ Error: ${error}`)
     }
})


const PUERTO = process.env.PORT || 3001;
app.listen(PUERTO, ()=> {
    console.log(`El servidor esta escuchando en el puerto: ${PUERTO}`)
})