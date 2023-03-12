//object literal
//create pets using objectliteral
let petSalon = {
    name: "The Fashion Pet",
    address: {
        city: "Chula Vista",
        street: "3rd Ave.",
        zip: "91910"
    },
    hours: {
        open: "9:00 am",
        close: "7:00 pm"
    },
    pets:[

    ]
}

//object constructor
function Pet(n, a, g, s, o, p) {
    this.name = n;
    this.age = a;
    this.gender = g;
    this.services = s;
    this.owner = o;
    this.phone = p;

}

 //get the values from the inputs
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputService = document.getElementById("txtService");
let inputOwner = document.getElementById("txtOwner");
let inputPhone = document.getElementById("txtPhone");

//register function
function register() {
    console.log("registered");
    //create the newPet
    let newPet = new Pet(inputName.value, inputAge.value, inputGender.value, inputService.value, inputOwner.value, inputPhone.value);

    console.log(newPet);
    //push the newPet obj into the array
    petSalon.pets.push(newPet);
    //display the pets into the array
    console.log(petSalon.pets);
    //clear the form
    clearForm();
}

//clearForm function
function clearForm(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputService.value="";
    inputOwner.value="";
    inputPhone.value="";
}

//init function
function init(){
    console.log("init");
    let pet1 = new Pet("Scooby", 60, "Male", "Grooming", "Shaggy", 6197795656);
    let pet2 = new Pet("Scrappy", 200, "Male", "Pampering", "Shaggy", 6197795656);
    petSalon.pets.push(pet1, pet2);
    
}
window.onload=init;



