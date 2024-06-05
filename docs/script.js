function scrollToPage(pageId) {
    document.getElementById(pageId).scrollIntoView({ behavior: 'smooth' });
}
function toggleRed() {
    var button = document.getElementById("myButton");
    button.classList.toggle("red");
}
