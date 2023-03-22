var arrow = document.querySelector('.arrow');
arrow.addEventListener('click', () => {

    var menus = document.querySelectorAll('.tag');
    menus.forEach(menu => {
        menu.classList.toggle('overall-sub');
    });

    var jImage = document.querySelector('.changer-menu');
    jImage.classList.toggle('changer-sub');

    var jImage = document.querySelector('.footer');
    jImage.classList.toggle('footer-sub')

    var rD = document.querySelector('.menu');
    rD.classList.toggle('menu-sub')

    var jImage = document.querySelector('.dash-clock');
    jImage.classList.toggle('dash-clock-sub');

    var arrowS = document.querySelector('.arrow');
    arrowS.classList.toggle('arrow-sub');

})


var show = document.querySelector('.show');
show.addEventListener('click', () => {

    var rD = document.querySelector('.menu');
    rD.classList.toggle('menu-sub');

    var jImage = document.querySelector('.dash-clock');
    jImage.classList.toggle('dash-clock-sub');

    var arrow = document.querySelector('.arrow');
    arrow.classList.toggle('arrow-sub');


    var jImage = document.querySelector('.changer-menu');
    jImage.classList.toggle('changer-sub')

    var jImage = document.querySelector('.footer');
    jImage.classList.toggle('footer-sub')

    var menus = document.querySelectorAll('.tag');
    menus.forEach(menu => {
        menu.classList.toggle('overall-sub');
    });
});
var tgg = document.querySelector('.toggle');
tgg.addEventListener('click', () => {
    var mobile = document.querySelector('.mobile-container');
    mobile.classList.toggle('mobile-container-toggler');

    var first = document.querySelector('.first-line');
    var second = document.querySelector('.second-line');
    var third = document.querySelector('.third-line');

    first.classList.toggle('firstr');
    third.classList.toggle('thirdr');
    second.classList.toggle('secondr');
    

});