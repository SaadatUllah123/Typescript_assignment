//   test 1 equality with string true
console.log("test 1 equality with string true: ", ("honda" as string) === "honda");

//   test 1 equality with string false
console.log("test  1 equality with string false: ", ("honda" as string) === "toyota");

//   test 1 inequality with string true
console.log("test 1 inequality with string true: ", ("honda" as string) !== "toyota");

//   test 1 inequality with string false
console.log("test 1 inequality with string false: ", ("honda" as string) !== "honda");

// test 2 lower case function true
console.log("test 2 lower case functionc true: ", "HONDA".toLowerCase() === "honda");


// test 2 lower case function false
console.log("test 2 lower case function false: ", "honda".toUpperCase() === "honda");

//   test 3 equality with number true
console.log("test 3 equality with number true: ", 12 === 12);

//   test 3 equality with number false
console.log("test 3 equality with number false: ", (12 as number) === 15);

//   test 3 inequality with number true
console.log("test 3 inequality with number true: ", (15 as number) !== 12);

//   test 3 inequality with number false
console.log("test 3 inequality with number false: ", 15 !== 15);

// test 4 greater than true
console.log("test 4 greater than true: ", 10>8);

// test 4 greater than false
console.log("test 4 greater than false: ", 15>20);

// test 4 less than true
console.log("test 4 less than true: ", 15<16);

// test 4 less than false
console.log("test 4 less than false: ", 10<8);


// test 4 greater than or equal to true
console.log("test 4 greater than  or equal to true: ", 10>=10);

// test 4 greater than or equal to false
console.log("test 4 greater than or equal to false: ", 10>=11);

// test 4 less than or equal to true
console.log("test 4 less than or equal to true: ", 10<=11);

// test 4 less than or equal to false
console.log("test 4 less than or equal to false: ", 10<=8);

// test 5 and operator true
console.log("test 5 and operator true:", 20>15 && 50<70);


// test 5 and operator false
console.log("test 5 and operator false:", 18>20 && 25<70);


// test 5 or operator true
console.log("test 5 or operator true:", 18>20 || 25<70);


// test 5 or operator false
console.log("test 5 or operator false:", 18>20 || 50<30);

// Test 6 an item is in a array true
let countries : string[] = ["pakistan","usa","uk","turkey"];
console.log("Test 6 'pakistran' is in a array true", countries.includes("pakistan"));

// Test 7 an item is not in a array true
console.log("Test 7 'germany' is not in a array true", !countries.includes('germany'));