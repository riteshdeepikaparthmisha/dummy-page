let firstName ="Ritesh";
let lastName = "Parekh";

let GetFullName = (firstName,lastName)=> {
    return firstName+ " " + lastName;
}

console.log(GetFullName(firstName,lastName));

let fullName ={firstName,lastName}
console.log(fullName);

let fullName1 ={firstName:lastName}
console.log(fullName1);

let fullName2 ={[firstName]:lastName}
console.log(fullName2);