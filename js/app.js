$(function () {
    
    
    console.log('DOM!');
      var list = document.getElementsByClassName('list')[0],
        mobile = window.matchMedia("(min-width: 400px)");
 
    mobile.addListener(function (mobile) {
        if (mobile.matches) {
            list.classList.add('show');
        } else {
            list.classList.remove('show');
        }
    });
 
    window.addEventListener('DOMContentLoaded', function () {
        document.getElementById('icon-menu').addEventListener('click', function () {
            list.classList.toggle('show');
        });
    });
    
   
    
    
    
    var $menu = $('.sec-two');
    var $open = $menu.find('.expand');
    var $close = $menu.find('.hide-a')
    $open.on('click', function (event) {
        event.preventDefault();
        var $this = $(this);
        var $cont = $this.parent().next();
        $cont.slideDown();
        console.log($cont);
    });
    var $close = $menu.find('.close');
    $close.on('click', function (event) {
        event.preventDefault();
        var $this = $(this);
        $this.parent().slideUp();
    });
});