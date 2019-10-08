


document.addEventListener("DOMContentLoaded", ()=>{

	let options = {};

	let callback = (entries, observer)=>{
		entries.forEach( (entry) => {
			 if( entry.isIntersecting){
			 	entry.target.classList.add("move-back");
			 	observer.unobserve(entry.target);
			 }
			

		})

	}

	const firstBlockLogos = document.querySelectorAll(".info__section--container--first__block--item--logo");
	const secondBlockLogos = document.querySelectorAll(".info__section--container--second__block--item--logo");

	let allBlockLogos = [...firstBlockLogos, ...secondBlockLogos];

	let observer = new IntersectionObserver(callback, options);

	//observer.observe(firstBlockLogos);
	allBlockLogos.forEach( (elem)=>{
		elem.classList.add("move");
		observer.observe(elem);		
	});


});