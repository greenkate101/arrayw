var array = [10, 3, 6, 12];

for (var i = 0; i < array.length - 1; i++) {
	array[i] = array[i] * array[i + 1];
}

console.log(array);