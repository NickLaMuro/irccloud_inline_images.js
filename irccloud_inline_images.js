(function() {

  var cssCode = document.createElement('link');
  cssCode.rel = 'stylesheet';
  cssCode.href = 'http://nicklamuro.github.com/irccloud_inline_images.js/stylesheets/inline_images.css';
  cssCode.type = 'text/css';
  cssCode.media = 'all';
  document.getElementsByTagName('head')[0].appendChild(cssCode);

  function convert_link_to_image(link) {
    var href_url = $(link).attr("href")
    var image_tag = '<img src="' + href_url + '" class="inline_image"/>';
    $(link).html(image_tag);
  }

  $("div.log span.message a").filter(function() { return /.*(\.jpg|\.png|\.gif)$/.test($(this).attr("href")) }).each(function(index) {
    convert_link_to_image(this)
  });

  $('td#maincell').delegate("table.buffer.channel:visible div.log", "DOMNodeInserted", function(e) {
    $("span.message a", e.target).filter(function() { return /.*(\.jpg|\.png|\.gif)$/.test($(this).attr("href")) }).each(function(index) {
      convert_link_to_image(this)
    });
  });

})();
