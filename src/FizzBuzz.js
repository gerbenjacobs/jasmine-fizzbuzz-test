function FizzBuzz() {
}

FizzBuzz.prototype.loop = function() {
	var array = new Array;
	for (i = 0; i < 100; i++) {
		var value = i + 1;
		if (value % 3 == 0 && value % 5 == 0) {
			array[i] = "FizzBuzz";
		} else if (value % 3 == 0) {
			array[i] = "Fizz";
		} else if (value % 5 == 0) {
			array[i] = "Buzz";
		} else {
			array[i] = value;
		}
	}
	return array;
}

FizzBuzz.prototype.loop2 = function() {
	var array = new Array;
	for (i = 0; i < 100; i++) {
		var value = i + 1;
		var isThree = value % 3;
		var isFive = value % 5;
		if (isThree && isFive) {
			array[i] = "FizzBuzz";
		} else if (isThree) {
			array[i] = "Fizz";
		} else if (isFive) {
			array[i] = "Buzz";
		} else {
			array[i] = value;
		}
	}
	return array;
}