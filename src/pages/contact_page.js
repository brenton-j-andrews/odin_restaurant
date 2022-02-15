// Create the main page content -> "About" paragraph and special of the day!
const contactPage = function() {
    const contact_contents = document.querySelector("main");
    contact_contents.innerHTML = "";
    contact_contents.textContent = "hello from the contact page!"; 
}


export default contactPage;