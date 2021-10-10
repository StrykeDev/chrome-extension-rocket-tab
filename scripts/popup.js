

function TogglePopup(id) {
    const popup = document.getElementById(id);
    if (popup.classList.contains("popup-show")) {
        popup.classList.remove("popup-show");
    } else {
        popup.classList.add("popup-show");
    }
}
