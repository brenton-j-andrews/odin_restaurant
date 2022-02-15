import createNavBar from "./website";

function menuPage() {
    const menu_contents = document.querySelector("main");
    menu_contents.innerHTML = "";
    menu_contents.textContent = "hello?";
}

export default menuPage;