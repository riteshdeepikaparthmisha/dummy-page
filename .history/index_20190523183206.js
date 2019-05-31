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

//template literal
let fname="Ritesh"
let lname="Parekh";

let funame = `${fname} - ${lname}`;
console.log(funame);


let AllAddress =(userID,...userAddess) =>{
    console.log(userID);
    console.log(userAddess);
}
AllAddress(1,"Ahmedabad","Jaipur");
