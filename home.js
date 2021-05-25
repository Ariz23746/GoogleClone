const addBtn = document.querySelector("#add");
const removeBtn = document.querySelector("#remove");
var listIcon = document.querySelectorAll(".container__iconCrad");
var lastIcon = document.querySelector(".lastIcon")
const popupContainer = document.querySelector(".popup")
const container = document.querySelector(".container")
const cardMenuBox = document.querySelector(".container_headerCardMenu");

const cardimageAddress = document.querySelector("#cardAddress")
const cardimageName = document.querySelector("#cardName")
const submitBtn =  document.querySelector(".submit");
console.log(listIcon.length);
function openCard() {
	cardMenuBox.classList.toggle('activate');
}
addBtn.addEventListener('click',() => {
	cardMenuBox.classList.remove('activate');
	popupContainer.classList.toggle('activate')
	container.classList.toggle('dim');
	
})
removeBtn.addEventListener('click',() => {


	
	if(document.querySelector("#add").previousElementSibling.classList.contains("meet") === false) {
		cardMenuBox.removeChild(lastIcon);
		lastIcon = document.querySelector("#add").previousElementSibling;
		lastIcon.classList.add("lastIcon");
	
	}

	
})
submitBtn.addEventListener('click',() => {
	let address = cardimageAddress.value;
	let cardName = cardimageName.value;
	const div = document.createElement("div");
	div.classList.add("container__iconCrad");
	const img = document.createElement("img");
	img.src = address;
	const span = document.createElement("span");
	span.innerHTML = cardName;
	div.appendChild(img);
	div.appendChild(span);
	div.classList.add('lastIcon');
	console.log(document.querySelector(".container_headerCardMenu .container__iconCrad.lastIcon"),lastIcon);
	document.querySelector("#add").previousElementSibling.classList.remove("lastIcon");
	document.querySelector("#add").previousElementSibling.after(div);
	lastIcon = document.querySelector("#add").previousElementSibling
	cardMenuBox.classList.remove('activate');
	popupContainer.classList.remove('activate')
	container.classList.remove('dim');
})





window.addEventListener('click',(e) => {
	if(e.target === container) {
		popupContainer.classList.remove('activate')
		container.classList.remove('dim');
		cardMenuBox.classList.remove('activate');
	}
})


