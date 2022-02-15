import MyImage from "../assets/pictures/chicken_rice.jpg";
import createNavBar from "./website";


// Create the main page content -> "About" paragraph and special of the day!
const homePage = function(content) {
    const main_section = document.createElement("div");
    const special_of_the_day = document.createElement("img");
    special_of_the_day.src = MyImage;
    special_of_the_day.className = "special-of-the-day-img";

    main_section.className = "main-section-wrapper";
    main_section.appendChild(special_of_the_day);
    

    // main_section.append(special_of_the_day);
    content.appendChild(main_section);

}


export default homePage;