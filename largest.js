var arr = [-50, 2, 99, -129, 110];
var largest;

for (var i = 0; i < arr.length; i++) {
	if (Math.abs(arr[i]) > Math.abs(arr[i + 1])) {
		largest = arr[i];
	} else {
		i++;
	}
}

console.log(largest);