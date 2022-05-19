'use strict';
//  Open Menue setting Profile And Notifications
function openMenu(menuName) {
  $(menuName).click(function(e) {
    e.stopPropagation();
          if($(this).find('ul').hasClass('open')){
            $(this).find('ul').removeClass("open");   
          } else{
            $(this).find('ul').addClass("open");   
          }
      }
    );
}

openMenu(".settings-profile .notif");
openMenu(".settings-profile .user-icon");

$('body').click(function () {
    $(".settings-profile > div > ul").removeClass("open");
  });


//   Remove All list-child Box Active And This Click Add Active
$(".list-child .box").click(function(e){
    $(".list-child .box").removeClass("active");
    $(this).addClass("active");

    $('.child-img img').attr('src',$(this).find('img').attr('src'));
    $('.child-img p').text($(this).find('p').text())

})
 


