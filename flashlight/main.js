function flashlightOff() {
  $(this).css({
    '-webkit-mask-image': ''
  });
}

function flashlight(e) {
  var mouseX = e.pageX - $(this).offset().left;
  var mouseY = e.pageY - $(this).offset().top;
  $(this).css({
    '-webkit-mask-image': 'radial-gradient(circle 60px at ' + mouseX + 'px ' + mouseY + 'px, rgba(255,255,255,1) 60%, rgba(255,255,255,0) 100%)',
    'cursor': 'none'
  });

}

function updateImg() {
  $('.masked').attr('src', 'http://www.placekitten.com/' + $(window).width() + '/' + $(window).height());
}


$('.masked').on({
  'mousemove': flashlight,
  'mouseleave': flashlightOff
});

// $(window).on('resize', updateImg);
// updateImg();
