// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

export function LoadFireBaseConfig() {
	const firebaseConfig = {
		apiKey: "AIzaSyBxmhKTVEYbgYCPlNofUstMnXnwDeYDXis",
		authDomain: "lil-backend.firebaseapp.com",
		projectId: "lil-backend",
		storageBucket: "lil-backend.appspot.com",
		messagingSenderId: "438888446590",
		appId: "1:438888446590:web:54a76a19db063435e7b62f"
	};

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
	const auth = getAuth(app);
	return auth;
}

// Example usage
// const auth = LoadFireBaseConfig();
// createUserWithEmailAndPassword(
// 	auth,
// 	"danielfedelis2oo6@gmail.com",
// 	"Daniel2006#"
// )
// 	.then(userCredential => {
// 		console.log("User created:", userCredential.user);
// 	})
// 	.catch(error => {
// 		console.error("Error:", error.message);
// 	});
