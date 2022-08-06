const mobile = {
  brand: "samsung",
  price: "15500",
  ram: "4GB",
  rom: "32GB",
  color: "naviblue",
};

// to get all keys of an object
const properties = Object.keys(mobile);

// to get all values of an object
const propertiesValues = Object.values(mobile);

// for (var i = 0; i < properties.length; i++){
//     console.log(properties[i], propertiesValues[i]);
// }


// for (var j = 0; j < propertiesValues.length; j++) {
//   console.log(propertiesValues[j]);
// }

//for in loop
for (var propertyName in mobile) {
    const value = mobile[propertyName];
    console.log(propertyName, value);
}