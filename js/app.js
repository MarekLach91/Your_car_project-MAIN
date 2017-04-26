$(function () {
    console.log('DOM!');
    var $menu = $('.show-hide-menu');
    var $hidelist = $menu.find('.list');
    $menu.on('click', function (event) {
        console.log('działa');
        $hidelist.slideDown();
    });
    var $mainsec = $('.sec-two');
    var $open = $mainsec.find('.expand');
    $open.on('click', function (event) {
        event.preventDefault();
        var $this = $(this);
        var $cont = $this.parent().next();
        $cont.slideDown();
        console.log($cont);
    });
    var $close = $mainsec.find('.close');
    $close.on('click', function (event) {
        event.preventDefault();
        var $this = $(this);
        $this.parent().slideUp();
    });
    $(".choice").datepicker({dateFormat: 'dd/mm/yy'});
    $(".choice-time").timepicker();
    
//    
//    $(".expand").on('click', function(event2){
//         event2.preventDefault();
//         var $this = $(this);
//        var $cont = $this.parent().next();
//        $cont.slideDown();
//     })
    
       console.log($(".choice").attr('option'));
   
    
    
    
    
    
    
}); 