
$("#fullpage").fullpage({
          anchors: ['home', 'skills', 'works', 'contact'],
          menu: '#myMenu',
          verticalCentered: false,
          css3: true,
          navigation: true,
          navigationPosition: "right",
          scrollOverflow: true,
          responsiveWidth: 1100,
          onLeave: function (index, nextIndex, direction) {
            if (index == 3 && direction == "down") {
              $(".section")
                .eq(index - 1)
                .removeClass("moveDown")
                .addClass("moveUp");
            } else if (index == 3 && direction == "up") {
              $(".section")
                .eq(index - 1)
                .removeClass("moveUp")
                .addClass("moveDown");
            }

            $("#staticImg").toggleClass(
              "active",
              (index == 2 && direction == "down") ||
                (index == 4 && direction == "up")
            );
            $("#staticImg").toggleClass("moveDown", nextIndex == 4);
            $("#staticImg").toggleClass(
              "moveUp",
              index == 4 && direction == "up"
            );
          },
});
        
// skills 의 높이 = 해당 섹션의 높이.
const skillSection = document.querySelector('.skill__section');

const skillLeft = document.querySelector('.skills__left');
let skillSectionInfo = skillSection.getBoundingClientRect();
let skillSectionHeight = skillSectionInfo.height + 20;
skillLeft.style.height = skillSectionHeight + "px";


function handleResize() {
  let width = window.innerWidth;
  if (width > 1100) {
    skillLeft.style.height = skillSectionHeight + 20 + "px";
  } else if (width < 480){
    skillLeft.style.height = 300 + "px";
  } else {
    skillLeft.style.height = skillSectionHeight / 3 + "px";
  }
}


handleResize();
window.addEventListener("resize", handleResize);