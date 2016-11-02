$(document).foundation();

$( document ).ready(function() {

  $( "html" ).removeClass('no-js').addClass('js');

  $( ".cell" ).each(function() {
    $( this ).click(function() {
        if( $( this ).hasClass( "inactive" ) ){
          event.preventDefault();
        }
        else{
          var id = $( this ).attr("id");
          $( this ).toggleClass( "active" );
        }
    });
  });

  $(".close").click(function(){
    $( '.active' ).toggleClass( 'active' );
    $( '.inactive' ).toggleClass( 'inactive' );
  });

  $( "#nav-button" ).click(function() {
    $( "#nav" ).toggle();
  });


  $( ".perspective" ).each(function() {
    $( ".perspective" ).click(function() {
      $(this).toggleClass( "active" );
    });
  });

  // $( ".perspective" ).click(function() {
  //   // $( ".perspective" ).each(function(){
  //   //   $(this).toggleClass( "active" );
  //   // });
  //   $(this).toggleClass( "active" );
  // });


  /* Smooth Scroll */
  $('.navigation--link').click(function(){
    var speed = 800;

    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = (target.offset().top - 74);
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });


  var mail = $( ".mail a" ).attr('data-content');
  var phone = $( "#phone" ).attr('data-content');
  $( ".mail a" ).attr('href', 'mailto:'+mail);
  $( "#phone" ).attr('href', 'tel:'+phone);


});
