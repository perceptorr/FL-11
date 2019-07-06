let a, b, c;
a = +prompt('Enter A length', '');
b = +prompt('Enter B length', '');
c = +prompt('Enter C length', '');
if(a + b > c && a + c > b && b + c > a){
	if(a + b === a + c && a + b === b + c && a + c === b + c){
		console.log('Eequivalent triangle');
	} else if(a + b === a + c || a + b === b + c || a + c === b + c){
		console.log('Isosceles triangle');
	} else {
		console.log('Normal triangle');	
	}
} else {
	console.log('Triangle doesn’t exist');
}
