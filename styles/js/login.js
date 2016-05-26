
$('.number').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-paper-plane').addClass("next");
    } else {
      $('.icon-paper-plane').removeClass("next");
    }
  }
);

$('.next-button').hover(
  function(){
    $(this).css('cursor', 'pointer');
  }
);

$('.next-button.number').click(
  function(){
    /*alert(87878);*/
   /* console.log("Something");*/
  
  
          $(".back-up").css("display", "inline");

          $('.number-section').addClass("fold-up");
          $('.password-section').removeClass("folded");
        


  }
);
   
$('.back-up').click(function(){
     $('.number-section').removeClass("fold-up");
    $('.password-section').addClass ("folded");
    });


 $('.number').keypress(function(e){
        if(e.which == 13){//Enter key pressed
          /*  alert(45555555);*/
            $('.next-button.number').click();//Trigger search button click event
        }
    });


 $('.number').keyup(function(){
     /*   alert(45555555);*/
            /* $(".back-up").css("display", "none");*/
            var num= $("#number").val();
            var numlength= num.toString().length;
          if(numlength<=10){
            
                 $("#spanNum").css("display", "none");
                /* $('.next-button.number').click();*/

             } else{
           
              $("#number").focus()
             $("#spanNum").css("display", "inline");
             }
        
    });


$('.password').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-lock').addClass("next");
    } else {
      $('.icon-lock').removeClass("next");
    }
  }
);

$('.next-button').hover(
  function(){
    $(this).css('cursor', 'pointer');
  }
);

$('.next-button.password').click(
  function(){
   /* console.log("Something");*/
  /*  alert(212);*/
   /* $('.password-section').addClass("fold-up");
    $('..success').removeClass("marginTop" , 0);*/

       $( "#myform" ).submit();
     /*return true;*/
  }
);

$('.password').keypress(function(e){
        if(e.which == 13){//Enter key pressed
          /*  alert(45555555);*/
            $('.next-button.password').click();//Trigger search button click event
        }
    });

/*$('.repeat-password').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-repeat-lock').addClass("next");
    } else {
      $('.icon-repeat-lock').removeClass("next");
    }
  }
);*/

/*$('.next-button.password').click(
  function(){
    console.log("Something");
    $('.password-section').addClass("fold-up");
    $('.success').css("marginTop", 0);
  }
);*/