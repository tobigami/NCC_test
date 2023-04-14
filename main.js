const btnOpenModal = document.querySelector('#modal-button');
const modalMenu = document.querySelector('#modal-bg');

btnOpenModal.onclick = function () {
    modalMenu.style.display = 'block';
};

window.onclick = function (event) {
    if (event.target === modalMenu && window.innerWidth < 1200) {
        modalMenu.style.display = 'none';
    }
};
