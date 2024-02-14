function ONl_0(){
	document.getElementById('_IMG_1').style.display = "none";
	document.getElementById('_IMG_2').style.display = "none";
	document.getElementById('_IMG_3').style.display = "none";
	document.getElementById('_IMG_4').style.display = "none";
	document.getElementById('_IMG_5').style.display = "none";
	document.getElementById('_IMG_6').style.display = "none";
/*	document.getElementById('_IMG_7').style.display = "none";
	document.getElementById('_IMG_8').style.display = "none";
	document.getElementById('_IMG_9').style.display = "none";
	document.getElementById('_IMG_10').style.display = "none";
	document.getElementById('_IMG_11').style.display = "none";*/
}
function ONl_1(){
	ONl_0();
	document.getElementById('_IMG_2').style.display = "block";
}
function ONl_2(){
	ONl_0();
	document.getElementById('_IMG_3').style.display = "block";
}	
function ONl_3(){
	ONl_0();
	document.getElementById('_IMG_4').style.display = "block";
}
function ONl_4(){
	ONl_0();
	document.getElementById('_IMG_5').style.display = "block";
}
function ONl_5(){
	ONl_0();
	document.getElementById('_IMG_6').style.display = "block";
}
function ONl_6(){
	ONl_0();
	document.getElementById('_IMG_1').style.display = "block";
}


function Time(){

}


function TimeOpenContainer(){
	BlockNone();
	document.getElementById('time').style.display = "block";

	let T = 3;
// повторить с интервалом 2 секунды
let timerId = setInterval(() => T=T-1, 1000);

// остановить вывод через 5 секунд
setTimeout(() => { clearInterval(timerId); BlockNone(); OpenContainer(); }, 3000);


	
	
	

}
function TimeOpenContainer_Home(){
	BlockNone();
	document.getElementById('time').style.display = "block";

	let T = 3;
// повторить с интервалом 2 секунды
let timerId = setInterval(() => T=T-1, 1000);

// остановить вывод через 5 секунд
setTimeout(() => { clearInterval(timerId); BlockNone(); OpenContainer_Home(); }, 3000);
	

}



function TimeOpenContainerMyProgress(){
	BlockNone();
	document.getElementById('time').style.display = "block";

	let T = 3;
// повторить с интервалом 2 секунды
let timerId = setInterval(() => T=T-1, 1000);

// остановить вывод через 5 секунд
setTimeout(() => { clearInterval(timerId); BlockNone(); OpenContainerMyProgress(); }, 3000);
	

}


function TimeOpenContainerMyJob(){
	BlockNone();
	document.getElementById('time').style.display = "block";

	let T = 3;
// повторить с интервалом 2 секунды
let timerId = setInterval(() => T=T-1, 1000);

// остановить вывод через 5 секунд
setTimeout(() => { clearInterval(timerId); BlockNone(); OpenContainerMyJob(); }, 3000);
	

}


function BlockNone() {
	document.getElementById('container').style.display = "none";
	document.getElementById('container_Home').style.display = "none";
	document.getElementById('time').style.display = "none";
	document.getElementById('containerMyProgress').style.display = "none";
	document.getElementById('containerMyJob').style.display = "none";
/*	document.getElementById('#').style.display = "none";*/
}
function OpenContainer(){
	BlockNone();
	document.getElementById('container').style.display = "block";
}
function OpenContainer_Home(){
	
	BlockNone();
	document.getElementById('container_Home').style.display = "block";
}
function OpenContainerMyProgress(){
	
	BlockNone();
	document.getElementById('containerMyProgress').style.display = "block";
}
function OpenContainerMyJob(){
	
	BlockNone();
	document.getElementById('containerMyJob').style.display = "block";
}