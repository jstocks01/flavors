$(document).ready(function() {
  var flavors = ["vanilla", "lime", "rocky road", "cookies and cream", "cookie dough", "chocolate", "blackberry"]; 
  flavors.forEach(function(flavor) {
    $("ul").append("<li>" + flavor + "</li>");
  })
})