import homePage from "./home_page";
import menuPage from "./menu_page";

// Create the nav bar.
const createNavBar = function(content) {
    const nav_bar = document.createElement("nav");
    nav_bar.className = "nav-bar";
    content.appendChild(nav_bar);

    // Page Title
    const title = document.createElement("div");
    title.textContent = "Favorite Foods Eatery";
    title.className = "home_page_title";
    nav_bar.appendChild(title);
 
    // Nav bar button section.
    const nav_bar_btns = document.createElement("div");
    nav_bar_btns.className = "nav-bar-btns";
    nav_bar.appendChild(nav_bar_btns);

    // Nav Bar button elements
    const home_btn = document.createElement("button");
    home_btn.className = "nav-btn active";
    home_btn.textContent = "Home";

    home_btn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        activeButton(e);
    });


    const menu_btn = document.createElement("button");
    menu_btn.className = "nav-btn";
    menu_btn.textContent = "Menu";

    menu_btn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        activeButton(e);
    });


    const contact_btn = document.createElement("button");
    contact_btn.className = "nav-btn";
    contact_btn.textContent = "Contact Us";

    contact_btn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        activeButton(e);
    });



    nav_bar_btns.appendChild(home_btn);
    nav_bar_btns.appendChild(menu_btn);
    nav_bar_btns.appendChild(contact_btn);
}

// Add "active" class to the button who's page is open. Remove "active" from other page buttons.
const activeButton = function(button) {
    const buttons = document.querySelectorAll(".nav-btn");
    
    buttons.forEach(button => {
        if (button !== this) {
            button.classList.remove("active");
        }
    });
    button.target.classList.add("active");
}



const siteContents = function() {
    const content = document.querySelector("#content");
    createNavBar(content);
}

export default siteContents;
