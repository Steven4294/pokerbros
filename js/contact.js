if (document.referrer) {
    const url = document.referrer;
    const ref = url.match(/:\/\/(.[^/]+)/)[1];
    console.log(`ref ${ref}`)
} else { console.log(`no referal`) }

// const baseURL = "https://sentinel-Natural 8.herokuapp.com/"
//const baseURL = "http://localhost:8000"
const baseURL = "https://" + window.location.host
// console.log(window.location.host)
console.log(baseURL)

$('form').submit(function ( e ) {
    // var data, xhr;
    console.log('contact form submitted')
    const email = $('form #email_first').val()
    const message = $('form #message').val()

    var ref = ''
    if (document.referrer) {
        const url = document.referrer;
        ref = url.match(/:\/\/(.[^/]+)/)[1];
    }

    var settings = {
        "url": `${baseURL}/api/contact`,
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "email": email,
            "message": message,
            "ref":ref
        }),
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    $('form #email_first').val() = ''
    $('form #message').val() = ''

    e.preventDefault();
});
