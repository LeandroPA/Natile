function removeAllCollapsibleActives() {

  var actives = document.getElementsByClassName("collapsible-active");

  for (var i = 0; i < actives.length; i++) {
    actives[i].classList.remove("collapsible-active")
  }
}

function onClickCollapsibleButton() {
  console.log('onClickCollapsibleButton', this);
  var shouldToggle = !this.parentElement.classList.contains("collapsible-active") 
  removeAllCollapsibleActives();
  shouldToggle && this.parentElement.classList.toggle("collapsible-active");
}

function onClickOutsideCollapsibleButton() {
  console.log('onClickOutsideCollapsibleButton', this);
  removeAllCollapsibleActives();
}

function setListener(domElements, event, callback) {
  for (var i = 0; i < domElements.length; i++) {
    domElements[i].addEventListener(event, callback);
  }
}

function main() {
  setListener(document.getElementsByClassName("collapsible-title"), "click", onClickCollapsibleButton);
  // setListener(document.getElementsByClassName("background-overlay"), "click", onClickOutsideCollapsibleButton);
}

const coberturaMap = [
  {
      center: { lat : -22.896373, lng: -43.560605},
      radius: 3000
  }
];

function initMap() {
  console.log("init map")
  const map = new google.maps.Map(document.getElementById("cobertura-map"), {
      zoom: 13,
      center: { lat : -22.896373, lng: -43.560605},
  });

  for (const cobertura of coberturaMap) {
    
    console.log("init cobertura", cobertura)
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

main();