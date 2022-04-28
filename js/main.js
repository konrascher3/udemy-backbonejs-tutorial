const Vehicle = Backbone.Model.extend({
    idAttribute: "registrationNumber",
    urlRoot: "/api/vehicles",

    validate: function() {
        if(this.attributes.registrationNumber === undefined || this.attributes.registrationNumber === null) {
            return "Please provide a valid registration number!"
        }
    },

    start: function() {
        console.log(`Vehicle started!`)
    }
});

const Car = Vehicle.extend({
    start: function () {
        console.log(`Car with the registration number ${this.attributes.registrationNumber} started!`)
    }
});

const car = new Car({
    registrationNumber: "XLI887",
    color: "Blue"
})

if(!car.isValid()) {
    console.log(car.validationError)
} else {
    car.start()
}

// Models

// Create Vehicles collection based on the vehicle method
const Vehicles = Backbone.Collection.extend({
    model: Vehicle
})

// Add cars inside the Vehicles collection

//// Instantiate new Vehicle collection
const vehicles = new Vehicles()

//// Add new vehicle models to vehicle collection
vehicles.add(new Vehicle({ registrationNumber: "XLI887", color: "Blue" }));
vehicles.add(new Vehicle({ registrationNumber: "ZNP123", color: "Blue" }));
vehicles.add(new Vehicle({ registrationNumber: "XUV456", color: "Gray" }));

// Find all blue cars inside the collection
const blueCars = vehicles.where({ color: "Blue" });
console.log(blueCars)

// Find the car with the registration number XLI887
const specificCar = vehicles.findWhere({ registrationNumber: "XLI887" });
console.log(specificCar.toJSON())

// Remove the car with the registration number XLI887
vehicles.remove(specificCar)

// Convert the collection to a JSON object and log it in the console.
console.log(vehicles.toJSON())

// Iterate the collection and log each car in the console.
for (let i = 0; i < vehicles.length; i++) {
    console.log(vehicles.at(i).toJSON())
}
