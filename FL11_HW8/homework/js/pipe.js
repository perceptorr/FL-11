function pipe(){
	let num = arguments[0];
	for (let i = 1; i < arguments.length; i+=1) {
		let x = num;
		num = arguments[i](x);
	}
	return num;
}

function addOne(x) {
  return x + 5;
}

pipe(1, addOne); //=> 2
pipe(1, addOne, addOne); //=> 3