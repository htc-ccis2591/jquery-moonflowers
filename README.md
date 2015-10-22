# Update Moonflower’s Coffee to jQuery

## Getting Started
You should fork and clone the jquery-moonflower's repository.
https://github.com/htc-ccis2591/jquery-moonflowers
 
You’ll want to begin each assignment by forking the repository and cloning it locally.  When you are done, you’ll push to GitHub and submit a pull request.


## Include jQuery using a CDN
In the index.html file, add the script tag as follows:
<script src="https://code.jquery.com/jquery-2.1.4.js"></script>

## Move code into jQuery ready
Wrap the code that “just runs” with the jQuery $(document).ready function.

```
   $(document).ready( function() { 
        ...
   } );
```

Note that you can still put this in your IIFE. You don’t always want everything inside of the ready function, but for this example, that is fine.

## Use jQuery functions for DOM Manipulation
Replace the use of `document.getElementById` with the jQuery function.  Use jQuery functions for things like the JavaScript `nextElementSibling`, `getAttribute()`, `setAttribute()`, etc.

For example:
```
    $("<p>").text("Click a menu item to view a picture.").insertBefore($espresso);

    // The line above is the same as the following:
    //var $p = $("<p>");
    //$p.text("Click a menu item to view a picture.");
    //$p.insertBefore($espresso);
```
    
