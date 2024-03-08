function show_magicians(magicians : string[]):void{
    for(let i:number=0; i<magicians.length; i++){
        console.log(magicians[i]);
    };
};

function make_great(magicians:string[]):void{
    for(let i:number=0; i<magicians.length; i++){
       magicians[i] = ` the great ${magicians[i]} `;
    };
    
}

let magiciansName :string[] = ["nematullah","m.sajjad","bilal"];
make_great(magiciansName);
show_magicians(magiciansName);

