$(document).ready(function () {

        // Evenements click 
        
        $('#btn').click(function () {
                
                // Récupérer les valeurs des champs utilisateur
                let Pierre = parseInt($('#Pierre').val());
                let Feuille = parseInt($('#Feuille').val());
                let Ciseaux = parseInt($('#Ciseaux').val());
                // console.log(Feuille);
                let userChoice = ;
                

                let Choice = (Pierre||Feuille||Ciseaux);
               
                // Récupérer les valeurs Aléatoires Ordi

                let OrdiChoice = Choice(Math.floor(Math.random()*3));

                        // Div Résultat
                        $('#ShowWin').html();

                        // Possibilité
                        if (userChoice == OrdiChoice){
                                $('#ShowWin').html('ÉGALITÉ !');

                        }else if ((userChoice == 'Pierre' && OrdiChoice == 'Ciseaux')||(userChoice == 'Feuille' && OrdiChoice == 'Pierre')||(userChoice == 'Ciseaux'&& userChoice == 'Feuille')) 
                                $('#ShowWin').html('GAGNÉ !');
                        
                        else {
                                $('#ShowWin').html('PERDU !');
                        }

                        
                
              
        });
                 
});