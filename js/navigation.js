
// TODO: Improve the navigation system

// TEMP, WILL BREAK
const lastPage = local.getItem('lastPage');
if (lastPage) {
    GoToPage(lastPage);
}

function GoToPage(id) {
    const pages = ["home-page", "background-options"];

    pages.forEach((page) => {
        if (page == id) {
            document.getElementById(page).classList.remove("collapse");
            local.setItem('lastPage', id)
        } else {
            document.getElementById(page).classList.add("collapse");
        }
    });
}
