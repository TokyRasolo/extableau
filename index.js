const couleur = ['Jaune','Vert','Rouge','Orange','Marron','Violet','Gris','Noir','Bleu','Blanc'];
divCouleur = document.querySelector('.couleur');
divCouleur.innerText = couleur.join(" "); /* join manala virgule */
/* input = document.querySelector('.input'); */
reponse = document.querySelector('.reponse');
btn_search = document.querySelector('.rechercher')
btn_add = document.querySelector('.ajouter')
btn_del = document.querySelector('.suprimer')

btn_search.addEventListener('click',function(){
  function search(couleurSearch){
    var input = document.getElementById('input').value;
      return couleurSearch === input;
  }
  reponse.innerText = couleur.find(search);
                 /* Premier cas boucle for */
  /* t = 0;
  for(i=0; i<=10; i++){
      if(input==couleur[i]){
          t = 1;
      }
  }  
   if(t==0){
      reponse.innerText = "il n'existe pas ce fruit" 
   } 
   if(t==1){
       reponse.innerText = input;
   } */ 
                /* Deuxieme cas on utulise le methode find(_) */
  
});
     /* push() mi ajouté */
btn_add.addEventListener('click',function(){
    var input = document.getElementById('input').value;
    couleur.push(input);
    divCouleur.innerText =couleur.join(" ");


});
btn_del.addEventListener('click',function(){
 var input = document.getElementById('input').value;
 delete couleur[input] /* methode mamafa */
 divCouleur.innerText = couleur.join(" ");

});
