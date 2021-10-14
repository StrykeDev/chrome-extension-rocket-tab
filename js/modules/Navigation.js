
let registeredPages = [];
let currentPageIndex = 0

function NavigateTo(pageIndex) {
    document.getElementById(registeredPages[currentPageIndex]).classList.add("collapse");
    document.getElementById(registeredPages[pageIndex]).classList.remove("collapse");
    currentPageIndex = pageIndex;
}

export default {
    RegisterPages: (pages) => {
        registeredPages = pages;
        registeredPages.forEach((page, index) => {
            document.getElementById('link-' + page).addEventListener("click", () => NavigateTo(index))
        })
    },
    NavigateTo: (pageIndex) => NavigateTo,
    currentPageIndex: currentPageIndex,
    currentPageId: registeredPages[currentPageIndex],
}
