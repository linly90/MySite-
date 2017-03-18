(function slider (){
    var controls = document.querySelectorAll('.controls');


    var slides = document.querySelectorAll('#slides .slide');
    var currentSlide = 0;


    function nextSlide(){
        goToSlide(currentSlide+1);
    }

    function previousSlide(){
        goToSlide(currentSlide-1);
    }

    function goToSlide(n){
        slides[currentSlide].className = 'slide';
        currentSlide = (n+slides.length)%slides.length;
        slides[currentSlide].className = 'slide showing';
    }


    var next = document.getElementById('next');
    var previous = document.getElementById('previous');

    next.onclick = function(){

        nextSlide();
    };
    previous.onclick = function(){

        previousSlide();
    };

}());









 (function colorMenu() {
        document.addEventListener("scroll", colorNav);

        function colorNav(){
            var nav =  document.querySelector('nav');

            if(window.pageYOffset > 100){
                nav.style.backgroundColor = ' rgba(62, 40, 40, 1)';
                nav.style.transition = '2s background-color';
            }
            else if(window.pageYOffset < 200)
                nav.style.backgroundColor = ' rgba(109, 69, 70, .6)';
                nav.style.transition = '2s background-color';
            }
    }());










(function modals (){


var id_modal = '#myModal';

var testFunction = function (id_modal) {
    if (document.body.clientWidth <= 768){

        $('.modal_cont').removeAttr('data-target')

    }
    else {
        $('.modal_cont').attr('data-target', id_modal)
    }
};








$('.img_border').on('click', function () {

    if (event.currentTarget.id == 'b1') {
        testFunction(id_modal);
    }
    else if (event.currentTarget.id == 'b2'){
        testFunction(id_modal + '2');
    }

    else {
        testFunction(id_modal + '3');
    }
})



}())











document.addEventListener("scroll", anim_block2);
function anim_block2() {


    var block2Item = document.querySelector('.block2_cont');

    if (window.pageYOffset >= 300 && document.body.clientWidth >= 768) {
        block2Item.setAttribute('class', 'block2_cont fade-up');
        block2Item.style.opacity = '1';

    }


    else if (document.body.clientWidth < 768) {
        block2Item.style.opacity = '1';
    }

}





document.addEventListener("scroll", anim_block3);
function anim_block3() {


    var Item = document.querySelector('.menu_more');

    if (window.pageYOffset >= 1000 && document.body.clientWidth >= 768) {
        Item.setAttribute('class', 'menu_more fade-left');
        Item.style.opacity = '1';

    }


    else if (document.body.clientWidth < 768){
        Item.style.opacity = '1';
    }

}







document.addEventListener("scroll", block4Cont);
function block4Cont() {


    var Item = document.querySelector('.block4_cont_main');

    if (window.pageYOffset >= 1400 && document.body.clientWidth >= 768) {
        Item.setAttribute('class', 'block4_cont_main fade-up');
        Item.style.opacity = '1';

    }


    else if (document.body.clientWidth < 768){
       Item.style.opacity = '1';
    }

}






document.addEventListener("scroll", block4Bloq);
function block4Bloq() {


    var Item = document.querySelector('#block4_blockquote');

    if (window.pageYOffset >= 1790 && document.body.clientWidth >= 768) {
        Item.setAttribute('class', 'fade-left');
        Item.style.opacity = '1';

    }


    else if (document.body.clientWidth < 768){
        Item.style.opacity = '1';
    }

}



document.addEventListener("scroll", block6);
function block6() {


    var Item = document.querySelector('.block6_item_content');

    if (window.pageYOffset >= 2750 && document.body.clientWidth >= 768) {
        Item.setAttribute('class', 'block6_item_content fade-left');
        Item.style.opacity = '1';

    }


    else if (document.body.clientWidth < 768){
        Item.style.opacity = '1';
    }

}



document.addEventListener("scroll", getTouch);
function getTouch() {


    var ItemName = document.querySelector('#InputFirstName');
    var ItemPhone = document.querySelector('#InputPhone');

    var ItemNameLast = document.querySelector('#InputName');
    var ItemMail = document.querySelector('#InputMail');

    var ItemMessage = document.querySelector('#InputMess');



    if (window.pageYOffset >= 4100 && document.body.clientWidth >= 768) {
        ItemName.setAttribute('class', ' fade-left');
        ItemName.style.opacity = '1';

        ItemPhone.setAttribute('class', ' fade-left');
        ItemPhone.style.opacity = '1';

        ItemNameLast.setAttribute('class', 'fade-right');
        ItemNameLast.style.opacity = '1';

        ItemMail.setAttribute('class', 'fade-right');
        ItemMail.style.opacity = '1';

        ItemMessage.setAttribute('class', 'fade-up');
        ItemMessage.style.opacity = '1';



    }


    else if (document.body.clientWidth < 768){
        ItemName.style.opacity = '1';
        ItemPhone.style.opacity = '1';
        ItemNameLast.style.opacity = '1';
        ItemMessage.style.opacity = '1';
        ItemMail.style.opacity = '1';




    }

}
