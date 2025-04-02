addEventListener('click', createBox);

function createBox(event) {
    var box = document.createElement('div');
    box.style.visibility="visible";
    box.className = 'box';
    box.style.left = event.pageX + 'px';
    box.style.top = event.pageY + 'px';
    document.body.appendChild(box);
}


   $(document).ready(function () {
      let expanded = false;

      // Main button click handler
      $('#mainButton').click(function () {
        const button = $(this);

        if (!expanded) {
          // Expand animation and title animation
          button.animate({
            width: '7000px',
            height: '7000px',
            top: '10px',
            right: '10px',
          }, 800, 'linear', function () {
            expanded = true;
          });

          // Title animations
          //$('#titles h1').animate({
            //opacity: 1
          //}, 1000);

          //$('#titles h2').animate({
            //opacity: 1
          //}, 1000);

          // Navigation button appearance
          $('.nav-button').each(function (index) {
            $(this).delay(10 * index).queue(function () {
              $(this).addClass('visible').dequeue();
            });
          });
        } else {
          // Reverse the animations
          button.animate({
            width: '80px',
            height: '80px',
            top: '50%',
            right: '50%',
          }, 800, 'linear', function () {
            expanded = false;
          });

          //$('#titles h1').animate({
            //opacity: 0
          //}, 800);

          //$('#titles h2').animate({
            //opacity: 0
          //}, 800);

          $(".box").hide();
          $('.nav-button').removeClass('visible');
          $('#speakers section').removeClass('active'); 
        }
      });

      // Navigation buttons click handler
      $('.nav-button').click(function () {
        const speakerId = $(this).data('speaker');

        // hide any currently active speaker section
        $('#speakers section.active').removeClass('active');

        // show the selected speaker section
        $('#speakers section#' + speakerId).addClass('active');
      });
    });

