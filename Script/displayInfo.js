document.getElementById("location").innerHTML = `
    <h2>Location</h2>
    <p class="aboutP">We are located in the heart of Downtown Chula Vista at ${petSalon.address.street}, ${petSalon.address.city} CA.
    <div class="google-map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.5920282701445!2d-117.08338968500284!3d32.643686281012414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d94dfdc3658853%3A0xb502a7bbbfcbb0e8!2s230%203rd%20Ave%2C%20Chula%20Vista%2C%20CA%2091910%2C%20USA!5e0!3m2!1sen!2smx!4v1678746270688!5m2!1sen!2smx" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
`;

document.getElementById("hoursOfOperation").innerHTML = `
    <h2>Hours</h2>
    <p>We are open Monday through Friday from: </p>
    <h3>${petSalon.hours.open} - ${petSalon.hours.close}</h3>
`;

