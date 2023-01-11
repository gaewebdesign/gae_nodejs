const mongoose = require("mongoose")





// tennis.sctcmembers is also uploaded into EmpployeeApp.sctcmembers
// (yes,EmpployeeApp is misspelled  with double pp )
/*
  Use mongosh to log into mongodb EmplloyeeApp (with tomato134 as password)
  NOTE: to get this to work, need to open IP address to either me or anyone
  
mongosh mongodb+srv://cs157.qljr1c3.mongodb.net/EmpployeeApp --apiVersion 1 --username cs157
 SHELL commands

 show collections
 use sctcmembers        

 db.sctcmembers
 db.sctcmembers.insertOne( {fname:"Roger",lname:"Okamoto" })

 db.sctcmembers.insertMany( [ ])
 db.sctcmembers.find()

 db.sctcmembers.findOne()

 QUERYs
 db.sctcmembers.find( { fname: {$eq:"Roger" }} )
 db.sctcmembers.find({ city: {$eq: "Santa Clara" } })
 db.sctcmembers.find( { lname: {$regex: "moto"  }  })

 db.sctcmembers.find( { ntrp: {$regex: "4"  }  }) 
 db.sctcmembers.find( { ntrp: {$regex: "3.5"  } , gender: "M" })

 db.sctcmembers.find( ).limit(3)
 db.sctcmembers.find( {city: {$regex: "San J" }}).limit(3)

 
*/

let url = "mongodb+srv://cs157:tomato1349@cs157.qljr1c3.mongodb.net/EmpployeeApp?retryWrites=true&w=majority"


// uploaded sctcmembers into the EmpployeeApp database .. and checked using mongosh
/*
  this is what's stored in the Mongodb database (tennis), collection(sctcmembers)
  database:  tennis
  Collection: sctcmembers

  _id
  year,date,fname,lname,gender,ntrp,address,city,zip,email,url,mtype,help,other
  

*/

const conn = mongoose.connect(
  // Use your own connection string here. Make sure the database name is EmployeeApp
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false
  },
  function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB - EmployeeApp database ( )...");
    }
  }
);



module.exports = conn
