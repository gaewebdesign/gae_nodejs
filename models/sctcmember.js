const mongoose = require("mongoose")

// https://www.codegrepper.com/search.php?answer_removed=1&q=mongoose%20matching%20validation
var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  return re.test(email)
}

var validatePhone = function(phone) {
  var re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
  return re.test(phone)
}

const clubSchema = new mongoose.Schema({

  fname: { type: String, minLength: 2, required: true },
  lname: { type: String, minLength: 2, required: true },
  email: { type: String, minlength: 7, required: false },
  gender: { type: String, minlength: 1, required: false },
  ntrp: { type: String, minlength: 0, required: false },

  url: { type: String, minLength: 0, required: false },
  year: { type: String, minLength: 0, required: false },
  address: { type: String, minLength: 0, required: false },
  zip: { type: String, minLength: 0, required: false }



})// clubSchema


const sctcmember = mongoose.model("sctcmember", clubSchema)

// models/sctcmembers.js
module.exports = sctcmember