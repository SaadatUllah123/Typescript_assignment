let numbers :number[] = [1,2,3,4,5,6,7,8,9];
let ordinal_num : string;
for(let i:number=0; i<numbers.length; i++){
    let num : number = numbers[i];
    if(num === 1){
        ordinal_num = "st"
    }else if(num  === 2){
        ordinal_num = "nd"
    }else if(num  === 3){
        ordinal_num = "rd"
    }else{
        ordinal_num = "th"
    };

console.log(`${num}${ordinal_num}`);

};

