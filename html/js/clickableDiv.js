document.addEventListener('click', function (event) {
    if (!event.target.matches('.vote-name')) return;
    event.preventDefault();
    window.open(event.target.getAttribute("href"), "_blank");
}, false);
document.addEventListener('click', function (event) {
    if (!event.target.parentElement.matches('.vote-name')) return;
    event.preventDefault();
    window.open(event.target.parentElement.getAttribute("href"), "_blank");
}, false);