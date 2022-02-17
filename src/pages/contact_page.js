// Create the main page content -> "About" paragraph and special of the day!
const contactPage = function() {
    const contact_contents = document.querySelector("main");
    contact_contents.innerHTML = "";
    contact_contents.textContent = "Hello from the contact page! Since all the contact info is pasted to the bottom of each page, this page is redundent!"; 
}


export default contactPage;