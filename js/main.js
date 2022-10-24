$(document).ready(function(){

    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
})


     $('.work-sl').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            dots: true,
            slidesToScroll: 1
          }
        },
          {
          breakpoint: 591,
          settings: {
            slidesToShow: 1,
            dots: true,
            slidesToScroll: 1
          }
        },

          {
            breakpoint: 416,
            settings: {
              slidesToShow: 1,
              dots: true,
              slidesToScroll: 1
            }
          }
      ]
  });

     $('.foto-sl').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            dots: true,
            slidesToScroll: 1
          }
        },
          {
          breakpoint: 591,
          settings: {
            slidesToShow: 1,
            dots: true,
            slidesToScroll: 1
          }
        },

          {
            breakpoint: 416,
            settings: {
              slidesToShow: 1,
              dots: true,
              slidesToScroll: 1
            }
          }
      ]
  });

     $('.licenziya-sl').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3,
            dots: true,
            slidesToScroll: 1
          }
        },
          {
          breakpoint: 591,
          settings: {
            slidesToShow: 2,
            dots: true,
            slidesToScroll: 1
          }
        },

          {
            breakpoint: 416,
            settings: {
              slidesToShow: 1,
              dots: true,
              slidesToScroll: 1
            }
          }
      ]
  });


      $('.licenziya2-sl').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            dots: true,
            slidesToScroll: 1
          }
        },
          {
          breakpoint: 591,
          settings: {
            slidesToShow: 1,
            dots: true,
            slidesToScroll: 1
          }
        },

          {
            breakpoint: 416,
            settings: {
              slidesToShow: 1,
              dots: true,
              slidesToScroll: 1
            }
          }
      ]
  });


     $('.otziv-sl').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            dots: true,
            slidesToScroll: 1
          }
        },
          {
          breakpoint: 591,
          settings: {
            slidesToShow: 1,
            dots: true,
            slidesToScroll: 1
          }
        },

          {
            breakpoint: 416,
            settings: {
              slidesToShow: 1,
              dots: true,
              slidesToScroll: 1
            }
          }
      ]
  });


     $('.otziv2-sl').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            dots: true,
            slidesToScroll: 1
          }
        },
          {
          breakpoint: 591,
          settings: {
            slidesToShow: 1,
            dots: true,
            slidesToScroll: 1
          }
        },

          {
            breakpoint: 416,
            settings: {
              slidesToShow: 1,
              dots: true,
              slidesToScroll: 1
            }
          }
      ]
  });

     $('.popular-sl').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            dots: true,
            slidesToScroll: 1
          }
        },
          {
          breakpoint: 641,
          settings: {
            slidesToShow: 1,
            dots: true,
            slidesToScroll: 1
          }
        },

          {
            breakpoint: 416,
            settings: {
              slidesToShow: 1,
              dots: true,
              slidesToScroll: 1
            }
          }
      ]
  });


     $('.content-sl').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            dots: true,
            slidesToScroll: 1
          }
        },
          {
          breakpoint: 641,
          settings: {
            slidesToShow: 1,
            dots: true,
            slidesToScroll: 1
          }
        },

          {
            breakpoint: 416,
            settings: {
              slidesToShow: 1,
              dots: true,
              slidesToScroll: 1
            }
          }
      ]
  });


});

const items2 = document.querySelectorAll(".item2");

items2.forEach((item2) => {
    item2.addEventListener("click", () => {
        item2.classList.toggle("open2");
    });
});


const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mt-mobile');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');
    
});


   // // MODAL

const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".modalButton");
const modalCloseButton = document.querySelector(".modalCloseButton");
const backdrop = document.querySelector('.backdrop');

const toggleModal = (id) => {
  if (id) {
    const modal = document.querySelector(id);
  }
  modal.classList.toggle("modalActive");
  backdrop.classList.toggle('backdropActive');
};

modalCloseButton.onclick = () => toggleModal();
backdrop.onclick = () => toggleModal();


   // // MODAL2

const modal2 = document.querySelector(".modal2");
const modalButton2 = document.querySelector(".modalButton2");
const modalCloseButton2 = document.querySelector(".modalCloseButton2");
const backdrop2 = document.querySelector('.backdrop2');

const toggleModal2 = (id) => {
  if (id) {
    const modal2 = document.querySelector(id);
  }
  modal2.classList.toggle("modalActive2");
  backdrop2.classList.toggle('backdropActive2');
};

modalCloseButton2.onclick = () => toggleModal2();
backdrop2.onclick = () => toggleModal2();

   // // MODAL3

const modal3 = document.querySelector(".modal3");
const modalButton3 = document.querySelector(".modalButton3");
const modalCloseButton3 = document.querySelector(".modalCloseButton3");
const backdrop3 = document.querySelector('.backdrop3');

const toggleModal3 = (id) => {
  if (id) {
    const modal3 = document.querySelector(id);
  }
  modal3.classList.toggle("modalActive3");
  backdrop3.classList.toggle('backdropActive3');
};

modalCloseButton3.onclick = () => toggleModal3();
backdrop3.onclick = () => toggleModal3();


   // // MODAL4

const modal4 = document.querySelector(".modal4");
const modalButton4 = document.querySelector(".modalButton4");
const modalCloseButton4 = document.querySelector(".modalCloseButton4");
const backdrop4 = document.querySelector('.backdrop4');

const toggleModal4 = (id) => {
  if (id) {
    const modal4 = document.querySelector(id);
  }
  modal4.classList.toggle("modalActive4");
  backdrop4.classList.toggle('backdropActive4');
};

modalCloseButton4.onclick = () => toggleModal4();
backdrop4.onclick = () => toggleModal4();




   // // MODAL5

const modal5 = document.querySelector(".modal5");
const modalButton5 = document.querySelector(".modalButton5");
const modalCloseButton5 = document.querySelector(".modalCloseButton5");
const backdrop5 = document.querySelector('.backdrop5');

const toggleModal5 = (id) => {
  if (id) {
    const modal5 = document.querySelector(id);
  }
  modal5.classList.toggle("modalActive5");
  backdrop5.classList.toggle('backdropActive5');
};

modalCloseButton5.onclick = () => toggleModal5();
backdrop5.onclick = () => toggleModal5();




$(document).ready(function () {
  
    $('.sidebar-menu').mouseenter(function(){
      $(this).children('.expand').addClass('turn');
    });
  
    $('.sidebar-menu').mouseleave(function(){
      if ($(this).hasClass('open')) {
      } else {
        $(this).children('.expand').removeClass('turn');
      }
    });
    
    $('.sidebar-menu').click(function () {
      var $this = $(this);
      if ($this.hasClass('open')) {
        $('.sidebar-menu').removeClass('open');
        $('.sub-menu').stop(true).slideUp("fast");
        $('.expand').removeClass('turn');        
        $this.removeClass('open');
        $this.children('.expand').removeClass('turn');
        $this.next().stop(true).slideUp("fast");
      }    
      else {
        $('.sidebar-menu').removeClass('open');
        $('.sub-menu').stop(true).slideUp("fast");
        $('.expand').removeClass('turn');
        
        $this.addClass('open');
        $this.children('.expand').addClass('turn');
        $this.next().stop(true).slideDown("fast");
        }
    });
  
});