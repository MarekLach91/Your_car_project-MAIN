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
    
//    
//    
//    
//    
//    //    błąd przy chceckboxach 
//    
//    
//        
////    $(".choice").datepicker({dateFormat: 'dd/mm/yy',
////     onSelect: showDays                       });
////    $(".choice-time").timepicker();
////    
////    
////    function showDays() {
////    var start = $("[name = 'date-out']").datepicker('getDate');
////    var end = $("[name = 'date-in']").datepicker('getDate');
////    if (!start || !end) return;
////    var days = (end - start) / 1000 / 60 / 60 / 24;
////       
////    $('#totaldays').val(days); 
//    
//        
     var form = document.querySelector('form');
    console.log(form);
    var price = document.querySelector("#innercost");
    console.log(price);
    
    var cityVal= form.elements[0].options;
        var outDate = form.elements[1].value;
        var outHour = form.elements[2].value;
        var inDate = form.elements[3].value;
        var inHour = form.elements[4].value;
        var typeCar = form.elements[5].options;
    
    
        console.log(cityVal, outDate, outHour, inDate, inHour, typeCar);
    
    

    
   
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
    
 
    
        var cityVal= form.elements[0].options;
        var outDate = form.elements[1].value;
        var outHour = form.elements[2].value;
        var inDate = form.elements[3].value;
        var inHour = form.elements[4].value;
        var typeCar = form.elements[5].options;
    
        
//        PRICE FOR CAR
        var classA = 20;
        var classB = 25;
        var classC = 30;
        var classCkombi = 32;
        var classD = 35;
        var classDkombi = 40;
        var classE = 45;
        var classSUV = 50;
        var classSUVpro = 60;
        var classF = 70;
       

        var allcost = 0;
        
        
        var sendForm = 0;
        price.innerText = ""; //info about cost
        
         
        //city option 
        if (typeCar.selectedIndex == null ) {
            sendForm = 0;
            console.log('fupaaaaaaaa');
        } else if (typeCar.selectedIndex == 0 && days * classA > 0 ) { 
            price.innerText = days * classA + '$';
            sendForm += 1;
        }  else if (typeCar.selectedIndex == 1 && days * classA > 0) { 
            price.innerText = days * classB + '$ ';
            sendForm += 1;
        }  else if (typeCar.selectedIndex == 2 && days * classA > 0) { 
            price.innerText = days * classC + '$';
            sendForm += 1;
        }  else if (typeCar.selectedIndex == 3 && days * classA > 0) { 
            price.innerText = days * classCkombi + '$';
            sendForm += 1;
        }  else if (typeCar.selectedIndex == 4 && days * classA > 0) { 
            price.innerText = days * classD + '$';
            sendForm += 1;
        }  else if (typeCar.selectedIndex == 5 && days * classA > 0) { 
            price.innerText = days * classDkombi + '$';
            sendForm += 1;
        }  else if (typeCar.selectedIndex == 6 && days * classA > 0) { 
            price.innerText = days * classE + '$';
            sendForm += 1;
        } else if (typeCar.selectedIndex == 7 && days * classA > 0)  { 
            price.innerText = days * classSUV + '$';
            sendForm += 1;
        } else if (typeCar.selectedIndex == 8 && days * classA > 0) {
            price.innerText = days * classSUVpro + '$';
            sendForm += 1;
        }  else if (typeCar.selectedIndex == 9 && days * classA > 0) { 
            price.innerText = days * classF + '$';
            sendForm += 1;
        }  else if (typeCar.selectedIndex == 10 && days * classA > 0) { 
            price.innerText = days * classF + '$';
            sendForm += 1;
        }  else if (typeCar.selectedIndex == 11 && days * classA > 0 ) { 
            price.innerText = days * classF + '$';
            sendForm += 1;
        } 

     });
       
        
        
   });
//    
//
//    
//
//
//    
//    
//    
//$(".carlink").click(function(event) {
//  event.preventDefault();
//    });
//    
//
//    
//    $("li").click(function(event) {
//  event.preventDefault();
//    });
//
////form to send
//       
//    
//         
//
//
//    
//        
////        if (inDate.value - ) {
////            sendForm = 0;
////            console.log('fupaaaaaaaa');
////        } else if (typeCar.selectedIndex == 0) { 
////            price.innerText = classA + '$/per day';  + '$/per day';
////            sendForm += 1;
//        
//        
//    
//        
//  
//        
////        //surname check
////        if (surnameVal.length > 5) {
////            sendForm += 1;
////        } else {
////            error.innerHTML += 'Nazwisko musi być dluzsze niz 5 znakow!<br>';
////            sendForm = 0;
////        }
////
////        // password check
////        if (pass1Val === pass2Val) {
////            sendForm += 1;
////        } else {
////            error.innerHTML += 'Hasła się nie zgadzają!<br>';
////            sendForm = 0;
////        }
////
////        //agree check
////        if (agreeVal) {
////            sendForm += 1;
////        } else {
////            error.innerHTML += 'Zaznacz regulamin!<br>';
////            sendForm = 0;
////        }
////
////        if (sendForm >= 4) {
////
////            /*
////            console.log(form.elements);
////            for (var i = 0; i < form.elements.length-1; i++) {
////                    console.log(form.elements[i].value);
////            }
////            */
////            //Wersja alternatywna dla wyswietlania danych formularza w konsoli
////
////            console.log("Name: " + nameVal, "Surname: " + surnameVal, "pass1: " + pass1Val, "pass2: " + pass2Val, "Agree: " + agreeVal);
////
////
////            error.innerHTML = ""; //reset error
////            suc.innerText = "Rejestracja się udała!";
////        }
////
////    });
//
//    
//    
////        var agreeVal = form.elements[4].checked;
//    
//    
//    
//    
//    



function myFunction2(){
 
    
   
    
    var cartype = document.getElementById("carselect").options[document.getElementById("carselect").selectedIndex].text;
    console.log(cartype);
var innercar =  document.getElementById("cartype").innerText ="Car: " + cartype;
    

}


function myFunction(){
    var citytype = document.getElementById("cityselect").options[document.getElementById("cityselect").selectedIndex].text;
var innercity =  document.getElementById("city").innerText ="City: " +  citytype;
};


function myFunction3(chk) {
var targetElement = document.getElementById('secdriver');
console.log(targetElement)
  if (chk.checked){
     targetElement.innerHTML= "Second driver";
  }
  else{
    targetElement.innerHTML=" "
  }
}

function myFunction4(chk) {
var targetElement = document.getElementById('fullins');
console.log(targetElement)
  if (chk.checked){
     targetElement.innerHTML= "Full insurance";
  }
  else{
    targetElement.innerHTML=" "
  }
}

function myFunction5(chk) {
var targetElement = document.getElementById('crossborder');
console.log(targetElement)
  if (chk.checked){
     targetElement.innerHTML= "Cross Border";
  }
  else{
    targetElement.innerHTML=" "
  }
}

function myFunction6(chk) {
var targetElement = document.getElementById('gps');
console.log(targetElement)
  if (chk.checked){
     targetElement.innerHTML= "Navigation GPS";
  }
  else{
    targetElement.innerHTML=" "
  }
}
function myFunction7(chk) {
var targetElement = document.getElementById('childseat');
console.log(targetElement)
  if (chk.checked){
     targetElement.innerHTML= "Child seat";
  }
  else{
    targetElement.innerHTML=" "
  }
}
function myFunction8(chk) {
var targetElement = document.getElementById('roofrack');
console.log(targetElement)
  if (chk.checked){
     targetElement.innerHTML= "Roof rack";
  }
  else{
    targetElement.innerHTML=" "
  }
}
