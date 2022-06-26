
    $(document).ready(function () {
        $('.navbar-light .dmenu').hover(function () {
          $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        }, function () {
          $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
        });
      });
  
      $(document).ready(function () {
        $(".megamenu").on("click", function (e) {
          e.stopPropagation();
        });
      });

      $('.carousel').carousel({
        interval: 2000
      })


     
    var mybutton = document.getElementById("myBtn");

  
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

   
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }