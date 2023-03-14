

function displayPetCards(){
    //get the DIV for the html element
    const DIV = document.getElementById("pets");

    //travel in the array
    let card = "";
    for(let i = 0; i < petSalon.pets.length; i++){
        let pet = petSalon.pets[i];

        card += `
        <div class="pet">
        
            <img src="img/doggy.png" alt="dog-pic" width= "75" height = "50">
            <h5>${pet.name}</h5>
            <p>Age: ${pet.age}</p>
            <p>Service: ${pet.services}</p>
            
        </div>

        `
        console.log(card);
    }

    DIV.innerHTML=card;
    

}