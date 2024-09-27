let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
let backButton = document.getElementById("back");
let seeMoreButtons = document.querySelectorAll(".see-more-btn");
let carousel = document.querySelector(".carousel-container");
// inner HTML
let listHTML = document.querySelector(".carousel-container .list");

nextButton.onclick = function () {
	showSlider("next");
};
prevButton.onclick = function () {
	showSlider("prev");
};
const showSlider = (type) => {
	let items = document.querySelectorAll(".carousel-container, .list, .item");
	if (type === "next") {
		listHTML.appendChild(items[0]);
	}
};
