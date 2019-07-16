//0. Write function, which returns array of numbers from string parameter.
function getNumbers(str) {
	let rez = [];
	for (let i = 0; i < str.length; i += 1) {
		if (!isNaN(str[i])) {
			rez.push(+str[i]);
		}
	}
	return rez;
}
//getNumbers('string'); // returns [] 
//getNumbers('n1um3ber95'); // returns [1,3,9,5]

//1. Write a function that could receive different amount of parameters (n1, n2, ...n) that have different data types (string, number, boolean, etc.) and returns an object where keys are data types of received parameters and value are their count
function findTypes() {
	let obj = {};
	for (let i = 0; i < arguments.length; i += 1) {
		let type = typeof arguments[i];
		obj[type] = 1;
	}
	return obj;
}
//findTypes(null, 5, 'hello');// returns {“object”:1, “number”:1, “string”:1}

//2. Write function, which iterates over array and executes function on each element.
function executeforEach(arr, func) {
	for (let i = 0; i < arr.length; i += 1) {
		let el = arr[i];
		func(el);
	}
}
//executeforEach([1,2,3], function(el) { console.log(el) }) // logs 1 2 3

//3. Write function, which returns transformed array based on function, which passed as a parameter. Reuse function from task 2.
function mapArray(arr, func) {
	let rez = [];
	executeforEach(arr, function(el) {
		rez.push(func(el));
	});
	return rez;
}
//mapArray([2, 5, 8], function(el) { return el + 3 });

//4. Write function, which returns filtered array based on function, which passed as a parameter. Reuse function from task 2. 
function filterArray(arr, func) {
	let rez = [];
	executeforEach(arr, function(el) {
		if (func(el)) {
			rez.push(el);
		}
	});
	return rez;
}

//filterArray([2, 5, 8], function(el) {return el > 3}) // returns [5, 8]

//5. Write function, which returns formatted date.
function showFormattedDate(data) {
	let date, month, year;
	date = data.getDate();
	month = data.getMonth();
	year = data.getFullYear();
	let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	let dateOutput = `Date: ${monthNames[month]} ${date} ${year}`;
	return dateOutput;
}

//showFormattedDate(new Date('2019-01-27T01:10:00'))

//6. Write function, which returns Boolean value, is received string parameter can be converted to valid date.
function canConvertToDate(checkDate) {
	let date = new Date(checkDate);
	return !isNaN(Date.parse(date));
}
//console.log(canConvertToDate('2016-03-18T00:00:00'));

//7. Write function, which returns difference between two dates in days
function daysBetween(first, second) {
	const ms = 1000,
		sec = 60,
		min = 60,
		hr = 24;
	let milliSecDiff = Math.abs(first - second);
	let daysDiff = Math.round(milliSecDiff / (ms * sec * min * hr));
	return daysDiff;
}
//daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'))  // 32

//8. Write function, which returns amount of people, who are over 18. Reuse function from task 4,7
/* input data example:
data = [
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    " birthday ": '2016-03-18T00:00:00',
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    " birthday ": '1991-02-11T00:00:00',
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    " birthday ": '1984-04-17T00:00:00',
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    " birthday ": '1994-04-17T00:00:00',
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
];
*/
function getAmountOfAdultPeople(arr) {
	let oldEnaught = 18,
		days = 365;
	let adults = [];
	adults = filterArray(arr, function(pers) {
		if (daysBetween(Date.now(), new Date(pers[' birthday '])) > oldEnaught * days) {
			return true;
		}
	});
	return adults.length;
}

//getAmountOfAdultPeople(data) // returns 3;

//9. Write function, which returns array of keys of an object.
function keys(obj) {
	let rez = [];
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			rez.push(key);
		}

	}
	return rez;
}

//keys({keyOne: 1, keyTwo: 2, keyThree: 3}); // returns [“keyOne”, “keyTwo”, “keyThree”]

//10. Write function, which returns array of values of an object.
function values(obj) {
	let rez = [];
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			rez.push(obj[key]);
		}

	}
	return rez;
}

//values({keyOne: 1, keyTwo: 2, keyThree: 3}); // returns [1, 2, 3]