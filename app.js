let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
let backButton = document.getElementById("back");
let seeMoreButtons = document.querySelectorAll(".see-more-btn");
let carousel = document.querySelector(".carousel-container");
// inner HTML
let listHTML = document.querySelector(".carousel-container .list");

// next btn
nextButton.onclick = function () {
	showSlider("next");
};
prevButton.onclick = function () {
	showSlider("prev");
};
let unAcceptClick;
const showSlider = (type) => {
	nextButton.style.pointerEvents = "none";
	prevButton.style.pointerEvents = "none";
	carousel.classList.remove("prev", "next");
	let items = document.querySelectorAll(".carousel-container .list .item");
	if (type === "next") {
		listHTML.appendChild(items[0]);
		carousel.classList.add("next");
	} else {
		let positionLast = items.length - 1;
		listHTML.prepend(items[positionLast]);
		carousel.classList.add("prev");
	}
	// Time restart
	clearTimeout(unAcceptClick);
	unAcceptClick = setTimeout(() => {
		nextButton.style.pointerEvents = "auto";
		prevButton.style.pointerEvents = "auto";
	}, 2000);
};

// See more button
seeMoreButtons.forEach((button) => {
	carousel.classList.remove("showDetails");
	button.onclick = function () {
		carousel.classList.add("showDetails");
	};
});
