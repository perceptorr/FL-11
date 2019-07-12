function isInteger(num) {
	if (num - Math.floor(num) === 0 && num > 0) {
		return true;
	} else {
		return false;
	}
}
isInteger(5.0);