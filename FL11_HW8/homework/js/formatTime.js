function time(m) {
	let min, hr, day;
	if (m < 60) {
		day = 0;
		hr = 0;
		min = m;
	} else if (m < 1440) {
		day = 0;
		min = m % 60;
		hr = (m - min) / 60;
	} else {
		min = m % 60;
		day = (m - (m % 1440)) / 1440;
		hr = ((m % 1440) - min) / 60;
	}
	let time = `${day} day(s) ${hr} hour(s) ${min} minute(s).`;
	return time;
}

time(3601);