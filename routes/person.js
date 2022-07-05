const Person = require('../models/Person')


//  Create New Person
const addPerson = async () => {
    try {
      const newPerson = new Person({
        name: "ali",
        age: 44,
        favoriteFoods: ["couscous", "salad", "mechoui"],
      });
      await newPerson.save();
      console.log(newPerson);
    } catch (error) {
      console.log(error);
    }
  };

// find many people by name
const findPeopleByName = async(PersonName)=>{
    const people= await Person.find({name: PersonName})
    console.log("searchByName", people)
 }
//find One Person By Id
const SearchById = (personId)=>{
    
    Person.findById({_id : personId}, (err, data) => {
        if(err){ console.log(err) }
        console.log(data)
    });
    }
// Delete Person
const findRemoveById= (personId)=>{
    Person.findByIdAndRemove({_id: personId}, {new: true}, (err, data)=>{
        if(err){ console.log(err)}
        console.log(data)
    })
} 


// finOne And update 
const findAndUpdate = (PersonName, ageToSet)=> {
    Person.findOneAndUpdate({name: PersonName}, { $set: { age: ageToSet} }, {new:true}, (err, data)=>{
        if(err){console.log(err)}
        console.log(data)
    })
}


module.exports = {
  addPerson,
  findPeopleByName,
  SearchById,
  findRemoveById,
  findAndUpdate


  
};