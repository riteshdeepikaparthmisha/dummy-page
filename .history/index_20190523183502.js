//global variable
let firstName ="Ritesh";
let lastName = "Parekh";

//const 
const pi=3.14
pi=1.4;
console.log(pi);


//arrow function
let GetFullName = (firstName,lastName)=> {
    return firstName+ " " + lastName;
}
console.log(GetFullName(firstName,lastName));


//rest
let AllAddress =(userID,...userAddess) =>{
    console.log(userID);
    console.log(userAddess);
}
AllAddress(1,"Ahmedabad","Jaipur");

//spread
let Add= (x,y,z) =>{
    console.log(x);
    console.log(y);
    console.log(z);
}
let numbers= [3,4,5];
Add(...numbers);

//object literal
let fullName ={firstName,lastName}
console.log(fullName);

let fullName1 ={firstName:lastName}
console.log(fullName1);

let fullName2 ={[firstName]:lastName}
console.log(fullName2);

//template literal
let fname="Ritesh"
let lname="Parekh";

let funame = `${fname} - ${lname}`;
console.log(funame);



