
$("#fullpage").fullpage({
          anchors: ['home', 'skills', 'works', 'contact'],
          menu: '#myMenu',
          verticalCentered: false,
          css3: true,
          navigation: true,
          navigationPosition: "right",
          scrollOverflow: false,
          bigSectionsDestination: top,
          responsiveWidth: 1480,
          responsiveHeight: 850,
          //adding the action to the button
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

const skillSection = document.querySelector('.skill__section');
const workSection = document.querySelector('.works__section');
const skillLeft = document.querySelector('.skills__left');
const workLeft = document.querySelector('.works__left');

let skillSectionInfo = skillSection.getBoundingClientRect();
let skillSectionHeight = skillSectionInfo.height + 10;
skillLeft.style.height = skillSectionHeight + "px";

let workSectionInfo = workSection.getBoundingClientRect();
let workSectionHeight = workSectionInfo.height + 10;
workLeft.style.height = workSectionHeight + "px";


function handleResize() {
  let width = window.innerWidth;
  if (width > 1100) {
    skillLeft.style.height = skillSectionHeight + "px";
    workLeft.style.height = workSectionHeight + "px";
  } else if (width < 480){
    skillLeft.style.height = 300 + "px";
    workLeft.style.height = 300 + "px";
  } else {
    skillLeft.style.height = skillSectionHeight / 3 + "px";
    workLeft.style.height = workSectionHeight / 3 + "px";
  }
}


handleResize();
window.addEventListener("resize", handleResize); 