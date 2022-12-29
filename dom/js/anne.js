// 메뉴바 영역


//모바일
$(function(){
  let trigger = $('#trigger');
  let menu = $('nav .btn');

  $('#trigger').on('click',function(e){
      e.preventDefault();
      menu.slideToggle();
  });
});

//pc_아코디언
    $(function(){
            $('.btn a').on('mouseover',function(){
                $('.btn').next('ul').filter(':visible').slideUp();

                $(this).parent().next().slideDown();
                
                return false;
            });
        });
// 갤러리 영역 

    let pics=document.getElementsByClassName('pic');
    let originImg=document.querySelector('#originImg');
    let container=document.querySelector('#container');
    

    for(i=0; i<pics.length; i++){
        pics[i].addEventListener('click',changeImg)
    }

    function changeImg(){
        let bigImg = this.getAttribute('data-src');
        originImg.setAttribute('src',bigImg);
        container.style.backgroundImage=`url(${bigImg})`;
    }



// 슬릭슬라이드
$('.center').slick({
    centerMode: true,
    centerPadding: '50px',
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
