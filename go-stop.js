var arr = ["go", "go", "go", "stop", "stop", "go"];

for (var i = 0; i < arr.length; i++) {
	if (arr[i] === "stop"){
		console.log(arr.indexOf(arr[i]));
		break;
	}
}
