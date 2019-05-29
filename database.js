 const express = require('express');// GET EXPRESS MODULE
 const mongoose = require('mongoose');//GET MONGOOSE MODULE

 mongoose.connect('mongodb://root:root123@ds147125.mlab.com:47125/addressbookgac');//SET CONNECTION STRING

 let Schema = mongoose.Schema;//GET SCHEMA

 let personSchema = new Schema({//SET SCHEMA
   firstName:String,
   lastName: String,
   address: String
 });

 let Person = mongoose.model("Person", personSchema);//STABLISH MODEL

function getAll(){

  Person.find({}, (er, users)=>{//GET ALL RECORDS
    if (er) {
      throw er;
    } 
    console.log(users);
    
  });

}
 
 function savePerson(person){

  let oscar = Person(person);//CREATE OBJECT
 
  oscar.save(function(er){//SAVE DEFINED OBJECT
    if (er) {
       throw er;
    }
  });
  return true;
}

module.exports = {getAll, savePerson};