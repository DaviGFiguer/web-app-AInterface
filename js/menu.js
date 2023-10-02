const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

let isOpen = false;

toggleBtn.onclick = function () {
  isOpen = !isOpen;

  if (isOpen) {
    dropDownMenu.style.display = 'block'
    toggleBtnIcon.classList = 'bi bi-x';
  } else {
    dropDownMenu.style.display = 'none'
    toggleBtnIcon.classList = 'bi bi-list';
  }
};

function scrollToElement(element) {
  window.scrollTo({
    behavior: 'smooth',
    top: element.offsetTop,
  });
}