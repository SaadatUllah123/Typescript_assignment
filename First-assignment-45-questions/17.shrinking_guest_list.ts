// start question 16

let guest_List : string[] = ["nematullah","m.sajjad","bilal"];

// for(let i:number=0; i<guest_List.length; i++){
//     console.log(`"Dear ${guest_List[i]} you are invited to the dinner."\n`);
// }

guest_List.unshift("saadatullah");
guest_List.splice(2,0,"tahir");
guest_List.push("sadaqat");

// for(let i:number=0; i<guest_List.length; i++){
//     console.log(`Dear ${guest_List[i]} you are invited to the dinner.\n`);
    
// }

// start question 17

console.log("you can invite only two people for dinner.\n");

while(2<guest_List.length){
    let remove_guest = guest_List.pop();
    console.log(`sorry ${remove_guest} you can't invite them to dinner.\n`);
};

for(let i:number=0; i<guest_List.length; i++){
    console.log(`Dear ${guest_List[i]} still invited to the dinner.\n`);
};

guest_List.splice(0,2);

console.log(guest_List);



