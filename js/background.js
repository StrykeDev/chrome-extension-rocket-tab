
import backgrounds from "../assets/backgrounds/backgrounds.js";

const backgroundList = document.getElementById("background-list");
const backgroundOne = document.getElementById('background-one');
const backgroundTwo = document.getElementById('background-two');
let flip = true;

function BackgroundSelected(backgroundIndex, loaded = true) {
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
    document.documentElement.style.setProperty("--primary-color", backgrounds[backgroundIndex].color);

    if (loaded) {
        chrome.storage.local.set({ 'selectedBackground': backgroundIndex });
    }
}

function ClearBackground() {
    backgroundOne.style.opacity = 0;
    backgroundTwo.style.opacity = 0;
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
