var sign = document.querySelector('.btn');

sign.addEventListener('click', function(){

    var email = document.getElementById('gmail').value;
    var eml = document.getElementById('gmail');
    var password  = document.getElementById('password').value;
    var word = document.getElementById('password');
    var pass = document.getElementById('pass');
    
    if(email == '') {
        eml.style.borderColor = 'red';
        eml.style.outlineColor = 'red';
        var nil = document.getElementById('mail');
        nil.style.visibility = 'visible';
    }
    if (password == '') {
        word.style.borderColor = 'red';
        word.style.outlineColor = 'red';
        pass.style.visibility = 'visible';
    } 
    else {
        alert('done')
    }
});

function demo() {
    var form = document.getElementById('form');
    var email = document.getElementById('gmail').value;
    var eml = document.getElementById('gmail');
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var nil = document.getElementById('mail');
    eml.style.borderColor = 'black';


    if (email.match(pattern)) {
        eml.style.outlineColor = 'green';
        form.classList.add('valid');
        form.classList.remove('invalid');
        nil.style.visibility = 'hidden';
    }
    else {
        nil.innerHTML = 'invalid email address';
        eml.style.outlineColor = 'red';
        form.classList.add('invalid');
        form.classList.remove('valid');
        nil.style.visibility = 'visible';
    }

    if(email == '') {
        eml.style.borderColor = 'red';
        eml.style.outlineColor = 'red';
        var nil = document.getElementById('mail');
        nil.style.visibility = 'visible';
        nil.innerHTML = '* Your Email Address is Required'
    }
}


var wd = document.getElementById('password');

wd.addEventListener('keydown', function() {
    var password  = document.getElementById('password').value;
    pass.style.display = 'none';
    var word = document.getElementById('password');
    word.style.borderColor = 'black';
    var storage = document.getElementById('store');

    if (password.length == 0 || password.length < 2) {
        word.style.outlineColor = 'red';
        storage.classList.add('invalid');
        storage.classList.remove('valid');
    } else {
        word.style.outlineColor = 'green';
        storage.classList.add('valid');
        storage.classList.remove('invalid');
        
    }
})



