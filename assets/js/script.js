// Ouverture du Jquery aprés chargement de la page
$(function(){
  // Variable qui a pour valeur 0 pour indiquer que l'on part de 0
  var clickButton = 0;
  /* Fonction qui indique que lorqu'on click sur le bouton + on
  incrémente de 1 à chaque click*/
  $('#buttonMore').click(function(){
    clickButton ++;
    // Fonction qui récupére l'ID pour afficher la variable
    $('#test').val(clickButton);
  });
  /* Fonction qui indique que lorqu'on click sur le bouton - on
  décrémente de 1 à chaque click*/
  $('#buttonLess').click(function(){
    clickButton --;
    // Fonction qui récupére l'ID pour afficher la variable
    $('#test').val(clickButton);
  });
});
