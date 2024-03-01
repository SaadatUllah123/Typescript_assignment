interface student_Data {
    name : string,
    f_name : string,
    age : number,
    roll_No :number,
    course : string
}

let student_Data : student_Data = {
    name: "saadatullah",
    f_name: "javed gul",
    age: 19,
    roll_No: 11258,
    course: "typescript"
}

console.log(student_Data.name);
console.log(student_Data.f_name);
console.log(student_Data.age);
console.log(student_Data.roll_No);
console.log(student_Data.course);
