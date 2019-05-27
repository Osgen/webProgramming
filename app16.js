 const express = require('express');// GET EXPRESS MODULE
 const mongoose = require('mongoose');//GET MONGOOSE MODULE

 let app = express();

 mongoose.connect('mongodb://root:root123@ds147125.mlab.com:47125/addressbookgac');//SET CONNECTION STRING

 let Schema = mongoose.Schema;//GET SCHEMA

 let personSchema = new Schema({//SET SCHEMA
   fistName:String,
   lastName: String,
   address: String
 });

 let Person = mongoose.model("Person", personSchema);//STABLISH MODEL

 let oscar = Person({fistName:"oscarito2", lastName:"virgencita", address:"p sherman walaby sidney"});//CREATE OBJECT

//  oscar.save(function(er){//SAVE DEFINED OBJECT
//    if (er) {
//      throw er;
//    }else{
//      console.log('person saved');
     
//    }
//  });

 Person.find({}, function(er, users){//GET ALL RECORDS
   if (er) {
     throw er;
   } else {
     console.log(users);
     
   }
 });