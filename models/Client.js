var mongoose = require('mongoose')

var ClientShema = new mongoose.Schema({
  client_name: String,
  client_apellido :String,
  client_direccion : String,
  client_telefono: String,
  client_cuentas: [{
    num_cuenta:String,
  }],
})

module.exports = mongoose.model('Client', ClientShema);
