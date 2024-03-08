function show_magicians(magicians : string[]):void{
    for(let i:number=0; i<magicians.length; i++){
        console.log(magicians[i]);
    };
};

function make_great(magicians:string[]):string[]{
    let greatMagicians : string[] =[];
    for(let i:number=0; i<magicians.length; i++){
       greatMagicians.push(`the great ${magicians[i]}`);
    };
    return greatMagicians
};

let magiciansName :string[] = ["nematullah","m.sajjad","bilal"];
let magiciansNamecopy = make_great(magiciansName);
show_magicians(magiciansName);
show_magicians(magiciansNamecopy);





