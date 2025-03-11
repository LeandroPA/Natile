function removeAllCollapsibleActives(ignoreElement) {
	$('collapsible-active').not(ignoreElement).removeClass('collapsible-active');
}

function onClickCollapsibleButton() {
	if ($(this).next().is(':animated')) {
		return;
	}
	// removeAllCollapsibleActives(this.parentElement);
	// $(this).next().parent().toggleClass('collapsible-active');
	$(this).parent().toggleClass('collapsible-active');
	$(this).next().slideToggle(function() {
		$('.collapsible-active').each(function() {
			this.scrollIntoView({behavior: 'smooth'});
		});
	});

	// setTimeout(() => {
	// 	$('.collapsible-active').each(() => this.scrollIntoView({behavior: 'smooth'}));
	// }, 200)
	// $(this).parent()[0].scrollIntoView({behavior: 'smooth'});
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
	// $('.background-overlay').on('click', removeAllCollapsibleActives);
});