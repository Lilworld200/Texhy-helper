class CreateComponent {
	constructor(elementName) {
		this.element = document.createElement(elementName);
	}

	addText(innText, includeText = false) {
		if (!includeText) {
			this.element.textContent = innText;
		}
		if (includeText) {
			this.element.textContent += innText;
		}
		return this;
	}

	addContent(innContent, appendElement = false) {
		if (!appendElement) {
			this.element.innerHTML = innContent;
		}

		if (appendElement) {
			this.element.append(innContent);
		}
		return this;
	}

	render(containerRef, order = null) {
		// renders element to the dom
		if (!order || order === "append") {
			const container = document.querySelector(containerRef);
			container.append(this.element);
		}
		if (order === "prepend") {
			const container = document.querySelector(containerRef);
			container.prepend(this.element);
		}
		return this;
	}

	addListener(handler, callback) {
		// add addEventListener to an element
		this.element.addEventListener(handler, callback);
		return this;
	}

	addClasses(classes) {
		// receives an array of css properties
		if (!Array.isArray(classes)) {
			console.error("Styles in addStyles Method must be in an array");
			return this;
		}

		classes.forEach(classAttribute => {
			this.element.classList.add(classAttribute);
		});
		return this;
	}

	addAttribute(attr, val) {
		this.element.setAttribute(attr, val);
		return this;
	}

	addStyle(style, val) {
		this.element.style[style] = val;
		return this;
	}

	removeSelf() {
		this.element.remove();
	}

	returnSelf() {
		return this.element;
	}
}

export default CreateComponent;
