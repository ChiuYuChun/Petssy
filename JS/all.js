$(document).ready(function (){

  //  往上拉
 
  $(".top").click(function(e){
    e.preventDefault();
    $('html,body').animate({ // 有些瀏覽器只支援html，有些只支援body 所以兩個都寫進去
      scrollTop: 0,
  }, 100)
  })
})

       
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination"
    },
      /* 斷點設定 */
    breakpoints: {
      /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
      992: {
        slidesPerView: 3
      },
      /* 螢幕寬度大於等於 768px 時切換為 2 欄 */
      768: {
        slidesPerView: 2
      },
      /* 更小時都顯示 1 欄 */
      0: {
        slidesPerView: 1
      }
    },
    loop:true,
    autoplay: {
      delay: 2500,
    },
    
    
  });


  
