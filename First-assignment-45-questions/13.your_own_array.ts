let favorite_Mode : string[] = ["toyota","corolla","mercedes","ferrari","prado"];

for(let i:number=0; i<favorite_Mode.length; i++){
    if(favorite_Mode[i]==="mercedes"){
        console.log(`“I would like to own a ${favorite_Mode[i]} car.”`);
    }else{
        console.log(favorite_Mode[i]);
    }
}