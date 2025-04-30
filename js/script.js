$(document).ready(function(){
  
  //======================При нажатии на ссылок Nav - SCROLL-вниз=========================
  $('.nav-link').click(function(e){
    e.preventDefault();
   
    let valueHref = $(this).attr('href');
    let distanceOfContent = $(valueHref).offset().top
    let clickedLink = $(this);
    
   $('html, body').animate({
    scrollTop: distanceOfContent,
   }, 600,)
 
    $('.nav-link').removeClass('active');
    clickedLink.addClass('active');
  
  })
  
  //====================При SCROLL-window - добавление класса active ссылкам Nav. Кнопка toTop (при нажатии SCROLL наверх)==============
  $(window).scroll(function(){
    let scrolled = $(this).scrollTop();
    let heightNav = $('.navbar').outerHeight()
    
    $('.navbar .nav-link').each(function(){

      let valueHref = $(this).attr('href');
      let distanceOfContent = $(valueHref).offset().top - heightNav;
      
      if(distanceOfContent <= scrolled){
        $('.nav-link').removeClass('active');
        $(this).addClass('active')
      }
    })
   
    if(scrolled > 800){
      $('.totop').fadeIn();
      
    }
    else{
      $('.totop').fadeOut()
    }
    
  })
  
  $('.totop, .navbar-brand').click(function(){
   
    $('html, body').animate({
     scrollTop: 0
    }, 600)
  
   }) 
   
   //======================Filter картинок Works и при нажатии на кнопок - показать/скрыть отфильтрованных картинок=========================
  function filterWorks(valueWorks){
    $('.picture').filter(valueWorks).slideDown();
    $('.picture').not(valueWorks).slideUp();
  }
  
  
  $('.works-btn').click(function(){
    let valueDataPicture = $(this).attr('data-picture');
    filterWorks('.' + valueDataPicture);
    
    let pointedWorksBtn = this;
   
    $('.works-btn').each(function(){
      $(this).removeClass('active');
    $(pointedWorksBtn).addClass('active');
    
    })
    
  })
  
   //======================Form validation формы Contacts=========================
  
  $('.form-contact').submit(function(e){
    e.preventDefault();
    
    $('.contact-input').each(function(){
      let valueInput = $(this).val()
      if(valueInput == ''){
        $('.contact-input').addClass('error');
      }
      $('.contact-input').on('input', function(){
        $(this).removeClass('error')
      })
    })
  })

   //======================Modal-Popap. Form validation формы Get-Started=========================
   $('header .started').click(function(e){
    e.preventDefault();
    $('.overlay-bg').show();
    $('.modal-get-started').slideDown();
   })
   
   $('.overlay-bg, .btn-get-started').click(function(){
    $('.overlay-bg').hide();
    $('.modal-get-started').slideUp();
   })
   
   $('.form-get-started').submit(function(e){
    e.preventDefault();
    
    $('.form-control-get-started').each(function(){
      if($(this).val() == ''){
        $(this).addClass('error-get-started');
      }
      
      $('.form-control-get-started').on('input', function(){
        $(this).removeClass('error-get-started');
      })
    })
   })
  
   
   
})
