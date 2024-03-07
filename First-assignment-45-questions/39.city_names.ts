function city_country(city :string, country :string = "pakistan"){
    return `${city},${country}`
};


let firstCall:string = city_country("lahore");
let secondCall: string = city_country("london","united kingdom");
let thirdCall : string = city_country("newyork", "usa");

console.log(firstCall);
console.log(secondCall);
console.log(thirdCall);



