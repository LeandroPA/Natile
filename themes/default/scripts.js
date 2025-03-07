var coll = document.getElementsByClassName("collapsible-button");
var i;

console.log(coll);
for (i = 0; i < coll.length; i++) {
    
    console.log(coll[i]);
    coll[i].addEventListener("click", function() {
        this.classList.toggle("collapsible-active");
        var content = this.lastElementChild;

        console.log("This: ", this);
        if (content.style.maxHeight){
          content.style.maxHeight = null;
          content.style.padding = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
          content.style.padding = "20px";
        }
    });
}