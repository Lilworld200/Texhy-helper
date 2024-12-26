function isValidEmail(email) {
	// Regular expression for validating an email
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

function isStrongPassword(password) {
	// Checking the length
	if (password.length < 8) return false;
	// Checking for uppercase, lowercase, digit, and special character
	const hasUpper = /[A-Z]/.test(password);
	const hasLower = /[a-z]/.test(password);
	const hasDigit = /[0-9]/.test(password);
	const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
	return hasUpper && hasLower && hasDigit && hasSpecial;
}

export default function validateCredentials(email, password) {
	return isValidEmail(email) && isStrongPassword(password);
}
