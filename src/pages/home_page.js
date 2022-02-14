import MyImage from "../assets/pictures/chicken_rice.jpg";

// Create the nav bar!
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
    home_btn.textContent = "Home";


    const menu_btn = document.createElement("button");
    menu_btn.textContent = "Menu";

    const contact_btn = document.createElement("button");
    contact_btn.textContent = "Contact Us";


    nav_bar_btns.appendChild(home_btn);
    nav_bar_btns.appendChild(menu_btn);
    nav_bar_btns.appendChild(contact_btn);
}


// Create the main page content -> "About" paragraph and special of the day!
const createMainSection = function(content) {
    const main_section = document.createElement("div");
    const special_of_the_day = document.createElement("img");
    special_of_the_day.src = MyImage;
    special_of_the_day.className = "special-of-the-day-img";

    main_section.className = "main-section-wrapper";
    main_section.appendChild(special_of_the_day);
    

    // main_section.append(special_of_the_day);
    content.appendChild(main_section);

}

function homePage() {
    const content = document.querySelector("#content");
    createNavBar(content);
    createMainSection(content);
}

export default homePage;