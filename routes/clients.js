var express = require('express');
var router = express.Router();
var mongoose =require('mongoose')
var Client = require('../models/Client.js')
var cliente= Client({_id:"1", client_name:"lucas",client_apellido:"quintana",client_direccion:"ciudad2",client_telefono:"231231455",client_cuentas:{num_cuenta:"74119091"},client_cuentas:{num_cuenta:"1255252342342"}});
var cliente2= Client({_id:"1", client_name:"cesar",client_apellido:"vallejo",client_direccion:"avenida2",client_telefono:"435635635",client_cuentas:[{num_cuenta:"123456789"},{num_cuenta:"756756756756"}]});
//Listar
router.get('/',  async(req,res, next )=>{
const clients= await Client.find()
res.json(clients);
  //( function(err ,clients){

//if(err) return next(err)
  //  res.json(clients)
  })
//Agregar
router.post('/', async (req, res, next)=>{
  console.log(req.body)
  console.log(cliente)

  const client =new Client(cliente)
  const client2 = new Client(cliente2)
  //await cliente.save()
 await client.save()
 await client2.save()
  res.send('post')
  //Client.create(req.body,function(err, post){
    //if(err) return next(err);
   //res.json(post);

   //})
})
//createError
router.post('/add' ,(req,res)=>{
  Client.create(
    {client_name:req.body.client_name,
    client_apellido:req.body.client_apellido,
    client_direccion:req.body.client_direccion,
    client_telefono:req.body.client_telefono,
    client_cuentas:req.body.client_cuentas,
    num_cuenta:req.body.num_cuenta,}
  ).then(user=>{
    res.send('add')
  })
})
/* UPDATE PRODUCT */
router.get('/update/:id', function(req, res, next) {
  Client.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
/* DELETE PRODUCT */
router.get('/delete/:id', (req, res,next)=> {
    /*const{id}=req.params;
    Client.remove({_id:id})
    res.send('hola')*/

  Client.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
/* GET SINGLE PRODUCT BY ID */
router.get('/:id', function(req, res, next) {
  Client.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET SINGLE PRODUCT BY CUENTA */
router.get('/cuenta/:cuenta', function(req, res, next) {
  console.log(req.params.cuenta)
  Client.find({"client_cuentas.num_cuenta":req.params.cuenta}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports =router;
