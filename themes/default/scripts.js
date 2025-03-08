var coll = document.getElementsByClassName("collapsible-title");
var i;

console.log(coll);
for (i = 0; i < coll.length; i++) {
    
    console.log(coll[i]);
    coll[i].addEventListener("click", function() {
        this.parentElement.classList.toggle("collapsible-active");
        var content = this.lastElementChild;

        console.log("This: ", this);
        if (content.style.maxHeight){
          // content.style.padding = "0px 20px";
          // content.style.maxHeight = null;
        } else {
          // content.style.padding = "20px";
          // content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}