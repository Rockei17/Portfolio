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
		// add and remove class attribute to change the background color of the buttons when clicked
		// console.log(button.classList.contains("buttons"));
		if (button.innerHTML === all.innerHTML) {
			all.setAttribute("class", "active-button");
			// Remove Class in other buttons
			logo.removeAttribute("class", "active-button");
			landingPages.removeAttribute("class", "active-button");
			ads.removeAttribute("class", "active-button");
			blogImages.removeAttribute("class", "active-button");

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
			blogImages.removeAttribute("class", "active-button");

			// Display logo icon only
			// IMPORTANT ADD DISPLAY THIS ICONS!

			// const logo = icons[1].querySelectorAll("div");
			// console.log(logo);

			// console.log(logo);
			icons[1].style.display = "grid";
			// console.log(icons[1].value)
			// icons.forEach(icon => {
			// 	if(icon) {
			// 		console.log('Hello');
			// 	}
			// })

			// Hide Other logo THIS NEEDS REFOCTOR
			icons[0].style.display = "none";
			icons[2].style.display = "none";
			icons[3].style.display = "none";
			icons[4].style.display = "none";
		} else if (button.innerHTML === landingPages.innerHTML) {
			landingPages.setAttribute("class", "active-button");
			// Remove Class in other buttons
			all.removeAttribute("class", "active-button");
			logo.removeAttribute("class", "active-button");
			ads.removeAttribute("class", "active-button");
			blogImages.removeAttribute("class", "active-button");

			// Display logo icon only
			icons[2].style.display = "block";

			// Hide Other logo THIS NEEDS REFOCTOR
			icons[0].style.display = "none";
			icons[1].style.display = "none";
			icons[3].style.display = "none";
			icons[4].style.display = "none";
		} else if (button.innerHTML === ads.innerHTML) {
			ads.setAttribute("class", "active-button");
			// Remove Class in other buttons
			all.removeAttribute("class", "active-button");
			logo.removeAttribute("class", "active-button");
			landingPages.removeAttribute("class", "active-button");
			blogImages.removeAttribute("class", "active-button");

			// Display logo icon only
			icons[3].style.display = "block";

			// Hide Other logo THIS NEEDS REFOCTOR
			icons[0].style.display = "none";
			icons[1].style.display = "none";
			icons[2].style.display = "none";
			icons[4].style.display = "none";
		} else if (button.innerHTML === blogImages.innerHTML) {
			blogImages.setAttribute("class", "active-button");
			// Remove Class in other buttons
			all.removeAttribute("class", "active-button");
			logo.removeAttribute("class", "active-button");
			landingPages.removeAttribute("class", "active-button");
			ads.removeAttribute("class", "active-button");

			// Display logo icon only
			icons[4].style.display = "block";

			// Hide Other logo THIS NEEDS REFOCTOR
			icons[0].style.display = "none";
			icons[1].style.display = "none";
			icons[2].style.display = "none";
			icons[3].style.display = "none";
		}
	});
});
