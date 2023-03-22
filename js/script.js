var tgg = document.querySelector('.toggle');
tgg.addEventListener('click', () => {
    var mobile = document.querySelector('.nav-mobile');
    mobile.classList.toggle('mobile-toggler');

    var first = document.querySelector('.first-line');
    var second = document.querySelector('.second-line');
    var third = document.querySelector('.third-line');

    first.classList.toggle('firstr');
    third.classList.toggle('thirdr');
    second.classList.toggle('secondr');

});

var navbar = document.querySelector('.nav');
var sticky = navbar.offsetTop;

window.addEventListener('scroll', () => {
    if(window.pageYOffset >= sticky){
      navbar.classList.add('sticky')
    }
    else{
      navbar.classList.remove('sticky');

    }
})

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.querySelector('.back-to-top').classList.add('active')
    }
    else{
      document.querySelector('.back-to-top').classList.remove('active')

    }
})



