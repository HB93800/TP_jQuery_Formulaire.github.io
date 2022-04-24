$(document).ready (function(){
    console.log('salut');  

    ////// mes variables utiles pour le if de fin ///////
    let prenom_jq="";
    let nb_lettre = $("#message").val().length;
    let mytab = " ";
    let lettre_rest = 200;
    $('.formulaireOK').hide();

    ///////////////////////////////////////////// COMMENTAIRES (SAISIE) /////////////////////////////////////////////////////////////

        $("#message").keyup(function (e) {
        e.preventDefault();
        
        nb_lettre = $("#message").val().length;
        nb_mot=$("#message").val().trim();
        mytab = nb_mot.split(" ");
        lettre_rest = 0;
        lettre_rest = 200-nb_lettre;

        console.log(nb_lettre);
        //console.log(nb_mot);
        console.log(lettre_rest);
            
        //console.log(nb_lettre);
        //console.log(nb_mot);
        //console.log(mytab);
        $('.feedback').html(mytab.length+" mot(s) / "+nb_lettre+" caractere(s) /"+ lettre_rest+" caractère(s) restant").css('color','red');
        }) 

    ///////////////////////////////////////////// COMMENTAIRES (SAISIE)  FIN /////////////////////////////////////////////////////////////

        $('.btn').click(function(e){
        e.preventDefault();
        verification();
        if ((verification()==false)||($("#message").val()=="")){
            //alert('recommencer svp et n\'oubliez pas de laisser un commentaire ');
        } else {
            //alert('OK');
            $('.formulaire').hide();
            $('.formulaireOK').show();
            $('.messageOK').html("Merci "+'<b>'+($('#prenom').val())+'</b>'+" votre message a bien été envoyé... bye");
        }

    });
    //e.preventDefault(); 
    /*$('#nom').each(function(){*/


    ////////////////////////////////////////////VERIFICATION DU NOM & PRENOM //////////////////////////////////////////////////
    
    function verification() { 

        var nom_jq=($('#nom').val());
        var prenom_jq=($('#prenom').val());
        var mail_jq=($('#email').val());
        var phone_jq=($('#tel').val());
        var nom_verif = /[A-Za-z]$/;
        var mail_verif = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;
        var tel_verif = ('^[0-9]{10}$');
    
        ///////////////////////////////////////////// VERIF NOM /////////////////////////////////////////////////////////////////    
     
         
     
            if (!nom_jq.match(nom_verif)) {
            $('.msg_err_nom').html("<i>saisir un nom svp (lettres)</i>").css('color','red'); 
            $('.msg_err_nom').show();
             return false;
            } else {
            $('.msg_err_nom').hide();
            //return false;
            }
        
    /////////////////////////////////////////////  VERIF PRENOM /////////////////////////////////////////////////////////////
            if (!prenom_jq.match(nom_verif)) {
            $('.msg_err_prenom').html("<i>saisir un prénom svp (lettres)</i>").css('color','red'); 
            $('.msg_err_prenom').show();
            return false;
            } else {
            $('.msg_err_prenom').hide();
            //return false;
            }
    

    ///////////////////////////////////////////// VERIF MAIL /////////////////////////////////////////////////////////////

            if (!mail_jq.match(mail_verif)) {
            $('.msg_err_mail').html("<i>saisir un email valide svp</i>").css('color','red');
            $('.msg_err_mail').show();
            return false;

            } else {
                $('.msg_err_mail').hide();
                console.log('OK');
           
            }
     


    ///////////////////////////////////////////// VERIF TELEPHONE /////////////////////////////////////////////////////////////

            if (!phone_jq.match(tel_verif)){
            $('.msg_err_tel').html("<i>saisir un N° de téléphone valide svp</i>").css('color','red'); 
            $('.msg_err_tel').show();
            return false;
            } else {
            //console.log('ok');
            $('.msg_err_tel').hide();
            //return false;
            }
            
    ///////////////////////////////////////////// VERIF COMMENTAIRE ////////////////////////////////////////////////////////////////////////////////////
            if (lettre_rest<0) {
            $('.feedback').html("<i>Message trop long</i>").css('color','red');  
            $('.msg_err_tel').show();
            return false;
            } else if (lettre_rest ==200) {
            $('.feedback').html("<i><b>Saisir un commentaire !!! </b></i>").css('color','red');    
            //console.log('ok');
            }else{
                $('.feedback').html(mytab.length+" mot(s) / "+nb_lettre+" caractere(s) /"+ lettre_rest+" caractère(s) restant").css('color','red');
            //return false;
            }
        
           
    }
            


    /////////////////////////////////////////////// FIN FUNCTION VERFIFICATION /////////////////////////////////////////////////////////////////////////

                
        
        
            
            
        
    
    
});
function refresh() {
    window.location.reload();
    }
