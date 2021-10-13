
const backgroundList = document.getElementById("background-list");
const width = 1280; // 1680 recommanded
const backgrounds = [
    {
        url: "https://images.unsplash.com/photo-1611003228941-98852ba62227?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=" + width
    },
    {
        url: "https://images.unsplash.com/photo-1547532182-bf296f6be875?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&q=100&w=" + width,
    },
    {
        url: "https://images.unsplash.com/photo-1548041347-390744c58da6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=100&w=" + width,
    },
    {
        url: "https://images.unsplash.com/photo-1548049983-5be60c9bc004?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&q=100&w=" + width,
    },
    {
        url: "https://images.unsplash.com/photo-1547994770-e5d8509b114d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=100&w=" + width,
    },
    {
        url: "https://images.unsplash.com/photo-1547989453-11e67ffb3885?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&q=100&w=" + width,
    },
];

function BackgroundSelected(backgroundIndex) {
    document.body.style.backgroundImage = `url(${backgrounds[backgroundIndex].url})`;
    chrome.storage.local.set({ 'selectedBackground': backgroundIndex });
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
    button.onclick = () => BackgroundSelected(index);
    button.innerHTML = 'Loading...'
    button.disabled = true;
    backgroundList.appendChild(button);

    const img = new Image();
    img.src = background.url
    img.onload = () => {
        button.style.backgroundImage = `url(${background.url})`;
        button.innerText = ''
        button.disabled = false;
    }
});

const button = document.createElement("button");
button.type = "button";
button.className = "background-item btn drop-shadow";
button.onclick = () => ClearBackground();
button.innerHTML = 'No Background'
button.style.background = 'linear-gradient(45deg, #d972f3 ,#3764eb)'
backgroundList.appendChild(button);


// Load last background from storage
chrome.storage.local.get('selectedBackground', (result) => {
    if (result.selectedBackground != undefined) {
        document.body.style.backgroundImage = `url(${backgrounds[result.selectedBackground].url})`;
    }
})
