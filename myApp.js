require('dotenv').config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();

mongoose.connect("mongodb+srv://olatunji:falanasheriffdeen@tunji.ce8aj.mongodb.net/backend?retryWrites=true&w=majority", {useNewUrlParser: true})

let personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  favoriteFoods: Array,
  sex: [String]
});

const Person = mongoose.model("Person", personSchema);


const createAndSavePerson = (done) => {
  const person = new Person({
      name: "sofwat",
      age: 24,
      fovoriteFoods: ["bread", "amala", "golden morn"],
      sex: "female"
    });
    
    person.save((err, data) => {
      if(err) {
        console.log(err)
      }else {
        done(null, data);
      }
    })
  
};

const arrayOfPeople = [
  {
    name: "yemi",
    age: 26,
    fovoriteFoods: ["beans", "fufu", "rice"],
    sex: "male"
  },
  {
    name: "ebuka",
    age: 25,
    fovoriteFoods: ["beer", "rice", "biscuits"],
    sex: "male"
  },
  {
    name: "timi",
    age: 24,
    fovoriteFoods: ["bread", "amala", "akara"],
    sex: "male"
  }
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    if(err){ 
      console.log(err)
    }else {
      done(null, data)    
    }
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, (err, data) => {
    if(err) {
      console.log(err)
    }else {
      done(null, data);
      console.log(data)
    }
  })
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, (err, data) => {
    if(err){
      console.log(err)
    }else {
      done(null, data)
    }
  });
};

const findPersonById = (personId, done) => {
  Person.findOne({_id: personId}, (err, data) => {
    if(err) {
      console.log(err)
    }else {
      done(null, data)
    }
  })
};

const findEditThenSave = (personId, done) => {
  var foodToAdd = "hamburger";
  Person.findById(personId, function(err, data) {
    if (err) {
      done(err);
    }

    data.favoriteFoods.push(foodToAdd);
    data.save((err, data) => (err ? done(err) : done(null, data)));
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate({name: personName}, {age: ageToSet}, {new: true}, (err, data) => {
    if(err){
      console.log(err)
    }else {
      done(null, data)
    }
  });
};

const removeById = (personId, done) => {
  Person.findOneAndRemove({_id: personId}, (err, data) => {
    if(err) {
      console.log(err)
    }else {
      done(null, data)
    }
  });
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({name: nameToRemove}, (err, data) => {
    if(err){
      console.log(err)
    }else {
      done(null, data)
    }
  });
};

const queryChain = (done) => {
  const foodToSearch = "burrito";
  Person.find({favoriteFoods: foodToSearch}).sort({name: 1}).limit(2).select({age: 0}).exec((err, data) => {
    if(err){
      console.log(err)
    }else {
      done(null, data)
    }
  });
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
