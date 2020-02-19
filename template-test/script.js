const resizeApp = ()=>{
	let height = 0;
	height+=document.querySelector("header").clientHeight;
	height+=document.querySelector("footer").clientHeight;
	height+=document.querySelector(".pageCaption").clientHeight;
	height+=document.querySelector(".filter").clientHeight+2;
	height = window.innerHeight - height-38;
	document.querySelector(".inner").style.height  = (height<=1? "1px":height+"px" );
}

window.onresize = resizeApp;
resizeApp();
