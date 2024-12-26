import CreateComponent from "./CreateComponent.js";

class CreateContainer extends CreateComponent {
	constructor(elementName) {
		super(elementName);
	}

	renderChildren(children) {
		for (let child of children) {
			this.element.append(child);
		}
		return this
	}

	watch() {
		// Define the mutation observer callback function
		const observerCallback = (mutationsList, observer) => {
			for (const mutation of mutationsList) {
				if (mutation.type === "childList") {
					console.log("A child node was added or removed");
				} else if (mutation.type === "attributes") {
					console.log(
						`The ${mutation.attributeName} attribute was modified`
					);
				} else if (mutation.type === "characterData") {
					console.log("The text content was changed");
				}
			}
		};

		// Create a MutationObserver instance and pass the callback function
		const observer = new MutationObserver(observerCallback);

		// Configuration for the mutations to observe
		const config = {
			childList: true, // Observe additions or removals of child nodes
			attributes: true, // Observe changes to attributes
			characterData: true, // Observe changes to text content
			subtree: true // Observe all descendants (not just direct children)
		};

		// Start observing the target node with the specified configuration
		observer.observe(this.element, config);
		return this;
	}
}

export default CreateContainer;
