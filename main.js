const cars = [
    { brand: 'BMW', price: 135000 },
    { brand: 'Lamborghini', price: 300000 },
    { brand: 'Mercedes-Benz', price: 85000 },
    { brand: 'Audi', price: 120000 },
    { brand: 'Chevrolet', price: 75000 },
    { brand: 'Toyota', price: 65000},
    { brand: 'Ford', price: 55000 },
    { brand: 'Honda', price: 45000 },
    { brand: 'Ferrari', price: 400000 },
    { brand: 'Rolls Royce', price: 500000 }
  ];

const cheap = cars.filter((car) => car.price < 100000);
  
  console.log(cars);
  console.log(cheap);
  