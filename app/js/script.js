$(document).on('ready', function(){ 
	
  
   $('.js-list-rollup').click(function(event){
        event.preventDefault();
        var target = $(this);
        target.toggleClass('active');
        if (target.hasClass('active')) {
          $('.disclaimer__list-item-hidden').show();
          $('.disclaimer__list-item-rollup').text('Свернуть');
        } else {
          $('.disclaimer__list-item-hidden').hide();
          $('.disclaimer__list-item-rollup').text('Развернуть');
        }
        
    }); 

   $('.js-list-modal').click(function(event){
        event.preventDefault();
        var target = $(this);
        target.toggleClass('active');
        if (target.hasClass('active')) {
          $(this).next().show();          
        } else {
          $(this).next().hide();         
        }
        
    }); 

   $('.js-fs-prev').click(function(event) {
      var num = $('.first-screen__slider .number').text();
      
      $('.first-screen__slider .number').fadeOut('slow', function() {
        num = +num - 1;
        if (num == 4) num = 1;
        if (num == 0) num = 3;
        $('.first-screen__slider .number').text(num);
      }); 
      $('.first-screen__slider img').fadeOut('slow', function() {
        $('.first-screen__slider img').attr('src','img/slider' + num + '.png');
      });     
      $('.first-screen__slider .number').fadeIn('slow');
      $('.first-screen__slider img').fadeIn('slow');
   });

   $('.js-fs-next').click(function(event) {
      var num = $('.first-screen__slider .number').text();
      
      $('.first-screen__slider .number').fadeOut('slow', function() {
        num = +num + 1;
        if (num == 4) num = 1;
        if (num == 0) num = 3;
        $('.first-screen__slider .number').text(num);
      }); 
      $('.first-screen__slider img').fadeOut('slow', function() {
        $('.first-screen__slider img').attr('src','img/slider' + num + '.png');
      });     
      $('.first-screen__slider .number').fadeIn('slow');
      $('.first-screen__slider img').fadeIn('slow');
      
   });
    


});