interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any;
};

function aboutCar(manufacturer: string, model: string, ...addProperties: [string, any][]): Car {
  const car: Car = { 
    manufacturer,
    model,
  };
  addProperties.forEach(([key, value]) => {
    car[key] = value;
  });
  return car;
};

const myCar = aboutCar('honda', 'mazda',['color','black'],['year', 2003]);
console.log(myCar);
