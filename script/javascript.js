// Get the modal and close button
const modal = document.getElementById("howToUseModal");
const closeBtn = document.getElementsByClassName("close-btn")[0];

// Check if it's the user's first time visiting (you can store this in localStorage)
if (!localStorage.getItem("visited")) {
    // Show the modal if it's the first visit
    modal.style.display = "block";
    // Set a flag in localStorage to remember the user has visited
    localStorage.setItem("visited", "true");
}

// When the user clicks on the close button, close the modal
closeBtn.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
