///////////////////////////////////////////////////////////
// JAVASCRIPT WARMUP
/*
const altHeadline = "A microwave that corrects your past mistakes, through one message";
const h1 = document.querySelector(".heading-primary");

console.log(altHeadline);
console.log(h1);

// Adding a function to be called when an click event happen
h1.addEventListener("click", () => {
	// Change the element's properties
	h1.textContent = altHeadline;
	// Change the element's styling by directly declaring the style attribute
	h1.style.backgroundColor = "violet";
	h1.style.padding = "5rem";
});
*/

///////////////////////////////////////////////////////////
// Display the latest year in the page
const yearSpan = document.querySelector(".year");
yearSpan.textContent = new Date().getFullYear();

///////////////////////////////////////////////////////////
// Toggling mobile navigation menu
const header = document.querySelector(".header");
const navBtn = document.querySelector(".btn-mobile-nav");
navBtn.addEventListener("click", () => {
	header.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation when clicking an anchor
const anchors = document.querySelectorAll("a:link");
anchors.forEach((a) =>
	a.addEventListener("click", (e) => {
		e.preventDefault();
		const href = a.getAttribute("href");

		// Scroll back to top
		if (href === "#") {
			// Scroll to a specific pixel value
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
		if (href.length > 1 && href.startsWith("#")) {
			// Since #XXX is an ID selector
			const target = document.querySelector(href);
			// Scroll to a specific element
			target.scrollIntoView({ behavior: "smooth" });
		}

		// Close mobile navigation menu if exists
		header.classList.remove("nav-open");
	})
);

///////////////////////////////////////////////////////////
// Sticky navigation
// Navigation bar will become sticky once the hero section leaves the viewport
const observer = new IntersectionObserver(
	(entries) => {
		const entry = entries[0];
		if (!entry.isIntersecting) {
			/* 
				"sticky" class is added to <body> instead of the <header> because we need
				to style both <header> (sticking it) and hero section (padding with margin-top) 
				at the same time
			*/
			document.body.classList.add("sticky");
		} else {
			document.body.classList.remove("sticky");
		}
	},
	{
		root: null, // We observe the intersection of the hero section against VIEWPORT
		threshold: 0, // Fire the event once the hero section completely leaves the viewport
		rootMargin: "-80px", // Offset backwards to stick right before seeing the featured section
	}
);
observer.observe(document.querySelector(".section-hero"));

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions

// Verifies whether the browser supports the gap properties for flexbox. If not, add the
// CSS class "no-flexbox-gap" that we can extend the styling from to add margins instead.
function checkFlexGap() {
	var flex = document.createElement("div");
	flex.style.display = "flex";
	flex.style.flexDirection = "column";
	flex.style.rowGap = "1px";

	flex.appendChild(document.createElement("div"));
	flex.appendChild(document.createElement("div"));

	document.body.appendChild(flex);
	var isSupported = flex.scrollHeight === 1;
	flex.parentNode.removeChild(flex);
	console.log(isSupported);

	if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
