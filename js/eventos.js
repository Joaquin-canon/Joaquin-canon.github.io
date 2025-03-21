document.getElementById('toggle-menu').addEventListener('click', function () {
    document.querySelector('.sidebar').classList.toggle('show');
    document.querySelector('.main-content').classList.toggle('shift');
});