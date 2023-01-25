import owl from 'owl.carousel'

function interview() {
    $("#vacancy-slider").owlCarousel({
        items:1,
        loop:true,
        margin:30,
        merge:true,
        slideBy: 1,
        nav: true,
        animateOut: 'fadeOut',
        animateInt: 'fadeIn',
        smartSpeed:1050,
        navText: ['<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="35px"><path fill-rule="evenodd"  stroke="rgb(255, 255, 255)" stroke-width="4px" stroke-linecap="butt" stroke-linejoin="miter" fill="none" d="M16.577,30.440 L2.687,16.550 L16.577,2.660 "/></svg>','<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="35px"><path fill-rule="evenodd"  stroke="rgb(255, 255, 255)" stroke-width="4px" stroke-linecap="butt" stroke-linejoin="miter" fill="none" d="M5.798,2.654 L19.688,16.544 L5.798,30.434 "/></svg>']
    });
}
interview();

function uploadFile() {
    $("#file-input").change( function () { //выбираем input[type=file] и добавляем метод .change, который запускает функцию
        let fileList = $(this).val().replace(/.*\\/, ""); //выделяет имя файла
        $("#file-name").html(fileList);//добавляем название файла в нужный спан
        $(".form__file-name, .form__file-remove").addClass('is-active');  //добавляем класс для отображения 
        $(".form__btn-label").addClass('is-disabled'); //добавляем класс для отображения 
    });

    $('.form__file-remove').on('click', function () {
        $("#file-input").val('');//очищаем значение input[type=file]
        $(".form__file-name, .form__file-remove").toggleClass('is-active');//убираем классы для отображения скрытых элементов
        $(".form__btn-label").toggleClass('is-disabled');//убираем классы для отображения скрытых элементов
    })
}
uploadFile();

$('.vacancy-content__application-text').click(function(e) {
    e.preventDefault();

    let $this = $(this);
    $this.find('.vacancy-content__application-arrow').toggleClass('transform');

    if ($('.vacancy-content__form').hasClass('form--show')) {
        $('.vacancy-content__form').slideToggle(350);
    } else {
        $('.vacancy-content__form').slideToggle(350);
    }
});

$(function(){
    $('.vacancy-content__application-display').on('click', function(){
        $(this).toggleClass('transform');
    });
});