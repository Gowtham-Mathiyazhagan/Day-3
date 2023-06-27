let obj1 = {name: "Person 1", age: 5};
let obj2 = {age: 5, name: "Person 1"};

let str1 = JSON.stringify(obj1);
let str2 = JSON.stringify(obj2);

let sortedStr1 = str1.split('').sort().join('');
let sortedStr2 = str2.split('').sort().join('');

if (sortedStr1 === sortedStr2) {
  console.log("The json objects have the same properties.");
} else {
  console.log("The json objects do not have the same properties.");
}
