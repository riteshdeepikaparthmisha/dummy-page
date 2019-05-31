let multiply =(x,y)=>{
    return x*y;
}

let setAddress =(userID,...address)=>{
    
  alert(userID);
  alert(address);
  console.log(userID)
  console.log(address);
  console.log(userID+" "+address);

}
let userid=1;
let address="Ahmedabad"
let address1="Jaipur"
setAddress(userid,address,address1);


let sum =(a,b,c)=>{
    return a+b+c;

}

let num   =[3,4,5];
sum(...num);
