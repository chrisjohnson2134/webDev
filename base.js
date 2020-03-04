function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function setupArray(){
	for(var z = 0; z < 200; z++){
		arr.push(z);
	}

	var temp = 0;
	var temp1 = 0;
	for(var z = 0; z < arr.length; z++){
		temp1 = Math.floor(Math.random()*arr.length);
		temp = arr[temp1];
		arr[temp1] = arr[z];
		arr[z] = temp;
	}
}

function swap(i,j){
		var one = document.getElementById(i);
		var two = document.getElementById(j);
		var temp = one.style.height;
		one.style.height = two.style.height;
		two.style.height = temp;
}

function paintGraph(){
	for (var i = 0; i < arr.length; i++) {
		var square = document.createElement('div');
		square.className = 'squared';
		x = (arr[i] * 1) + "px";
		square.style.height = x;
		square.id = i;
		document.body.appendChild(square);	
	}
}