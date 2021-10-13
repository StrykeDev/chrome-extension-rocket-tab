
import backgrounds from "../assets/backgrounds/backgrounds.js";
const backgroundList = document.getElementById("background-list");

// TODO: Added fade effect
function BackgroundSelected(backgroundIndex, loaded = true) {
    document.body.style.backgroundImage = `url(${backgrounds[backgroundIndex].url})`;

    if (loaded) {
        chrome.storage.local.set({ 'selectedBackground': backgroundIndex });
    }
}

function ClearBackground() {
    document.body.style.backgroundImage = '';
    chrome.storage.local.remove('selectedBackground');
}

// Render buttons
backgrounds.forEach((background, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "background-item btn drop-shadow";
    button.innerHTML = 'Loading...'
    button.disabled = true;
    button.addEventListener("click", () => BackgroundSelected(index));
    backgroundList.appendChild(button);

    const img = new Image();
    img.src = background.url
    img.addEventListener('load', () => {
        button.style.backgroundImage = `url(${background.url})`;
        button.innerText = ''
        button.disabled = false;
    })
});

const button = document.createElement("button");
button.type = "button";
button.className = "background-item btn drop-shadow";
button.innerHTML = 'No Background'
button.style.background = 'linear-gradient(45deg, #d972f3 ,#3764eb)'
button.addEventListener("click", () => ClearBackground());
backgroundList.appendChild(button);


// Load last background from storage
chrome.storage.local.get('selectedBackground', (result) => {
    if (result.selectedBackground != undefined) {
        BackgroundSelected(result.selectedBackground, false);
    }
})
