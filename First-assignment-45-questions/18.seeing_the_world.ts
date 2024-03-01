let places_visit : string[] = ["Islamabad","Paris","London","Washington","Ankara"];

console.log("original order: " + places_visit);

console.log("alphabetical order : " + [...places_visit].sort());

console.log("original order still : " + places_visit);

console.log("reverse alphabetical order: " + [...places_visit].sort().reverse());

console.log("original order still (it again): " + places_visit);

places_visit.reverse();
console.log("reverse original order: " + places_visit);

places_visit.reverse();
console.log("it's again reverse original order: " + places_visit);

places_visit.sort();
console.log("alphabetical order: " + places_visit);

places_visit.reverse();
console.log("reverse alphabetical order: " + places_visit);








