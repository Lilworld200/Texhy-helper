import CreateComponent from "../render/CreateComponent.js";

import CreateContainer from "../render/CreateContainer.js";

import validateCredentials from "../utility/checkEmailAndPassword.js";

import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

export default function HomePage(auth) {
	// body...
	const NewStackWrapper = new CreateContainer("section")
		.addAttribute("id", "createNewWrapper")
		.addStyle("padding", "10px 0")
		.render("main");

	const NewStackIcon = new CreateComponent("img")
		.addAttribute("src", "./assets/icons/add-outline.svg")
		.addClasses(["icon-a0"])
		.returnSelf();

	const NewStackButton = new CreateContainer("button")
		.render("#createNewWrapper")
		.renderChildren([NewStackIcon, "Create"])
		.addClasses(["bg-main-a0", "btn-a0", "glowingShadow"])
		.addStyle("width", "auto")
		.addListener("click", () => {
			console.log("working");
			if (!auth.currentUser) {
				renderAuthPage();
			}
		});

	function renderAuthPage() {
		const Content = `<label class="flex flex-col">
        email..
        <input type="text" /> </label>
      <label class="flex flex-col">
        password..
        <input type="text" />
      </label>
      `;
		const button = new CreateComponent("button")
			.addClasses(["bg-main-a10"])
			.addStyle("borderRadius", "4px")
			.addStyle("padding", "10px")
			.addText("Sign up")
			.returnSelf();

		const AuthPage = new CreateContainer("section")
			.addAttribute("id", "authPage")
			.addClasses(["wrapper-a0"])
			.render("main");

		console.log("testing o1");
		const AuthForm = new CreateContainer("form")
			.addClasses([
				"flex",
				"flex-col",
				"place-center",
				"auth-page",
				"rounded-sm",
				"glowingShadow",
				"bg-main-a0"
			])
			.render("#authPage")
			.addContent(Content)
			.addContent(button, true)
			.addListener("submit", e => {
				e.preventDefault();
				saveUser(e)
					.then(() => {
						AuthPage.removeSelf();
					})
					.catch(error => {
						console.error("error", error.message);
					});
			});
	}

	async function saveUser(e) {
		// body...
		const inputValue = e.target.querySelectorAll("input");
		const validateCred = validateCredentials(
			inputValue[0].value,
			inputValue[1].value
		);
		if (!validateCred) {
			throw new Error("invalid cred");
		}
		await createUserWithEmailAndPassword(
			auth,
			inputValue[0].value /*email address value*/,
			inputValue[1].value /*password value*/
		)
			.then(userCredential => {
				console.log("User created:", userCredential.user);
				alert("user has been created ");
				return true;
			})
			.catch(error => {
				throw error;
			});
	}
}
