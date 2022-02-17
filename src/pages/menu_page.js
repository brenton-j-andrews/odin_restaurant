import createNavBar from "./website";
import foodArr from "../food_objects";

function menuPage() {
    const menu_contents = document.querySelector("main");
    menu_contents.innerHTML = "";
    menu_contents.className = "menu-contents-wrapper";

    const appitizers_title = document.createElement("p");
    appitizers_title.className = "menu-title";
    appitizers_title.textContent = "Appitizers:";
    menu_contents.appendChild(appitizers_title);


    const appitizers_wrapper = document.createElement("div");
    appitizers_wrapper.className = "appitiziers-wrapper menu-section";
    menu_contents.appendChild(appitizers_wrapper);

    const entrees_title = document.createElement("p");
    entrees_title.className = "menu-title";
    entrees_title.textContent = "Entrees:";
    menu_contents.appendChild(entrees_title);

    const entrees_wrapper = document.createElement("div");
    entrees_wrapper.className = "entrees-wrapper menu-section";
    menu_contents.appendChild(entrees_wrapper);

    const desserts_title = document.createElement("p");
    desserts_title.className = "menu-title";
    desserts_title.textContent = "Desserts:";
    menu_contents.appendChild(desserts_title);

    const desserts_wrapper = document.createElement("div");
    desserts_wrapper.className = "desserts-wrapper menu-section";
    menu_contents.appendChild(desserts_wrapper);


    for (let i = 0; i < foodArr.length; i++) {
        const food_container = document.createElement("div");
        food_container.className = "food-container";

        const dish_title = document.createElement("p");
        dish_title.textContent = foodArr[i].name;
        dish_title.className = "dish-title";

        const image = document.createElement("img");
        image.className = "food-img";
        image.src = foodArr[i].image_url;

        const description = document.createElement("p");
        description.className = "food-description";
        description.textContent = foodArr[i].description;

        food_container.appendChild(dish_title);
        food_container.appendChild(image);
        food_container.appendChild(description);
        
        if (foodArr[i].type === "App") {
            appitizers_wrapper.appendChild(food_container);
        } 
        
        if (foodArr[i].type === "Entree") {
            entrees_wrapper.appendChild(food_container);
        } 
        
        if (foodArr[i].type === "Dessert") {
            desserts_wrapper.appendChild(food_container);
        }
    }
}

export default menuPage;