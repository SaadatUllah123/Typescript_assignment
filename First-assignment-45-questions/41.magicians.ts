function show_magicians(magicians : string[]):void{
    for(let i:number=0; i<magicians.length; i++){
        console.log(magicians[i]);
    };
};

let magiciansName :string[] = ["nematullah","m.sajjad","bilal"];

show_magicians(magiciansName);
