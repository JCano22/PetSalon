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
let petID=0;
//object constructor
function Pet(n, a, g, s, o, p,f) {
    this.name = n;
    this.age = a;
    this.gender = g;
    this.services = s;
    this.owner = o;
    this.phone = p;
    this.id = petID++;
    this.friendly = f;

}

 //get the values from the inputs
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputService = document.getElementById("txtService");
let inputOwner = document.getElementById("txtOwner");
let inputPhone = document.getElementById("txtPhone");
let inputFriendly = document.getElementById("friendly");

//validation function
function isValid(aPet) {
    let valid = true;
    if(aPet.name ===""){
        valid = false;
        inputName.classList.add("input-alert-error");
    }
    if(aPet.services ===""){
        valid = false;
        inputService.classList.add("input-alert-error");
    }
    if(aPet.gender ===""){
        valid = false;
        inputGender.classList.add("input-alert-error");
    }
    if(aPet.age ===""){
        valid = false;
        inputAge.classList.add("input-alert-error");
    }
    // if(aPet.owner ===""){
    //     valid = false;
    //     inputOwner.classList.add("input-alert-error");
    // }
    // if(aPet.phone ===""){
    //     valid = false;
    //     inputPhone.classList.add("input-alert-error");
    // }
    if(!valid){
        alert("Please fill out all the input fields.")
    }
    
    console.log(valid);
    return valid;
    
}
//register function
function register() {
    
    //create the newPet
    let newPet = new Pet(inputName.value, inputAge.value, inputGender.value, inputService.value, inputOwner.value, inputPhone.value, inputFriendly.value);

    if(isValid(newPet)=== true){
        console.log("registered");
        console.log(newPet);
        //push the newPet obj into the array
        petSalon.pets.push(newPet);
        //display the pets into the array
        console.log(petSalon.pets);
        updateInfo();
        displayPetTable();
        //clear the form
        clearForm();
        
    }
}

function updateInfo(){
    document.getElementById("counter").innerHTML = `<h3>We currently have ${petSalon.pets.length} pets registered with us.</h3>`;
}

function deletePet(id){
    console.log("Deleting the pet", id);
    let petIndex;
    //for loop to find and delete element by id
    for(let i = 0; i < petSalon.pets.length; i++){
        let pet = petSalon.pets[i];

        if(pet.id == id){
            petIndex = i;
        }
    }
    petSalon.pets.splice(petIndex, 1);

    document.getElementById(id).remove();
    updateInfo();
}

//clearForm function
function clearForm(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputService.value="";
    inputOwner.value="";
    inputPhone.value="";
    inputFriendly.checked = false;
}

//init function
function init(){
    console.log("init");
    let pet1 = new Pet("Scooby", 60, "Male", "Grooming", "Shaggy", 6197795656);
    let pet2 = new Pet("Scrappy", 200, "Male", "Pampering", "Shaggy", 6197795656);
    petSalon.pets.push(pet1, pet2);
    updateInfo();
    displayPetTable();
    
}
window.onload=init;



