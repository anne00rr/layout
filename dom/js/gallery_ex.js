// 메뉴바 영역 
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
