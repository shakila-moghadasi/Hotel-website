$(document).ready(function(){
    $(".menu").click(function(){
        $('#mySidenav').css({
          width:"300px",
        }); 
        $(".mainbar").css({
          marginLeft:"-250px",
        });
        $(".men-right").css({
          visibility: "hidden",
        })
      }); 
      $(".closebtn").click(function(){
        $("#mySidenav").css({
          width:0,
        });
        $(".mainbar").css({
          marginLeft:0,
        });
        $(".men-right").css({
          visibility: "visible",
        })
      });
    });