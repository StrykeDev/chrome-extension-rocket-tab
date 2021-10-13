
const pages = ["home-page", "background-options"];
let currentPageIndex = 0

function GoToPage(pageIndex) {
    document.getElementById(pages[currentPageIndex]).classList.add("collapse");
    document.getElementById(pages[pageIndex]).classList.remove("collapse");
    currentPageIndex = pageIndex;
    local.setItem('lastPage', pageIndex); // TEMP
}

pages.forEach((page, index) => {
    document.getElementById('link-' + page).addEventListener("click", () => GoToPage(index))
})

// TEMP, WILL BREAK
const lastPageIndex = local.getItem('lastPage');
if (lastPageIndex) {
    GoToPage(lastPageIndex);
}
