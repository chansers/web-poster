//this is the same as the script in the index file, it's just here for show because it doesn't work when I link to this file from the index

// CLICK CIRCLES
addEventListener('click', createBox);
      function createBox(event) {
          var box = document.createElement('div');
          box.style.visibility="visible";
          box.className = 'box';
          box.style.left = event.pageX + 'px';
          box.style.top = event.pageY + 'px';
          document.body.appendChild(box);
      }
      //used this to help me code this function: https://stackoverflow.com/questions/52798687/make-a-button-to-create-boxes

  // BUTTON FUNCTIONS
    $(document).ready(function () {
      let expanded = false;

      $('#mainButton').click(function () {
        const button = $(this);

        if (!expanded) {
          // expand main button
          button.animate({
            width: '7000px',
            height: '7000px',
            top: '10px',
            right: '10px',
          }, 800, 'linear', function () {
            expanded = true;
          });

          // show nav buttons
          $('.nav-button').each(function (index) {
            $(this).delay(500 * index).queue(function () {
              $(this).addClass('visible').dequeue();
            });
          });
        } else {
          // reverse animations
          button.animate({
            width: '80px',
            height: '80px',
            top: '50%',
            right: '50%',
          }, 800, 'linear', function () {
            expanded = false;
          });

          $(".box").hide();
          $('.nav-button').removeClass('visible');
          $('#speakers section').removeClass('active'); 
        }
      });

      //nav buttons click handler
      $('.nav-button').click(function () {
        const speakerId = $(this).data('speaker');
        // hide active speaker section
        $('#speakers section.active').removeClass('active');
        // show selected speaker section
        $('#speakers section#' + speakerId).addClass('active');
      });
    });
