var modal = document.getElementById('myModal');
var modalContent = document.getElementById('modalContent');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
   
}
function myFunction() {
    modalContent.classList.remove("animated", "zoomInUp", "delay-2s", "modal-content");
    modalContent.classList.add("animated", "zoomOutRight", "delay-2s", "modal-content");
    setTimeout(function() {
        modal.style.display = "none";
        modalContent.classList.remove("animated", "zoomOutRight", "delay-2s", "modal-content");
        modalContent.classList.add("animated", "zoomInUp", "delay-2s", "modal-content");
    }, 500
)
    }
