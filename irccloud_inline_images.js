(function() {

  function convert_link_to_image(link) {
    var href_url = $(link).attr("href")
    var image_tag = '<img src="' + href_url + '"/>';
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
