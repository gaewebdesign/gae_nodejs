// Endpoint handlers

const express = require('express')

const router = express.Router()

const conn = require("../database.js")
const sctcmember = require("../models/sctcmember.js")


// ENDPOINT:  mongodb 
router.get("/", (req, res) => {


let filter = {}
  sctcmember.find().exec(function(err, result) {

    if (!err) {
      res.status(200).send(result)   // use the real result 
    } else {
      res.status(400).send(err.message)
    }

  })



})

module.exports = router






