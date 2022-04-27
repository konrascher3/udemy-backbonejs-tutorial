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
