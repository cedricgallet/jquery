$(document).ready(function () {

    // Evenements click en jquery
   $( '#btn' ).click(function() {
    // Variables des valeurs recuperer des inputs transformer en données numeriques grace a parseInt
    let number1 =  parseInt($('#number1').val());
    let number2 = parseInt($('#number2').val());
    let number3 = parseInt($('#number3').val());
    let number4 = parseInt($('#number4').val());
    let number5 = parseInt($('#number5').val());

    // Moyenne
    let Result = (number1 + number2 + number3 + number4 + number5) / 5;

    // Conditions
        $('#Average').html(Result);

        if (Result >= 0 && Result <10) {
            $( '#Appreciation').html('En dessus de la moyenne');
        } else if (Result >= 10 && Result <13) {
            $( '#Appreciation').html('Moyen');
        } else if (Result > 13 && Result <16) {
            $( '#Appreciation').html('Bien');
        } else if (Result >= 16 && Result <20) {
            $( '#Appreciation').html('Trés bien');
        } else {
            $( '#Appreciation').html('Exellent');

        }
            
        
          

    });
});