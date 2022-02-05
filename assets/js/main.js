var fbButton = document.getElementById('facebook-button');
var twitter = document.getElementById('twitter-button')
 
var url = window.location.href;

fbButton.addEventListener('click', function () {
  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url,
    'facebook-share-dialog',
    'width=800,height=600'
  );
  return false;
});

twitter.addEventListener('click', function () {
  window.open('https://twitter.com/share?' + url,
    'facebook-share-dialog',
    'width=800,height=600'
  );
  return false;
});

$(document).ready(function(){
    $('#email-button').each(function(){ 
        var oldUrl = $(this).attr("href"); // Get current url
        var heading = $('h1').text().replace(/\s/g, ' ')
        var newUrl = oldUrl.replace(/websiteURL/g, window.location.href).replace(/headertext/g,heading); // Create new url
        $(this).attr("href", newUrl); // Set herf value
    });
});



document.addEventListener("scroll", function () {
  
    // console.log(document.body.scrollHeight)
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.querySelector('.social-share').classList.remove('d-show')
  } else {
    document.querySelector('.social-share').classList.add('d-show')
  }
  
 
  
  
  })