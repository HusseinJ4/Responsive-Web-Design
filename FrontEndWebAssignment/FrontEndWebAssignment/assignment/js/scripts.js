	"use strict";

		menuToggler.addEventListener('click', ev => {
	  menu.classList.toggle('open');
		menuToggler.textContent = menuToggler.textContent === "×" ? "≡" : "×";
		});

	myQuery.addEventListener('input', ev => {

		for(const result of document.querySelectorAll('.hidden')) {
			result.classList.remove('hidden');
		}

		const allSections = Array.from(document.querySelectorAll('main section'));

		const filteredSections = allSections.filter(section => {
			const name = section.dataset.name;
			return !name.includes(myQuery.value);
		});

		for (const section of filteredSections) {
			section.classList.add('hidden');
		}
	});
