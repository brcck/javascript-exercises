function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
	let sum = 0;
	for (i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return Number(sum);
}

function multiply (array) {
	let product = 1;
	for (i = 0; i < array.length; i++) {
		product *= array[i];
	}
	return product;
}

function power(a, b) {
	return a**b;
}

function factorial(number) {
	result = 1;
	for (i = 1; i <= number; i++) {
		result *= i;
	}
	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
