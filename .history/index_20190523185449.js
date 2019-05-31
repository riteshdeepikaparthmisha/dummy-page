let setAddress =(...address)=>{
    console.log(address.length);
    console.log(address);
}

let address1="Malviya Nagar Jaipur";
let address2="Bodakdev Ahmedabad";
let address3="Pune";
setAddress(address1,address2,address3);

let getSumAddress =(x,y)=>{
    console.log(x)
    console.log(y)
    
}

let num =[3,2]
getSumAddress(...num);