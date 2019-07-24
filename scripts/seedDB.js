const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/bellyfull");

const foodSeed = [
  {
    restaurant: "Lunch/Supper",
    phone: "(804) 353-0111",
    donations: "Corn on the Cob, Ribs (uncooked), Ground Beef(uncooked), Cranberry Sauce",
    address: "1215 Summit Ave, Richmond, VA 23230",
    contactName: "Molly Levine",
    date: new Date(Date.now()),
    claimed: true
  },
  {
    restaurant: "Joes Inn",
    phone: "(804) 355-2282",
    donations: "Uncooked Pasta, Pepperoni, Bread, Chicken Fingers",
    address: "205 N Shields Ave, Richmond, VA 23220",
    contactName: "Grace Jadallah",
    date: new Date(Date.now()),
    claimed: false
  },
  {
    restaurant: "Belmont Pizzaria",
    phone: "(804) 888-9861",
    donations: "Pepperoni, Cheese, Olives, Tomato Sauce",
    address: "602 N Belmont Ave, Richmond, VA 23221",
    contactName: "Carrie Mosby",
    date: new Date(Date.now()),
    claimed: false
  },
  {
   restaurant: "Cava",
   phone: "(804) 214-3850",
   donations: "Chickpeas, Pita, Rice, Arugla, Spinnach",
   address: "810 W Grace St, Richmond, VA 23220",
   contactName: "Matis Millhouse",
   date: new Date(Date.now()),
   claimed: false
  },
  {
    restaurant: "Lemon",
    phone: "(804) 204-1800",
    donations: "Rice (Uncooked)",
    address: "3215 W Broad St, Richmond, VA 23230",
    contactName: "Chenla Ou",
    date: new Date(Date.now()),
    claimed: false
  },
  {
    restaurant: "Panera",
    phone: "(804) 285-1777",
    donations: "3 Bagels, 4 Loaves of Bread",
    address: "1370 N Parham Rd, Richmond, VA 23229",
    contactName: "Joseph Cacioppo",
    date: new Date(Date.now()),
    claimed: false
  },
  {
    restaurant: "Olive Garden",
    phone: "(804) 672-6220",
    donations: "Pasta, Breadsticks, Chicken Fillet",
    address: "7113 W Broad St, Richmond, VA 2329",
    contactName: "Travis Henson",
    date: new Date(Date.now()),
    claimed: false
  },
  {
    restaurant: "J Kogi",
    phone: "(804) 225-8734",
    donations: "Rice, Kimchi, Cooked Beef",
    address: "325 N 2nd St, Richmond, VA 23219",
    contactName: "Christian Eckenrode",
    date: new Date(Date.now()),
    claimed: false
  },
  {
    restaurant: "Chipotle",
    phone: "(804) 288-2129",
    donations: "Rice, Corn, Tortillas",
    address: "8675 Quioccasin Rd, Richmond, VA 23229",
    contactName: "Danny Tiet",
    date: new Date(Date.now()),
    claimed: false
  },
  {
    restaurant: "Grape Vine",
    phone: "(804) 440-9100",
    donations: "Uncooked Pasta, Bread Sticks, Olive Oil",
    address: "11055 Three Chopt Rd, Richmond, VA 23233",
    contactName: "Kellie Parham-Prosise",
    date: new Date(Date.now()),
    claimed: false
  },
  {
    restaurant: "Texas Roadhouse",
    phone: "(804) 897-7427",
    donations: "Steak, Salad, Buns (Frozen)",
    address: "1570 W Koger Center Blvd, Richmond, VA 23235",
    contactName: "Dionne Scruggs",
    date: new Date(Date.now()),
    claimed: false
  },
  {
    restaurant: "Cafe Rio",
    phone: "(804) 897-7427",
    donations: "Steak, Salad, Break",
    address: "11825 W Broad St, Henrico, VA 23233",
    contactName: "Roland Powers",
    date: new Date(Date.now()),
    claimed: false
  },
  {
    restaurant: "Starbucks",
    phone: "(804) 897-7427",
    donations: "Steak, Salad, Break",
    address: "7017 Three Chopt Rd, Richmond, VA 23226",
    contactName: "Phillip Jennings",
    date: new Date(Date.now()),
    claimed: false
  }

];

db.Food
  .remove({})
  .then(() => db.Food.collection.insertMany(foodSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });