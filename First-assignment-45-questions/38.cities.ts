function describe_city(city :string, country : string = "pakistan"):void{
    console.log(`${city} is in ${country}`);
};


describe_city("karachi");
describe_city("london","united kingdom");
describe_city("newyork", "usa");
describe_city("lahore");
