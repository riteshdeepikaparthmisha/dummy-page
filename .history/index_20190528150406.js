let firstName="Ritesh";
let lastName ="Parekh";

let fullName ={firstName,lastName};
console.log(fullName);


let setAddress =(id,...userAddress)=>{
    console.log(userAddress);
}

let address1="Jaipur"
let address2="Ahmedabad"
let id=1;
setAddress(id,address1,address2)


let AddNumbers =(x,y,z)=> {
    console.log("x is: "+x);
    console.log("y is: "+y);
    console.log("z is: "+z);    
}
let myNumbers =[1,2,3]
AddNumbers(myNumbers);



console.log(cityName);
//let cityName="Pune";