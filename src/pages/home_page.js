import MyImage from "../assets/pictures/entrees/chicken_rice.jpg";
import foodObjectArr from "../food_objects";
import contactPage from "./contact_page";

// Create the main page content -> "About" paragraph and special of the day!
const homePage = function() {
    const home_contents = document.querySelector("main");
    home_contents.innerHTML = "";
    home_contents.className = "main-section-wrapper";

    // "Special of the day" content wrapper.
    const daily_special_wrapper = document.createElement("div");
    daily_special_wrapper.className = "special-wrapper";

    // Daily special header.
    const daily_special_title = document.createElement("p");
    daily_special_title.className = "daily-special-title";
    daily_special_title.textContent = `Special of the day: ${foodObjectArr[3].name}`;
    daily_special_wrapper.appendChild(daily_special_title);


    // Daily special lower div...
    const daily_special_lower = document.createElement("div");
    daily_special_lower.className = "daily-special-lower";


    // Daily special image.
    const special_of_the_day = document.createElement("img");
    special_of_the_day.src = foodObjectArr[3].image_url;
    daily_special_lower.appendChild(special_of_the_day);

    // Daily special description.
    const daily_special_description = document.createElement("p");
    daily_special_description.className = "daily-special-paragraph";
    daily_special_description.textContent = foodObjectArr[3].description;
    daily_special_lower.appendChild(daily_special_description);

    daily_special_wrapper.appendChild(daily_special_lower);


    // "About Us" section styling.
    const about_wrapper = document.createElement("div");
    about_wrapper.className = "about-wrapper";

    // About Us header.
    const about_us_title = document.createElement("p");
    about_us_title.className = "about-us-title";
    about_us_title.textContent = `About Us:`;
    about_wrapper.appendChild(about_us_title);

    //  "About Us" paragraph and box.
    const about_inner_wrapper = document.createElement("div");
    about_inner_wrapper.className = "about-inner-wrapper";
    about_wrapper.appendChild(about_inner_wrapper);
    
    const about_paragraph = document.createElement("p");
    about_paragraph.className = "about-paragraph";
    about_paragraph.textContent = "Some people say that the sign of a good restaurant is a small menu focused on one particular style of food. They are probably correct, but that is alright because this isn't a real restaurant! The menu here is just a bunch of my favorite foods."
    about_inner_wrapper.appendChild(about_paragraph);

    home_contents.appendChild(daily_special_wrapper);
    home_contents.appendChild(about_wrapper);
}

export default homePage;