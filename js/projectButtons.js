// When clicked buttons add a css class in the buttons

const buttons = document.querySelectorAll("#buttons button");
const all = document.querySelector("#all");
const logo = document.querySelector("#logo");
const landingPages = document.querySelector("#landingPages");
const ads = document.querySelector("#ads");
const blogImages = document.querySelector("#blogImages");

// Icons variables
const icons = document.querySelectorAll("#icons #containerIcon");
// console.log(icons);

// IMPORTANT THIS NEEDS TO REFOCTOR
buttons.forEach(button => {
	button.addEventListener("click", () => {
		if (button.innerHTML === all.innerHTML) {
			all.setAttribute("class", "active-button");
			// Remove Class in other buttons
			logo.removeAttribute("class", "active-button");
			landingPages.removeAttribute("class", "active-button");
			ads.removeAttribute("class", "active-button");

			// Display icon
			icons.forEach(icon => {
				icon.style.display = "grid";
			});
		} else if (button.innerHTML === logo.innerHTML) {
			logo.setAttribute("class", "active-button");
			// Remove Class in other buttons
			all.removeAttribute("class", "active-button");
			landingPages.removeAttribute("class", "active-button");
			ads.removeAttribute("class", "active-button");

			icons[1].style.display = "grid";

			// Hide Other logo THIS NEEDS REFOCTOR
			icons[0].style.display = "none";
			icons[2].style.display = "none";
			icons[3].style.display = "none";
		} else if (button.innerHTML === landingPages.innerHTML) {
			landingPages.setAttribute("class", "active-button");
			// Remove Class in other buttons
			all.removeAttribute("class", "active-button");
			logo.removeAttribute("class", "active-button");
			ads.removeAttribute("class", "active-button");

			// Display logo icon only
			icons[2].style.display = "block";

			// Hide Other logo THIS NEEDS REFOCTOR
			icons[0].style.display = "none";
			icons[1].style.display = "none";
			icons[3].style.display = "none";
		} else if (button.innerHTML === ads.innerHTML) {
			ads.setAttribute("class", "active-button");
			// Remove Class in other buttons
			all.removeAttribute("class", "active-button");
			logo.removeAttribute("class", "active-button");
			landingPages.removeAttribute("class", "active-button");

			// Display logo icon only
			icons[3].style.display = "block";

			// Hide Other logo THIS NEEDS REFOCTOR
			icons[0].style.display = "none";
			icons[1].style.display = "none";
			icons[2].style.display = "none";
		}
	});
});
