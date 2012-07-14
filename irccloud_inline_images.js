(function() {
  $('td#maincell').delegate("table.buffer.channel:visible div.log", "DOMNodeInserted", function(e) {
    //console.log(e.target);
    //console.log( $("span.message a", e.target).filter(function() { return /.*(\.jpg|\.png|\.gif)$/.test($(this).attr("href")) }) );
    $("span.message a", e.target).filter(function() { return /.*(\.jpg|\.png|\.gif)$/.test($(this).attr("href")) }).each(function(index) {
      var href_url = $(this).attr("href")
      var image_tag = '<img src="' + href_url + '"></img>';
      $(this).replaceWith(image_tag);
    });
  });
})();
