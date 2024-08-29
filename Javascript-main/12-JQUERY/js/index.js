
        // //JQUERY SHORCUT DOLLAR SIGN
        // //We use this to select h1 to change the css to RED


        // //BEFORE
        // //document.querySelector 
        // //AFTER
        // //$

        // ///////////////////////////
        // //ADDS CLASS TO THE H1
        // //can add CSS
        // $("h1").addClass("big-title margin-50");

        // //YOU CAN ALSO REMOVE CLASS
        // //$("h1").removeClass("big-title");


        // //Changes "HELLO " to "GOODBYE"
        // $("h1").text("Bye");

        // //Change button
        // $("button").text("Dont click me")

        // $("button").html("<em>Hey<em>")

        // ///////////////////////////////////
        // //EVENT LISTENER
        // ///////////////////////////////
        // //WHEN TEXT IS CLICKED CHANGE COLOR

        
    
        // $("h1").click(function(){
        //     $("h1").css("color", "purple")
        // });
        
        // ////////////////////////
        // //CHANGES BUTTON
        // ///////////////////////

        // //BEFORE
        // for(var i = 0; i<5; i++){
        //     document.querySelector("button") [i].addEventListener("click",
        //     function(){ document.querySelector("h1").style.color = "purple"})};

        // //AFTER
        // $("button".click(function(){
        //   $("h1").css("color", "purple")  
        // }));

        // ///////////////////
        // //INPUT
        // //////////////////

        // $(input).keypress(function(event){
        //     $("h1").text(event.key);
        // });

        //////////////////////
        //ANIMATION
        /////////////////////

        //SMOOTH ANIMATION

        $("button").on("click", function() {
            $("h1").slideUp().slideDown().animate({opacity: 0.5});
        });