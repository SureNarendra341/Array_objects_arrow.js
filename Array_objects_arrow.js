//push and pop

let array=[]
array.push(1);
array.push(2);
array.push(3);
array.pop()
console.log(array);

//Shift and Unshift

let alphabets=['a','b','c']
alphabets.shift()
alphabets.unshift('z')
console.log(alphabets);

// Slice
let number=[1,2,3,4,5]
let newnumber=number.slice(1,4)
console.log(newnumber);

//Splice
let color=["red","green","blue","yellow"]
let newcolor=color.splice(2,1,"purple","orange");
console.log(newcolor);
console.log(color);

//Creating and Manipulating Objects
//Object Creation
let car={
    make:"Volkswagen",
    model:"ID.7",
    year: 2023,
}
console.log(car);

////Property Deletion
delete car.year;
console.log(car);

//Nested Objects
let person={
    Name:"S.Narendra",
    age:21,
    address:{
        street:"librey",
        city:"karempudi",
        pincode:522614,
    }

}
console.log(person);
console.log(person.address.city);

//Arrow Functions
greet = (name) => `Hello,${name}!`;
console.log(greet("Yaswanth"));