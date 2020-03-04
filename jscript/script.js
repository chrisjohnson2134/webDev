bearButton.addEventListener("click",function(){paintList()});



function paintList(){
	var a = document.querySelectorAll("li");
	for(var i = 0; i < a.length; i++){
		if(i == 0){
			a[i].style.background = "blue";
		}
		else{
			a[i].style.background = "yellow";
		}
	}
}

