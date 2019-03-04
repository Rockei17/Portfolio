const navSlide = () => {
	const burger = document.querySelector("#burger");
	const nav = document.querySelector("#navbar ul");
	const navLinks = document.querySelectorAll("#navList li");

	burger.addEventListener("click", () => {
		// Toggle nav
		nav.classList.toggle("navbar-active");

		// Animate the Links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index /
					7 +
					1}s`;
			}
		});
		// Burger Animation
		burger.classList.toggle("toggle");
	});
};

navSlide();
