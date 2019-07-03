let a, b, c;
a = +prompt('Enter A', '');
b = +prompt('Enter B', '');
c = +prompt('Enter C', '');
if (a <= 0 || b <= 0 || c <= 0 ) {
	console.log('Triangle doesn’t exist');	
} else if(a + b === a + c && a + b === b + c && a + c === b + c){
	console.log('Eequivalent triangle');
} else if(a + b === a + c || a + b === b + c || a + c === b + c){
	console.log('Isosceles triangle');
} else {
	console.log('Normal triangle');	
}
