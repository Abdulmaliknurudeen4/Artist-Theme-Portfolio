$( document ).ready(function() {
  //
  smoothScroll(1000);

  workBelt();

  workLoad();

  clientStuff();

	$("header h1").fitText(1, { minFontSize: '20px', maxFontSize: '72px' })

});
function smoothScroll(duration){
  $('a[href^="#"]').on('click', function(event){
    var target = $( $(this).attr('href'));
    if(target.length){
      event.preventDefault();
      $('html,body').animate({
        scrollTop: target.offset().top
      },duration);
    }
  });
}

function workBelt(){

$('.trigger').remove();
$('.return').remove();

 $('.thumb-unit').click(function(){
   $('.work-belt').css('left', '-100%');
   $('.work-container').show();
 });

 $('.work-return').click(function(){
   $('.work-belt').css('left', '0%');
   $('.work-container').hide(800);
 });
}

  function workLoad(){
     $.ajaxSetup({cache: true});

     $('.thumb-unit').click(
       function(){
         var $this=$(this),
         newTitle=$this.find('strong').text(),
         newFolder = $this.data('folder'),
         spinner = '<div class="loader">Loading...</div>',
          newHTML='/work/'+newFolder;
          //+'.html'
         $('.project-load').html(spinner).load(newHTML);
         $('.project-title').text(newTitle);
       }
     );
  }
  //client stuffs
 function clientStuff() {
   var $this = $(this),
   curActiveClient = $('.clients-belt').find('.active-client'),
   position = $('.clients-belt').children().index(curActiveClient),
   clientNum = $('.client-unit').length;

   //setting active client
   $('.client-unit').first().addClass('active-client');
   $('.client-logo').first().addClass('active-client');
   $('.clients-mobile-nav span').first().addClass('active-client');

   $('.client-logo, .clients-mobile-nav span').click( function() {
     //store position of the clicked logo
     //store the logo clicked
     //store the children of the client logos
     var $this = $(this),
     $siblings = $this.parent().children(),
     position = $siblings.index($this);
     //remove and adding classes to the classes
     $('.client-unit').removeClass('active-client').eq(position).addClass('active-client');
     $siblings.removeClass('active-client');
     $this.addClass('active-client');



   });

 $('.client-control-next, .client-control-prev').on('click',function() {
     //stash
     var $this = $(this),
     curActiveClient = $('.clients-belt').find('.active-client'),
     position = $('.clients-belt').children().index(curActiveClient),
     clientNum = $('.client-unit').length;

     if($(this).hasClass('client-control-next')){
          if(position < clientNum -1){
            $('.active-client').removeClass('active-client').next().addClass('active-client');
          } else {
            $('.client-unit').removeClass('active-client').first().addClass('active-client');
            $('.client-logo').removeClass('active-client').first().addClass('active-client');
          }
        }else{
          if(position===0){
              $('.client-unit').removeClass('active-client').last().addClass('active-client');
              $('.client-logo').removeClass('active-client').last().addClass('active-client');
         }else{
               $('.active-client').removeClass('active-client').prev().addClass('active-client');
         }

        }


// the issue with the next and previous button can be fixed by
//adding z index of 1 to both the client logo class and the client controls class

   });


   // if($(this).hasClass('client-control-next')){
   //      if(position < clientNum -1){
   //        $('.active-client').removeClass('active-client').next().addClass('active-client');
   //      } else {
   //        $('.client-unit').removeClass('active-client').first().addClass('active-client');
   //        $('.client-logo').removeClass('active-client').first().addClass('active-client');
   //      }
   //    }else{
   //      if(position==0){
   //          $('.client-unit').removeClass('active-client').last().addClass('active-client');
   //          $('.client-logo').removeClass('active-client').last().addClass('active-client');
   //     }else{
   //           $('.active-client').removeClass('active-client').prev().addClass('active-client');
   //     }
   //
   //    }
   //

 }

// fitText
(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
