function removeAllCollapsibleActives(ignoreElement = {}) {
	$('.collapsible-active').not(ignoreElement.parentElement)
		.each(function() {
			toggleCollapsibleButton(this.children[0]);
		});
}

function toggleCollapsibleButton(element) {
	buttonToggling = true;
	$(element).parent().toggleClass('collapsible-active');
	$(element).next().slideToggle(function() {
		buttonToggling = false;
		$('.collapsible-active').each(function() {
			this.scrollIntoView({behavior: 'smooth'});
		});
	});
}

let buttonToggling = false;

function onClickBackgroundOverlay(event) {
	if (buttonToggling) {
		return;
	}
	event.preventDefault();
	event.stopPropagation();
	removeAllCollapsibleActives();
}

function onClickCollapsibleButton(event) {
	if (buttonToggling) {
		return;
	}
	event.preventDefault();
	event.stopPropagation();
	removeAllCollapsibleActives(this);
	toggleCollapsibleButton(this);
}

const coberturaMap = [
	{
		center: { lat : -22.896373, lng: -43.560605},
		radius: 3000
	}
];

function initMap() {
	const map = new google.maps.Map(document.getElementById("cobertura-map"), {
			zoom: document.body.offsetWidth < 500 ? 12 : 13,
			center: { lat : -22.896373, lng: -43.560605},
	});

	for (const cobertura of coberturaMap) {		
		const coberturaCircle = new google.maps.Circle({
			strokeColor: "#F97302",
			strokeOpacity: 0.8,
			strokeWeight: 2,
			fillColor: "#F97302",
			fillOpacity: 0.35,
			map,
			center: cobertura.center,
			radius: cobertura.radius,
		});
	}
}

window.initMap = initMap;
$(document).ready(function(){
	$('.collapsible-title').on('click',onClickCollapsibleButton);
	$('.collapsible-content').on('click', e => e.stopPropagation());
	$('.background-overlay').on('click', onClickBackgroundOverlay);
});