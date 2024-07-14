


$(document).ready(function() {
  $('.img-popup').magnificPopup({
    type: 'image',
    gallery:{
      enabled:true
    }
  });

  $('.flow-popup').magnificPopup({
    type: 'image',
    gallery:{
      enabled:true
    }
  });
});


$(document).ready(function() {
  $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function() {
      $(this).toggleClass('open');
  });
});

// wow js
wow = new WOW(
  {
  boxClass:     'wow',     
  animateClass: 'animated', 
  offset:       0,          
  mobile:       true,      
  live:         true       
}
)
wow.init();
