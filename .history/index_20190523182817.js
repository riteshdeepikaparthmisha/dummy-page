//global variable
let firstName ="Ritesh";
let lastName = "Parekh";

//arrow function
let GetFullName = (firstName,lastName)=> {
    return firstName+ " " + lastName;
}
console.log(GetFullName(firstName,lastName));

//object literal
let fullName ={firstName,lastName}
console.log(fullName);

let fullName1 ={firstName:lastName}
console.log(fullName1);

let fullName2 ={[firstName]:lastName}
console.log(fullName2);