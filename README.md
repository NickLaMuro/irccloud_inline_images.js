irccloud_inline_images.js
=========================

Turns all links to a image in IRCCloud to a img tag

This is an expriment that I am working on currently and in no way expected that this is finished/perfect.  I am horrible at javascript and this is an excuse to get better at it.

Usage
-----

This is obviously not an officially supported plugin, but if you would like to try it out, add the js file in a bookmarklet and give it a shot!

Add the following as the URL for a bookmark to try it out:

```javascript
javascript: (function(){var jsCode = document.createElement('script');jsCode.setAttribute('src', 'https://raw.github.com/NickLaMuro/irccloud_inline_images.js/master/irccloud_inline_images.js');document.body.appendChild(jsCode);}());
```

Word of Note
------------
For now, I know that IRCCloud uses jQuery, so I am currently not loading it in myself, but I might add a conditional check for it in the future.


(A more detailed README will be provided in the future)
