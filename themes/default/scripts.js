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

main();