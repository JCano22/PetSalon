document.getElementById('pets').innerHTML = `<h1 class="counter">We currently have ${petSalon.pets.length} pets with us.</h1>`;

function displayLoc() {
    alert(`${petSalon.address.street}, ${petSalon.address.city} ${petSalon.address.zip}`);
}
function displayHours() {
    alert(`${petSalon.hours.open} - ${petSalon.hours.close}`);
}

function displayInfo() {
    for(let i = 0; i < petSalon.pets.length; i++){
        console.log(petSalon.pets[i].name);
    }
    document.getElementById("guests1").innerHTML = `<div class=dogInfo">
    <img src="img/doggy.png" alt="dog-pic" width=150 height=100>
    <ul>
    <li>My name is <b>${petSalon.pets[0].name}</b></li>
    <li>I am ${petSalon.pets[0].age} years old.</li>
    <li>I am a ${petSalon.pets[0].gender}</li>
    <li>I'm here for ${petSalon.pets[0].service}</li>
    </ul>
    </div>`;

    document.getElementById("guests2").innerHTML = `<div class=dogInfo">
    <img src="img/doggy.png" alt="dog-pic" width=150 height=100>
    <ul>
    <li>My name is <b>${petSalon.pets[1].name}</b></li>
    <li>I am ${petSalon.pets[1].age} years old.</li>
    <li>I am a ${petSalon.pets[1].gender}</li>
    <li>I'm here for ${petSalon.pets[1].service}</li>
    </ul>
    </div>`;

    document.getElementById("guests3").innerHTML = `<div class=dogInfo">
    <img src="img/doggy.png" alt="dog-pic" width=150 height=100>
    <ul>
    <li>My name is <b>${petSalon.pets[2].name}</b></li>
    <li>I am ${petSalon.pets[2].age} years old.</li>
    <li>I am a ${petSalon.pets[2].gender}</li>
    <li>I'm here for ${petSalon.pets[2].service}</li>
    </ul>
    </div>`;
}

function displayInfo2() {
    for(let i = 0; i < petSalon.pets.length; i++){
        console.log(petSalon.pets[i].name);
    }
    document.getElementById("info").innerHTML= `<h4>Too bad!</h4>`;
    document.getElementById("guests1").innerHTML = `<div class=dogInfo">
    <img src="img/doggy.png" alt="dog-pic" width=150 height=100>
    <ul>
    <li>My name is ${petSalon.pets[0].name}</li>
    <li>I am ${petSalon.pets[0].age} years old.</li>
    <li>I am a ${petSalon.pets[0].gender}</li>
    <li>I'm here for ${petSalon.pets[0].service}</li>
    </ul>
    </div>`;

    document.getElementById("guests2").innerHTML = `<div class=dogInfo">
    <img src="img/doggy.png" alt="dog-pic" width=150 height=100>
    <ul>
    <li>My name is ${petSalon.pets[1].name}</li>
    <li>I am ${petSalon.pets[1].age} years old.</li>
    <li>I am a ${petSalon.pets[1].gender}</li>
    <li>I'm here for ${petSalon.pets[1].service}</li>
    </ul>
    </div>`;

    document.getElementById("guests3").innerHTML = `<div class=dogInfo">
    <img src="img/doggy.png" alt="dog-pic" width=150 height=100>
    <ul>
    <li>My name is ${petSalon.pets[2].name}</li>
    <li>I am ${petSalon.pets[2].age} years old.</li>
    <li>I am a ${petSalon.pets[2].gender}</li>
    <li>I'm here for ${petSalon.pets[2].service}</li>
    </ul>
    </div>`;
}