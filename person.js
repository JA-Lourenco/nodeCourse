class Person {
	constructor(name) {
		this.name = name;
	}

	sayMyName = () => `Hello, my name is ${this.name}`;
}

module.exports = {
	Person,
};
