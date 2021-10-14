
const popups = ['shortcuts-popup']

function TogglePopup(id) {
    const popup = document.getElementById(id);

    if (popup.classList.contains("popup-show")) {
        popup.classList.remove("popup-show");
    } else {
        popup.classList.add("popup-show");
    }
}

popups.forEach((popup) => {
    document.getElementById(popup + '-trigger').addEventListener("click", () => TogglePopup(popup))
})

// TODO: Export
