require('dotenv').config();
const mongoose = require("mongoose");

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
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
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
