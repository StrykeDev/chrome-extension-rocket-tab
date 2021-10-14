
let registeredPopups = []

function TogglePopup(id) {
    const popup = document.getElementById(id);

    if (popup.classList.contains("popup-show")) {
        popup.classList.remove("popup-show");
    } else {
        popup.classList.add("popup-show");
    }
}

export default {
    RegisterPopups: (popups) => {
        registeredPopups = popups
        registeredPopups.forEach((popup) => {
            document.getElementById(popup + '-trigger').addEventListener("click", () => TogglePopup(popup))
        })
    },
    TogglePopup: (id) => TogglePopup,
}
