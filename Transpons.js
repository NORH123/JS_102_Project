class Vehicle {
    constructor(name, manufacturer, id) {
      this.name = name;
      this.manufacturer = manufacturer;
      this.id = id;
    }
  }
  
  class Car extends Vehicle {
    constructor(name, manufacturer, id, carType) {
      super(name, manufacturer, id);
      this.carType = carType;
    }
  }
  
  class Plane extends Vehicle {
    constructor(name, manufacturer, id, planeType) {
      super(name, manufacturer, id);
      this.planeType = planeType;
    }
  }
  
  class Employee {
    constructor(name, id, dateOfBirth) {
      this.name = name;
      this.id = id;
      this.dateOfBirth = dateOfBirth;
    }
  }
  
  class Driver extends Employee {
    constructor(name, id, dateOfBirth, licenseID) {
      super(name, id, dateOfBirth);
      this.licenseID = licenseID;
    }
  }
  
  class Pilot extends Employee {
    constructor(name, id, dateOfBirth, licenseID) {
      super(name, id, dateOfBirth);
      this.licenseID = licenseID;
    }
  }
  
  class Reservation {
    constructor(reservationDate, employeeId, vehicleId, reservationId) {
      this.reservationDate = reservationDate;
      this.employeeId = employeeId;
      this.vehicleId = vehicleId;
      this.reservationId = reservationId;
    }
  }
  
  // Create vehicle objects
  const car1 = new Car("Car 1", "Manufacturer 1", 1, "Gas");
  const car2 = new Car("Car 2", "Manufacturer 2", 2, "Electric");
  const car3 = new Car("Car 3", "Manufacturer 3", 3, "Gas");
  
  const plane1 = new Plane("Plane 1", "Manufacturer 4", 4, "Type 1");
  const plane2 = new Plane("Plane 2", "Manufacturer 5", 5, "Type 2");
  
  // Create employee objects
  const driver1 = new Driver("Driver 1", 1, "01/01/1990", "License 1");
  const driver2 = new Driver("Driver 2", 2, "02/02/1995", "License 2");
  const pilot1 = new Pilot("Pilot 1", 3, "03/03/1985", "License 3");
  
  // Create a reservation
  const reservation1 = new Reservation("11/20/2023", pilot1.id, plane1.id, 1);
  
  // Store reservations in an array
  const reservations = [reservation1];
  
 

// Function to check compatibility and create a reservation
function createReservation(employeeId, vehicleId) {
  const employee = pilot1.id === employeeId ? pilot1 : null;
  const vehicle = plane1.id === vehicleId ? plane1 : null;

  if (employee && vehicle) {
    const reservationId = reservations.length + 1;
    const reservationDate = new Date().toLocaleDateString();
    const reservation = new Reservation(reservationDate, employeeId, vehicleId, reservationId);
    reservations.push(reservation);
    console.log("Reservation created:", reservation);
  } else {
    console.log("Employee and vehicle are not compatible.");
  }
}

// Test the createReservation function
createReservation(pilot1.id, car1.id);
createReservation(pilot1.id, plane1.id);
console.log("Print the reservation list:");
// Print the content of the array using the map function
reservations.map((reservation) => {
  console.log(reservation);
});

// output
/*
Employee and vehicle are not compatible.
Reservation created: Reservation {
  reservationDate: '11/20/2023',
  employeeId: 3,
  vehicleId: 4,
  reservationId: 2
}
Print the reservation list:
Reservation {
  reservationDate: '11/20/2023',
  employeeId: 3,
  vehicleId: 4,
  reservationId: 1
}
Reservation {
  reservationDate: '11/20/2023',
  employeeId: 3,
  vehicleId: 4,
  reservationId: 2
}
*/