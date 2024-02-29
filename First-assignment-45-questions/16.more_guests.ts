let guest_List : string[] = ["nematullah","m.sajjad","bilal"];

for(let i:number=0; i<guest_List.length; i++){
    console.log(`"Dear ${guest_List[i]} you are invited to the dinner."\n`);
}

guest_List.unshift("saadatullah");
guest_List.splice(2,0,"tahir");
guest_List.push("sadaqat");

for(let i:number=0; i<guest_List.length; i++){
    console.log(`Dear ${guest_List[i]} you are invited to the dinner.\n`);
    
}