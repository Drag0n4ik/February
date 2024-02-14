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