const menuToggler = document.querySelector('.menu_toggle');
const menuOpen = menuToggler.querySelector('.fa-bars');
const menuClose = menuToggler.querySelector('.fa-times');
const menuContainer = document.querySelector('.menu_container');

menuOpen.addEventListener('click', (e) => {
  e.stopPropagation();
  menuContainer.classList.add('show');
  menuClose.style.display = "block";
  menuOpen.style.display = "none";
});

menuClose.addEventListener('click', (e) => {
  e.stopPropagation();
  menuContainer.classList.remove('show');
  menuClose.style.display = "none";
  menuOpen.style.display = "block";
});

document.addEventListener("click", function () {
  menuContainer.classList.remove('show');
  menuClose.style.display = "none";
  menuOpen.style.display = "block";
});

// clipboard
const eMail = document.querySelector('.email');
eMail.addEventListener("click", () => {
  let dummy = document.createElement('textarea');
  dummy.value = 'uhj1993@naver.com';  
  document.body.appendChild(dummy);
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
  alert('복사되었습니다.');
});
