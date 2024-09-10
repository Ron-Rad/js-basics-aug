// greetins/welcome

//first array
const catergories = ["Fruits & Veg", "Staple & Tins", "Cleaning Stuff"];
catergories.forEach(function(catergories, index){
    console.log('${index}. ' ,catergories) });

const Fruitsandveg = ["apple", "orange", "onion", "tomato", "butternut", "grapes"];
const FruitsandvegPrice = ["1", "3", "1", "5", "1", "4"];

const Stapleandtins = ["Maize", "Rice", "Samp", "Pilchards(Tin)", "Baked-Beans(Tins)", "Tuna(Tin)"];
const StapleandtinsPrice = ["20", "30", "15", "20", "10", "7"];

const Cleaning = ["laundry soap", "bathing soap", "dish soap", "shampoo", "bucket", "mop", "broom"];
const CleaningPrice = ["40", "5", "25", "20", "20", "13", "13"];

const Cart = [];
