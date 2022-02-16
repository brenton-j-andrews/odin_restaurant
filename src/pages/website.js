import homePage from "./home_page";
import menuPage from "./menu_page";
import contactPage from "./contact_page";

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
        homePage();
    });


    const menu_btn = document.createElement("button");
    menu_btn.className = "nav-btn";
    menu_btn.textContent = "Menu";

    menu_btn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        activeButton(e);
        menuPage();
    });


    const contact_btn = document.createElement("button");
    contact_btn.className = "nav-btn";
    contact_btn.textContent = "Contact Us";

    contact_btn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        activeButton(e);
        contactPage();
    });

    nav_bar_btns.appendChild(home_btn);
    nav_bar_btns.appendChild(menu_btn);
    nav_bar_btns.appendChild(contact_btn);
}

// Information bar -> contains "click to order" time sensitive button, embedded map, contact info and hours.
const informationBar = function(content) {
    const information_bar_wrapper = document.createElement("div");
    information_bar_wrapper.className = "information-bar-wrapper";

    const order_div = document.createElement("div");
    order_div.className = "order-div";
    information_bar_wrapper.appendChild(order_div);
    
    const order_div_title = document.createElement("div");
    order_div_title.className = "order-div-title";

    const order_btn = document.createElement("button");
    order_btn.className = "order-btn";

    // Time check!
    let current_hour = new Date().getHours() + 2;
    if (11 <= current_hour && current_hour < 20) {
        order_div_title.textContent = "We are open!"
        order_btn.textContent = "Order Now";
    } else {
        order_div_title.textContent = "We are closed. Sorry!"
        order_btn.textContent = "Order Tomorrow!";
    }

    order_div.appendChild(order_div_title);
    order_div.appendChild(order_btn);


    const map_wrapper = document.createElement("div");
    map_wrapper.className = "map-wrapper";
   
    const embedded_map = document.createElement("iframe");
    embedded_map.src = "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d738.3155151085128!2d-71.7925368!3d42.2515759!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1645024420249!5m2!1sen!2sus";
    embedded_map.className = "embedded-map";
    map_wrapper.appendChild(embedded_map);
    information_bar_wrapper.appendChild(map_wrapper);


    const contact_info = document.createElement("div");
    contact_info.className = "contact-info";
    contact_info.textContent = "Hours";


    const hours1 = document.createElement("p");
    hours1.textContent = "11:00 - 22:00 Monday - Friday";
    contact_info.appendChild(hours1);

    const hours2 = document.createElement("p");
    hours2.textContent = "12:00 - 23:00 Weekends";
    contact_info.appendChild(hours2);

    const address1 = document.createElement("p");
    address1.textContent = "1054 Somewhere Street";
    contact_info.appendChild(address1);

    const address2 = document.createElement("p");
    address2.textContent = "Worcestor, MA 01601";
    contact_info.appendChild(address2);

    const phone_number = document.createElement("p");
    phone_number .textContent = "508-XXX-YYYY";
    contact_info.appendChild(phone_number);


    information_bar_wrapper.appendChild(contact_info);
    content.appendChild(information_bar_wrapper);


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

// "page_content" div reset. This div is where elements unique to each page are rendered.
const pageContentDiv = function(content) {
    const page_content = document.createElement("main");
    content.appendChild(page_content);
}

const siteContents = function() {
    const content = document.querySelector("#content");
    createNavBar(content);
    pageContentDiv(content);
    homePage();
    informationBar(content);
}

export default siteContents;
