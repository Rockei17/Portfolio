// const navbarMenu = document.querySelector("#navbar ul");
const navbarLinks = document.querySelectorAll("#container-nav a");
// console.log(navbarLinks);
navbarLinks.forEach(navbarLink =>
	navbarLink.addEventListener("click", navbarClickLink)
);
function navbarClickLink(e) {
	smoothScroll(e); // Call the "smoothScroll" function
}
// Smooth Scrolling function
function smoothScroll(e) {
	e.preventDefault();
	const targetId = e.currentTarget.getAttribute("href");
	// console.log(targetId);
	window.scrollTo({
		top: document.querySelector(targetId).offsetTop,
		behavior: "smooth"
	});
}
