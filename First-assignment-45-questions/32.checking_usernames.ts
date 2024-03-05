let current_users : string[] = ["nematullah","m.sajjad","sadaqat","bilal","tahir"];
let new_users :string[] = ["sir zia","sir qasim","m.sajjad","sohail","bilal"];

for(let n_u :number=0; n_u<new_users.length; n_u++){
    let new_username : boolean = false;
    for(let c_u :number=0; c_u<current_users.length; c_u++){
        if(new_users[n_u].toLowerCase() === current_users[c_u].toLowerCase()){
        new_username = true;
        };
    };
    if(new_username){
        console.log(`already exists ${new_users[n_u]} please enter a new username.`);
    }else{
        console.log(`username ${new_users[n_u]} is available.`)
    };
};