//your JS code here. If required.
let p = document.getElementById('status');
let btn = document.getElementById('enterBtn');

function changContent(){
	
	p.innerHTML = "<h1>Entered Metaverse</h1>";
}

btn.addEventListener('click', changContent);