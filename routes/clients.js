var express = require('express');
var router = express.Router();
var mongoose =require('mongoose')
var Client = require('../models/Client.js')

//Listar
router.get('/',  async(req,res, next )=>{
const clients= await Client.find()
res.json(clients);
  //( function(err ,clients){

//if(err) return next(err)
  //  res.json(clients)
  })
//Agregar
router.post('/', async (req, res)=>{
  console.log(req.body)
  const client =new Client(req.body)

  await  client.save()
  res.send('received')
  //Client.create(req.body,function(err, post){
  //  if(err) return next(err);
  //  res.json(post);

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

module.exports =router;
