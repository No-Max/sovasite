$(document).ready(function(){
  var header = $(".header-top, #menu, .phone-top");
  var footer = $("footer");
  var right_nav = $("#fp-nav ul");
  var line = $(".home .line");
  var text = $(".home .description");

  var del = 800;
  var pixels = 10;

  header.css({"opacity":0, "margin-top":-pixels});
  header.delay(1000).animate({opacity:1,"margin-top":0},del);

  footer.css({"opacity":0, "padding-bottom":50+pixels});
  footer.delay(1400).animate({opacity:1,"padding-bottom":50},del);

  right_nav.css({"opacity":0, "margin-top":-pixels});
  right_nav.delay(1100).animate({opacity:1, "margin-top":0},del);

  line.css({"opacity":0, "width":40});
  text.css({"opacity":0});
  text.css({"margin-top":-pixels});
  line.animate({opacity:1, "width":80},del,function(){
    text.animate({"opacity":1, "margin-top":0},del);
  });

});