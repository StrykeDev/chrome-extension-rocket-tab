
const local = window.localStorage // TODO: Replace with chrome storage
const main = document.getElementById('main');
const backgroundList = document.getElementById("background-list");
const width = 1280; // 1680 recommanded
const images = [
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

function BackgroundSelected(backgroundUrl) {
    main.style.backgroundImage = `url(${backgroundUrl})`;
    local.setItem('selectedBackground', backgroundUrl);
}

function RemoveBackground() {
    main.style.backgroundImage = '';
    local.removeItem('selectedBackground')
}

// Load image from localstorage
const imageUrl = local.getItem('selectedBackground');
if (imageUrl) {
    main.style.backgroundImage = `url(${imageUrl})`;
}

// Render buttons
images.forEach((image) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "background-item btn";
    button.onclick = () => BackgroundSelected(image.url);
    button.innerHTML = '<h2>Loading...<h2>'
    button.disabled = true;
    backgroundList.appendChild(button);

    const img = new Image();
    img.src = image.url
    img.onload = () => {
        button.style.backgroundImage = `url(${image.url})`;
        button.innerText = ''
        button.disabled = false;
    }
});

const button = document.createElement("button");
button.type = "button";
button.className = "background-item btn";
button.onclick = () => RemoveBackground();
button.innerHTML = '<h2>No Background<h2>'
button.style.background = 'linear-gradient(45deg, #d972f3 ,#3764eb)'
backgroundList.appendChild(button);



