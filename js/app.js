$(function(){
    
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
        document.getElementById('show-hide-menu').addEventListener('click', function () {
            list.classList.toggle('show');
        });
    });
  
  var $films = $('.sec-two');
    var $open = $films.find('.expand');
    var $close = $films.find('.hide-a')
    $open.on('click', function(event){
        event.preventDefault();
        
        var $this = $(this);
        var $cont = $this.parent().next();
        $cont.slideDown();
        
        
        console.log($cont);
    });
    
    var $close = $films.find('.close');
    $close.on('click', function(event){
        event.preventDefault();
        var $this = $(this);
        $this.parent().slideUp();
    });
          
    
    
    
    
});


