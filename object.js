//initialization of an object
const mobile = {
    brand: 'samsung',
    price: '15500',
    ram: '4GB',
    rom: '32GB',
    color:'naviblue'
}

//print object
// console.log(mobile);

//print a specific property value by key
// console.log(mobile.brand, mobile['color']);//here 2 systems to get property value

//another sytem to get property value
var property = 'ram';
// console.log(mobile[property]);

//to change a value
mobile.brand = "realme";//one way
// console.log(mobile);

mobile['brand'] = "nokia"; //another way
// console.log(mobile);

// to get all keys of an object
var properties = Object.keys(mobile);
console.log(properties);

// to get all values of an object
var propertiesValues = Object.values(mobile);
console.log(propertiesValues);