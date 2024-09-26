let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
let backButton = document.getElementById("back");
let seeMoreButtons = document.querySelectorAll(".see-more-btn");
let carousel = document.querySelector(".carousel");
let listHTML = document.querySelector(".carousel .list");

nextButton.onclick = function () {
	showSlider("next");
};
prevButton.onclick = function () {
	showSlider("prev");
};
