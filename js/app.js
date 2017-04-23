document.addEventListener("DOMContentLoaded", function(){
    
    console.log('dom');
    
   // hamburger menu
    
    var menu = document.getElementsByClassName('show-hide-menu');
    console.log(menu);
    
    
    
    
    
    
    
    
    
    
    
    
    
  // hiding description
  var carsphoto = document.getElementsByClassName('cars')[0];


  function hide(){
    var elementToHide = this.getElementsByClassName('carmodel')[0];
    elementToHide.style.display = "none";
  }

  function show(){
    var elementToHide = this.getElementsByClassName('carmodel')[0];
    elementToHide.style.display = "block";
  }

  carsphoto.addEventListener("mouseover", hide);
  carsphoto.addEventListener("mouseout", show);
    
});