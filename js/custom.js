// menu toggler

const menuToggler = document.querySelector('.menu_toggle');
const menuOpen = menuToggler.querySelector('.fa-bars');
const menuClose = menuToggler.querySelector('.menu_times');
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

// email clipboard
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

// pop up //
const userIcon=document.querySelector(".user");
const aboutModal = document.querySelector(".about");
const aboutTimes = document.querySelector(".about_times");

// open
userIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  aboutModal.classList.add("show");
});

// times close x
aboutTimes.addEventListener("click", (e) => {
  e.stopPropagation();
  aboutModal.classList.remove("show");
});

// background close
document.addEventListener("click", (e) => {
  if (!e.this) {
    aboutModal.classList.remove("show");
  }
});

// contents click NOT close
aboutModal.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
});

