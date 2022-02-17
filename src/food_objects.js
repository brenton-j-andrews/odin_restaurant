// This script holds the objects associated with each menu item. Each object has a dish name, photo file path, description and image source.
let foodArr = [];

class Dish {
    constructor(type, name, image_url, description) {
        this.type = type;
        this.name = name;
        this.image_url = image_url;
        this.description = description;
    }
}

const app_1 = new Dish("App", "Nachos", "../src/assets/pictures/apps/nachos.jpeg", "A classic appitizer");
const app_2 = new Dish("App", "Satay", "../src/assets/pictures/apps/satay.jpeg", "Flavorful chicken skewers served with a peanut dipping sauce.");
const app_3 = new Dish("App", "Blooming Onion", "../src/assets/pictures/apps/blooming_onion.jpeg", "An appitizer for the health conscious. One serving of veggies!");

const entree_1 = new Dish("Entree", "Hainanese Chicken Rice", "../src/assets/pictures/entrees/chicken_rice.jpg", "The national dish of Singapore! It might sound like a minute rice flavour but it is so much more.")
const entree_2 = new Dish("Entree", "Chicken and Waffles", "../src/assets/pictures/entrees/chicken_waffles.jpeg", "Crispy fried chicken, fresh waffles, and maple syrup. Yummy!");
const entree_3 = new Dish("Entree", "Chili Crab", "../src/assets/pictures/entrees/chili_crab.jpg", "Another Singapore Classic!");
const entree_4 = new Dish("Entree", "Tacos al Pastor", "../src/assets/pictures/entrees/tacos.jpeg", "Who doesn't like tacos?");
const entree_5 = new Dish("Entree", "Quesadilla", "../src/assets/pictures/entrees/quesadilla.jpeg", "We also have quesadillas!");
const entree_6 = new Dish("Entree", "BBQ Plate", "../src/assets/pictures/entrees/bbq.jpeg", "A delicious plate of Texas(?) barbeque.")

const dessert_1 = new Dish("Dessert", "Fried Ice Cream", "../src/assets/pictures/dessert/fried_ice_cream.jpeg", "A really good dessert. Get it!");
const dessert_2 = new Dish("Dessert", "Chocolate Lava Cake", "../src/assets/pictures/dessert/cake.jpeg", "A chocolate cake filled with more chocolate!");
const dessert_3 = new Dish("Dessert", "Baklava", "../src/assets/pictures/dessert/baklava.jpeg", "Crispy phyllo pastry filled with pistachio and a sweet honey syrup.");

foodArr.push(app_1, app_2, app_3, entree_1, entree_2, entree_3, entree_4, entree_5, entree_6, dessert_1, dessert_2, dessert_3);

export default foodArr;