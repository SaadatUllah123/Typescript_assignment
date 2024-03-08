function sandwiches(...items : string[]):void{
    console.log("'sandwich summary'");
    for(let i:number=0; i<items.length; i++){
        console.log(items[i]);   
    };
};

sandwiches("chicken","jelly","tomato");
sandwiches("beef","garlic chicken","ham");
sandwiches("cheese","mayoniese","peanut butter")