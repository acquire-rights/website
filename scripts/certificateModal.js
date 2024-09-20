const modal = document.getElementById("certificateModal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("modal-close")[0];
const form = document.getElementById("certificateForm");
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
form.onsubmit = function(e) {
    e.preventDefault();

    console.log("Form submitted");
    modal.style.display = "none";
}