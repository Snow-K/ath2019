$(function(){
  $('#wrap').css({opacity:'0'});
  setTimeout(function(){
    $("#anime_1").stop().animate({opacity:'0'},1000);
    $('#wrap').stop().animate({opacity:'1'},1000);
  },3000);
});