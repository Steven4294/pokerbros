if (document.referrer) {
    const url = document.referrer;
    const ref = url.match(/:\/\/(.[^/]+)/)[1];
    console.log(`ref ${ref}`)
} else { console.log(`no referal`) }

console.log(`app.js loaded`)
const baseURL = "https://" + window.location.host
// const baseURL = "http://localhost:8000"
console.log(window.location.href)
$('#form-2').submit(function ( e ) {
  const message = $('#form-2 #message').val()
  var ref = ''
  if (document.referrer) {
      const url = document.referrer;
      ref = url.match(/:\/\/(.[^/]+)/)[1];
  }

  var settings = {
      "url": `${baseURL}/api/message`,
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Content-Type": "application/json"
      },
      "data": JSON.stringify({
          "message":message,
          "ref":ref
      }),
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
    });
    $('#form-2 #message').val() = ''

  e.preventDefault();
})

$('#form-1').submit(function ( e ) {
  console.log('subscribed 2')

    var data, xhr;
    const email = $('#form-1 #email').val()
    var ref = ''
    if (document.referrer) {
        const url = document.referrer;
        ref = url.match(/:\/\/(.[^/]+)/)[1];
    }

    var settings = {
        "url": `${baseURL}/api/signup`,
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "email":email,
            "ref":ref
        }),
      };

      $.ajax(settings).done(function (response) {
        console.log(response);
      });
      $('#form-1 #email').val() = ''

    e.preventDefault();
});

var pillButtonOnText = $('.pill-button-selection_on');
var pillButtonOffText = $('.pill-button-selection_off');
var pillButtonHighlight = $('.pill-button-highlight');
var pillButtonOnTextWidth = pillButtonOnText.outerWidth();
var pillButtonOffTextWidth = pillButtonOffText.outerWidth();
var pillButtonOnTextPosition = pillButtonOnText.position();
var pillButtonOffTextPosition = pillButtonOffText.position();
var pillButtonInput = $('.pill-button-input');

var isChecked = false

$('.pill-text').show()
$('.pill-text-alt').hide()
$('.pillButtonHighlight').css('width', pillButtonOnTextWidth);

$('.pill-button-selection').click(function() {
  if(!$(this).hasClass('pill-button-selection_active')) {
    $('.pill-button-selection').removeClass('pill-button-selection_active');
    $(this).addClass('pill-button-selection_active');

    if($(this).hasClass('pill-button-selection_off') && pillButtonInput.is(":checked")) {
      pillButtonInput.attr('checked', false);
      pillButtonHighlight.css({
        'width': pillButtonOffTextWidth,
        'left': pillButtonOffTextPosition.left
      });
      isChecked = true
      $('.pill-text').hide()
      $('.pill-text-alt').show()

    } else {
      pillButtonInput.attr('checked', true);
      pillButtonHighlight.css({
        'width': pillButtonOnTextWidth,
        'left': pillButtonOnTextPosition.left
      });
      isChecked = false
      $('.pill-text').show()
      $('.pill-text-alt').hide()

    }
    console.log(`checked ${isChecked}`)
  }
});

if(pillButtonInput.is(":checked")) {
  console.log('is checked');
  pillButtonHighlight.css('width', pillButtonOnTextWidth);
} else {
  console.log('is not checked');

  pillButtonHighlight.css('width', pillButtonOffTextWidth);
}
