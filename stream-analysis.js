window.onload = Main;
let firstIndex = 0;

function SetupScrollReveal() {
	ScrollReveal({
		//reset: true,
		distance: '60px',
		duration: 500,
		delay: 50
	});

	//target elements, and specify options to create reveal aniomations
	ScrollReveal().reveal('.main-title, .section-title', { delay: 200, origin: 'left' });

	ScrollReveal().reveal('.sec-01, .image, .info', { delay: 300, origin: 'bottom' });

	ScrollReveal().reveal(".sec-02", { delay: 300, origin: "left"});

	ScrollReveal().reveal('.text-box', { delay: 350, origin: 'right' });

	ScrollReveal().reveal('.media-icons i', { delay: 250, origin: 'bottom', interval: 200 });

	ScrollReveal().reveal('.sec-02 .image, .sec-03 .image', { delay: 250, origin: 'top' });

	ScrollReveal().reveal('.media-info li', { delay: 250, origin: 'left', interval: 200 });
}

function Setup() {
	document.querySelectorAll(".carousel-content")[firstIndex].style.display = "flex";

	let funcBack = () => {
		if (firstIndex== 0)
			return;

		const content = document.querySelectorAll(".carousel-content");
		content[firstIndex--].style.display = "none";
		content[firstIndex].style.display = "flex";
	};

	let funcNext = () => {
		const content = document.querySelectorAll(".carousel-content");
		if (firstIndex === content.length-1)
			return;

		content[firstIndex++].style.display = "none";
		content[firstIndex].style.display = "flex";
	};

	document.querySelectorAll("#back_1").forEach(button => {
		button.addEventListener("click", funcBack);
	});

	document.querySelectorAll("#next_1").forEach(button => {
		button.addEventListener("click", funcNext);
	});
}

function Main() {
	Setup();
	SetupScrollReveal();
}