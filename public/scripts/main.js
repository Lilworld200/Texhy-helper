import { LoadFireBaseConfig } from "./config/Firebase.js";
import HomePage from "./pages/Homepage.js";
console.log("hello Daniel");
const auth = LoadFireBaseConfig();

const menuButton = document.querySelector(".js-menu-button");

function toggleMenu() {
	const wrapper = document.querySelector(".route-wrapper");
	wrapper.classList.toggle("active");

	if (wrapper.classList.contains("active")) {
		menuButton.children[0].src = "./assets/icons/exit-outline.svg";
	} else {
		menuButton.children[0].src = "./assets/icons/hamburger.svg";
	}
}

HomePage(auth);
menuButton.addEventListener("click", toggleMenu);
