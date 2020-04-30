
$(document).ready(function(){

    console.log($(window).innerWidth() + 'px');

    $(".contactbody").hide();

    $(".feedback").click(function(){
        $("body").css("overflow-y", "hidden");
        $(".contactbody").css("overflow-y", "auto");
        $(".contactbody").css("background", "#6f6f6f");
        $(".contactbody").css("height", $(window).height());
        
        $(".contactbody").animate({left: '0%'}, 200);
        $(".contactbody").css('top','0%');
        

        $(".contactbody").show();

        $(".feedback-body").animate({left: '10%'}, 100);
    });

    $(".fa-arrow-left").click(function(){
        $("body").css("overflow-y", "scroll");
        
        
       // $(".contactbody").css("background", "transparent");
        

        $(".feedback-body").animate({left: '-85%'}, 100);
        // $(".contactbody").animate({top: '-105%'}, 1500);
        $(".contactbody").fadeOut();
    });


    $(".feedbackII").click(function(){
        window.scroll({
            top: 0, 
            left: 0
          });
        
        $(".contactbody").css("overflow-y", "auto");
        $(".contactbody").css("background", "#6f6f6f");
        $(".contactbody").css("height", $(window).height());
        
        $(".contactbody").animate({left: '0%'}, 400);
        $(".contactbody").css('bottom','0%');
        

        $(".contactbody").show();

        $(".feedback-body").animate({left: '10%'}, 200);

        $(this).mouseleave( function(){
            setTimeout( function(){
              $("body").css('overflow-y', 'hidden');
            },700);
         });
        
    });

});