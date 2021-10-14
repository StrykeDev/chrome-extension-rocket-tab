
const pages = ["home-page", "background-options"];
let currentPageIndex = 0

function GoToPage(pageIndex) {
    document.getElementById(pages[currentPageIndex]).classList.add("collapse");
    document.getElementById(pages[pageIndex]).classList.remove("collapse");
    currentPageIndex = pageIndex;
}

// Wire the links
pages.forEach((page, index) => {
    document.getElementById('link-' + page).addEventListener("click", () => GoToPage(index))
})

// TODO: Export
