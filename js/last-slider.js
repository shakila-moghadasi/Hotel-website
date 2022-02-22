$(document).ready(function() {  
          
    $(".circle-A1").click(function(){
      $(".cart-1").css({
        "visibility" : "visible"
      });
      $(".cart-2").css({
        "visibility" : "hidden"
      });
      $(".cart-3").css({
        "visibility" : "hidden"
      });
      $(".cart-4").css({
        "visibility" : "hidden"
      });
      $(".cart-5").css({
        "visibility" : "hidden"
      });
      $(".cart-6").css({
        "visibility" : "hidden"
      });
    });

    $(".circle-A2").click(function(){
      $(".cart-2").css({
        "visibility" : "visible"
      })
      $(".cart-1").css({
        "visibility" : "hidden"
      });
      $(".cart-3").css({
        "visibility" : "hidden"
      });
      $(".cart-4").css({
        "visibility" : "hidden"
      });
      $(".cart-5").css({
        "visibility" : "hidden"
      });
      $(".cart-6").css({
        "visibility" : "hidden"
      });
    });

    $(".circle-A3").click(function(){
      $(".cart-3").css({
        "visibility" : "visible"
      });
      $(".cart-2").css({
        "visibility" : "hidden",
      });
      $(".cart-1").css({
        "visibility" : "hidden",
      });
      $(".cart-4").css({
        "visibility" : "hidden",
      });
      $(".cart-5").css({
        "visibility" : "hidden"
      });
      $(".cart-6").css({
        "visibility" : "hidden"
      });
    });

    $(".circle-A4").click(function(){
      $(".cart-4").css({
        "visibility" : "visible"
      });
      $(".cart-2").css({
        "visibility" : "hidden"
      });
      $(".cart-1").css({
        "visibility" : "hidden"
      });
      $(".cart-3").css({
        "visibility" : "hidden"
      });
      $(".cart-5").css({
        "visibility" : "hidden"
      });
      $(".cart-6").css({
        "visibility" : "hidden"
      });
    });
    $(".circle-A5").click(function(){
      $(".cart-5").css({
        "visibility" : "visible"
      });
      $(".cart-1").css({
        "visibility" : "hidden"
      });
      $(".cart-2").css({
        "visibility" : "hidden"
      });
      $(".cart-3").css({
        "visibility" : "hidden"
      });
      $(".cart-4").css({
        "visibility" : "hidden"
      });
      $(".cart-6").css({
        "visibility" : "hidden"
      });
    });
    $(".circle-A6").click(function(){
      $(".cart-6").css({
        "visibility" : "visible"
      });
      $(".cart-1").css({
        "visibility" : "hidden"
      });
      $(".cart-2").css({
        "visibility" : "hidden"
      });
      $(".cart-3").css({
        "visibility" : "hidden"
      });
      $(".cart-4").css({
        "visibility" : "hidden"
      });
      $(".cart-5").css({
        "visibility" : "hidden"
      });
    });
  }); 