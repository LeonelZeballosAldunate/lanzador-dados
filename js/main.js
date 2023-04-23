var antiRepeat = 0;
var antiRepeat2 = 0;

$("#lanzar").click(function(){
    var numRandom = Math.floor((Math.random()*6)+1);

    while (antiRepeat == numRandom){
        numRandom = Math.floor((Math.random()*6)+1);
    }

    antiRepeat = numRandom;

    $(".numero-resultado").html(numRandom);

    if (numRandom == 1) {
        $(".punto1").css("display", "none");
        $(".punto2").css("display", "none");
        $(".punto3").css("display", "none");
        $(".punto4").css("display", "block");
        $(".punto5").css("display", "none");
        $(".punto6").css("display", "none");
        $(".punto7").css("display", "none");
    }

    if (numRandom == 2) {
        $(".punto1").css("display", "none");
        $(".punto2").css("display", "block");
        $(".punto3").css("display", "none");
        $(".punto4").css("display", "none");
        $(".punto5").css("display", "none");
        $(".punto6").css("display", "block");
        $(".punto7").css("display", "none");
    }

    if (numRandom == 3) {
        $(".punto1").css("display", "block");
        $(".punto2").css("display", "none");
        $(".punto3").css("display", "none");
        $(".punto4").css("display", "block");
        $(".punto5").css("display", "none");
        $(".punto6").css("display", "none");
        $(".punto7").css("display", "block");
    }

    if (numRandom == 4) {
        $(".punto1").css("display", "block");
        $(".punto2").css("display", "block");
        $(".punto3").css("display", "none");
        $(".punto4").css("display", "none");
        $(".punto5").css("display", "none");
        $(".punto6").css("display", "block");
        $(".punto7").css("display", "block");
    }

    if (numRandom == 5) {
        $(".punto1").css("display", "block");
        $(".punto2").css("display", "block");
        $(".punto3").css("display", "none");
        $(".punto4").css("display", "block");
        $(".punto5").css("display", "none");
        $(".punto6").css("display", "block");
        $(".punto7").css("display", "block");
    }

    if (numRandom == 6) {
        $(".punto1").css("display", "block");
        $(".punto2").css("display", "block");
        $(".punto3").css("display", "block");
        $(".punto4").css("display", "none");
        $(".punto5").css("display", "block");
        $(".punto6").css("display", "block");
        $(".punto7").css("display", "block");
    }

    $(".mensaje").css("display", "inline");

    /* ----- Dado 2 ----- */

    if ($("#dado2").css("display") == "block") {
        var numRandom2 = Math.floor((Math.random()*6)+1);

        while (antiRepeat2 == numRandom2){
        numRandom2 = Math.floor((Math.random()*6)+1);
        }

        antiRepeat2 = numRandom2;

        if (numRandom2 == 1) {
            $(".punto1-2").css("display", "none");
            $(".punto2-2").css("display", "none");
            $(".punto3-2").css("display", "none");
            $(".punto4-2").css("display", "block");
            $(".punto5-2").css("display", "none");
            $(".punto6-2").css("display", "none");
            $(".punto7-2").css("display", "none");
        }

        if (numRandom2 == 2) {
            $(".punto1-2").css("display", "none");
            $(".punto2-2").css("display", "block");
            $(".punto3-2").css("display", "none");
            $(".punto4-2").css("display", "none");
            $(".punto5-2").css("display", "none");
            $(".punto6-2").css("display", "block");
            $(".punto7-2").css("display", "none");
        }

        if (numRandom2 == 3) {
            $(".punto1-2").css("display", "block");
            $(".punto2-2").css("display", "none");
            $(".punto3-2").css("display", "none");
            $(".punto4-2").css("display", "block");
            $(".punto5-2").css("display", "none");
            $(".punto6-2").css("display", "none");
            $(".punto7-2").css("display", "block");
        }

        if (numRandom2 == 4) {
            $(".punto1-2").css("display", "block");
            $(".punto2-2").css("display", "block");
            $(".punto3-2").css("display", "none");
            $(".punto4-2").css("display", "none");
            $(".punto5-2").css("display", "none");
            $(".punto6-2").css("display", "block");
            $(".punto7-2").css("display", "block");
        }

        if (numRandom2 == 5) {
            $(".punto1-2").css("display", "block");
            $(".punto2-2").css("display", "block");
            $(".punto3-2").css("display", "none");
            $(".punto4-2").css("display", "block");
            $(".punto5-2").css("display", "none");
            $(".punto6-2").css("display", "block");
            $(".punto7-2").css("display", "block");
        }

        if (numRandom2 == 6) {
            $(".punto1-2").css("display", "block");
            $(".punto2-2").css("display", "block");
            $(".punto3-2").css("display", "block");
            $(".punto4-2").css("display", "none");
            $(".punto5-2").css("display", "block");
            $(".punto6-2").css("display", "block");
            $(".punto7-2").css("display", "block");
        }

        $(".numero-resultado").html(numRandom + numRandom2);

    }

    /* ----- Fin dado 2 ----- */
});

var numeroDados = true;

$("#monopoly").click(function(){

    $("#dado2").css("display", "block")
    $("#contenedor").css("top", "250px")
    
    if (numeroDados == true) {
        $("#monopoly").html("Un dado");
        numeroDados = false;
        $("#dado2").css("display", "block")
        $("#monopoly").css("padding", "20px 33px")
    }

    else {
        $("#monopoly").html("Dos dados");
        numeroDados = true;
        $("#dado2").css("display", "none")
        $("#contenedor").css("top", "400px")
        $("#monopoly").css("padding", "20px 25px")
    }
});
