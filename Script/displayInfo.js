
document.getElementById.innerHTML("petsDisplay").innerHTML = `<h1 class="counter">We currently have ${petSalon.pets.length} pets with us.</h1>`;

console.log(petSalon.pets.length);

function displayLoc() {
    alert(`${petSalon.address.street}, ${petSalon.address.city} ${petSalon.address.zip}`);
}
function displayHours() {
    alert(`${petSalon.hours.open} - ${petSalon.hours.close}`);
}

function displayInfo() {
    //printing dog names to console
    for(let i = 0; i < petSalon.pets.length; i++){
        console.log(petSalon.pets[i].name);
    }
    //printing info on all dogs to the page.
    for(let i = 0; i < petSalon.pets.length; i++){
        document.getElementById("info").innerHTML = `<div class="dogInfo">
            <img src="img/doggy.png" alt="dog-pic" width=150 height=100>
            <ul>
                <li>My name is <b>${petSalon.pets[i].name}</b></li>
                <li>I am ${petSalon.pets[i].age} years old.</li>
                <li>I am a ${petSalon.pets[i].gender}</li>
                <li>I'm here for ${petSalon.pets[i].service}</li>
                <li>My human's name is ${petSalon.pets[i].owner}</li>
                <li>Our contact number is ${petSalon.pets[i].phone}</li>
            </ul>
        </div>`;
    }
    
}
