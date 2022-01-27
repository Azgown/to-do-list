window.addEventListener('load', () => {
	window.task = new Task;
})




class Task {

	constructor() {
		this.audio  = new Audio("/max-brhon-cyberpunk-ncs-release.mp3");
		this.addButton = document.getElementById('addButton');
		this.toDo = document.getElementById('toDoCont');
		this.champsTxt = document.getElementById('champsTxt');
		this.clear = document.getElementById('clrButton');

		this.addButton.addEventListener('click', () => {
			let text = document.createTextNode(this.champsTxt.value);
			this.addTask(text);
		});

		window.addEventListener('keyup', (e) => {
			console.log(e.key)
			if (e.key === "Enter") {
				let text = document.createTextNode(this.champsTxt.value);
				this.addTask(text);
			}
		});

		this.isPlaying = false;
		this.audio.loop = true;
		this.audio.volume = 1;
		window.addEventListener('mousemove', () => {
			if (!this.isPlaying) {
				this.audio.play();
			}
		})

	}

	addTask(text) {
		let paragraph = document.createElement('li');
		paragraph.classList.add('list-group-item', 'form-check');

		let span = document.createElement("SPAN");
		span.appendChild(text);

		this.toDo.appendChild(paragraph);

		paragraph.addEventListener('click', () => {
			span.contentEditable = !span.contentEditable
		})

		paragraph.appendChild(span);
		champsTxt.value = "";

		let btn = document.createElement('button');
		btn.classList.add('btn', 'btn-outline-danger', 'float-right');
		btn.id = 'erase';
		btn.addEventListener('click', () => {
			paragraph.parentNode.removeChild(btn.parentNode);
		});
		paragraph.appendChild(btn);
		btn.appendChild(document.createTextNode('Erase'));


		let checkbox = document.createElement('input');
		checkbox.classList.add('form-check-input', 'position-static', 'float-left');
		checkbox.type = "checkbox";
		paragraph.appendChild(checkbox);



		checkbox.addEventListener('change', (e) => {
			console.log(paragraph.dataset.st);
			if (paragraph.dataset.st == 2) {
				paragraph.style.backgroundColor = 'white';
				paragraph.dataset.st = 1;
			} else {
				paragraph.style.backgroundColor = '#25E306';
				paragraph.dataset.st = 2;
			}

		});


	}
}

/* SCROLLBAR */ 

let progress = document.getElementById("progressBar");
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function (){
	let progressHeight = (window.pageXOffset / totalHeight) * 100;
	progress.style.height = progressHeight + "%";
}


