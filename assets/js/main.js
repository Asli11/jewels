const menu = document.getElementById("menu");
const menuList = document.getElementById("menu-ul");
const icon = document.getElementById("menu-icon");
let list = document.querySelectorAll(".list");

icon.addEventListener("click", () => {
	if (icon.classList.contains("ri-menu-3-line")) {
		menuList.style.transform = "translateY(25%)";
		icon.classList.remove("ri-menu-3-line");
		icon.classList.add("ri-close-fill");
		list.forEach((li, index) => {
			li.style.animation = `liFade 0.2s ease forwards ${index / 7 + 0.2}s`;
		});
	} else {
		list.forEach((li) => {
			li.style.animation = "none";
		});
		menuList.style.transform = "translateY(-130%)";

		icon.classList.remove("ri-close-fill");
		icon.classList.add("ri-menu-3-line");
	}
});

/* swiper */
let galleryThumbs = new Swiper(".gallery-thumbs", {
	spaceBetween: 0,
	slidesPerView: 0,
	loop: false,
});
let galleryTop = new Swiper(".gallery-top", {
	effect: "fade",
	loop: true,
	thumbs: {
		swiper: galleryThumbs,
	},
});

const controls = document.querySelectorAll(".img");

function scrollAnimation() {
	gsap.from(".collections", { opacity: 0, duration: 0.1, delay: 0.2, y: -30 });
	gsap.from(".title", { opacity: 0, duration: 0.2, delay: 0.3, y: -30 });
	gsap.from(".descr", { opacity: 0, duration: 0.3, delay: 0.4, y: -30 });
	gsap.from(".details", { opacity: 0, duration: 0.4, delay: 0.5, y: -30 });
}

controls.forEach((c) => c.addEventListener("click", scrollAnimation));
