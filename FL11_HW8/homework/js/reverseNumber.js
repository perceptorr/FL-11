function reverseNumber(num) {
	let str;
	if (num < 0) {
		str = "" + num * -1;
	} else {
		str = '' + num;
	}
	let strRevers = [];
	let n = 0;
	for (let i = str.length - 1; i >= 0; i -= 1) {
		strRevers[n] = str[i];
		n += 1;
	}
	let revStr = '';
	for (let j = 0; j < strRevers.length; j += 1) {
		revStr += strRevers[j];
	}
	let revNum = +revStr;
	if (num < 0) {
		revNum *= -1;
	}
	return revNum;
}
reverseNumber(-123);