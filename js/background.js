
import backgrounds from "../assets/backgrounds/backgrounds.js";

const backgroundList = document.getElementById("background-list");
const backgroundOne = document.getElementById('background-one');
const backgroundTwo = document.getElementById('background-two');
let lastBackground = -1;
let flip = true;

function BackgroundSelected(backgroundIndex, loaded = true) {
    if (lastBackground != backgroundIndex) {
        lastBackground = backgroundIndex;

        // Flip between the background layers for fading effect
        if (flip) {
            backgroundOne.style.backgroundImage = `url(${backgrounds[backgroundIndex].url})`;
            backgroundOne.style.opacity = 1;
            backgroundTwo.style.opacity = 0;
            flip = false;
        } else {
            backgroundTwo.style.backgroundImage = `url(${backgrounds[backgroundIndex].url})`;
            backgroundTwo.style.opacity = 1;
            backgroundOne.style.opacity = 0;
            flip = true;
        }

        // Set accent color
        document.documentElement.style.setProperty("--accent-color", backgrounds[backgroundIndex].color || '#443BBC');

        if (loaded) {
            chrome.storage.local.set({ 'selectedBackground': backgroundIndex });
        }
    }
}

function ClearBackground() {
    lastBackground = -1;
    chrome.storage.local.remove('selectedBackground');
    backgroundOne.style.opacity = 0;
    backgroundTwo.style.opacity = 0;
}

// Render buttons
backgrounds.forEach((background, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "background-item btn drop-shadow";
    button.innerText = '. . .';
    button.disabled = true;
    button.addEventListener("click", () => BackgroundSelected(index));
    backgroundList.appendChild(button);

    const img = new Image();
    img.src = background.url
    img.addEventListener('load', () => {
        button.style.backgroundImage = `url(${background.url})`;
        button.innerText = '';
        button.disabled = false;
    })
});

document.getElementById('clear-background').addEventListener('click', () => ClearBackground());

// Load last background from storage
chrome.storage.local.get('selectedBackground', (result) => {
    if (result.selectedBackground != undefined) {
        BackgroundSelected(result.selectedBackground, false);
    }
})

// TODO: GetCurrentBackground, background changed event
export default {
    SetBackground: (backgroundIndex, loaded = true) => BackgroundSelected(backgroundIndex, loaded),
    ClearBackground: ClearBackground,
}
