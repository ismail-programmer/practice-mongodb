const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', {
  useNewUrlParser: true
});

const fruitSchema = new mongoose.Schema({
  name: {
    type:String,
    required:true
  },
  rating: {
    type:Number,
    min:1,
    max:10
  },
  review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
  name:"apple",
  rating: 9,
  review: 'awsome!!'
});
const allo = new Fruit({
  name:"allo",
  rating: 9,
  review: 'aala!!'
});


const grapes = new Fruit({
  name:"grapes",
  rating: 3,
  review: 'awspmw!!'
});


grapes.save();

const peopleSchema = new mongoose.Schema({
  name:String,
  age:Number,
  favouriteFruit:fruitSchema
});

const People = mongoose.model("People",peopleSchema);

const people = new People({
  name:"ali",
  age:12,
  favouriteFruit:allo
})

People.updateMany({name:'ismail'},{favouriteFruit:grapes},function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log("newSchema");

  }
})

// Fruit.updateOne({rating: 9},{name:'Peach'},function(err){
//   if(err){
//     console.log("error")
//   }
//   else{
//     console.log("sucess")

//   }
// })

// Fruit.updateMany({name:'apple'},{name:'cuc'},function(err){
//   if(err){
//     console.log("error")
//   }
//   else{
//     console.log("added")

//   }
// })

// fruit.save();
// people.save();

// const mango = new Fruit({
//   name:'mango',
//   rating:4,
//   review:"scscdscs"
// });
// const kiwi = new Fruit({
//   name:'kiwi',
//   rating:4,
//   review:"scscdscs"
// });
// const orange = new Fruit({
//   name:'orange',
//   rating:4,
//   review:"scscdscs"
// });


// Fruit.insertMany([kiwi,orange,mango],function(err){
//   if(err){
//     console.log(err);

//   }
//   else{
//     console.log("saved")
//   }
// })

People.find(function(err,out){
  if(err){
    console.log(err)
  }
  else{
  
  mongoose.connection.close();
      out.forEach(function(item){
          console.log(item)
        })
    
      }
    })
    