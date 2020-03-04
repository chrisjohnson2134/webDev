var arr = [];

setupArray();

paintGraph();

//var bubbleHandle = setInterval(bubbleSort,10);

//swap(0,1);
//swap(1,0);
//swap(2,0);

document.getElementById("bubbleBTN").addEventListener("click", start);

var bubbleSorter;
function start(){
	bubbleSorter = setInterval(bubbleSort,0);
}


var i = 0;
var sorted = false,swapMade = false;
var temp =0;
var last = 200;
function bubbleSort(){
	
	//while(!sorted){
		//console.log(arr);
		if(arr[i] > arr[i+1]){
			temp = arr[i];
			arr[i] = arr[i+1];
			arr[i+1] = temp;
			swapMade = true;
			swap(i,i+1);
		}
		i++;
		if(i >= last){
			last = i-1;
			//console.log(last);
			i=0;
			if(swapMade == true){
				sorted = false;
				swapMade = false;
			}else {
				console.log(arr);
				sorted = true;
				clearInterval(bubbleSorter)
			}
		}

	//}
}