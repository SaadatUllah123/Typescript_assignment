let guest_List : string[] = ["nematullah","m.sajjad","bilal"];

for(let i:number=0; i<guest_List.length; i++){
    console.log(`Dear ${guest_List[i]} you are invited to the dinner.\n`);
    
}

let guest_cant_Makeit : string = "m.sajjad";
let new_guest :string = "sadaqat";

for(let i:number=0; i<guest_List.length; i++){
    if(guest_List[i] === "m.sajjad"){
        guest_List[i] = new_guest;
    }
    console.log(`Dear ${guest_List[i]} you are invited to the dinner.\n`);
}
console.log(new_guest + "can't make it to the dinner.\n thank you" );

