(function () {
	test2();

	// isItHoisted()
	// definitionNotHoisted()

	// function isItHoisted() {
	// 	console.log("Yes!")
	// }

	// var definitionNotHoisted = function () {
	// 	console.log("Definition not hoisted!")
	// }
})();

function test1() {
	let name = "haralampi";
	let year = "1998";

	let currentYear = 2018;
	let age = currentYear - year;

	let msg = "Hello " + name + ", aged " + age;

	console.log(msg);
}

function test2() {
	let arr = ["nodejs", "vuejs", "angualarjs"];

	arr.splice(1, 1);
	arr.splice(1, 0, "opa");

	arr.unshift("c3js");
	console.log(arr);

	arr.splice(1, 2, "E", "F", "G");

	console.log(arr);
}
