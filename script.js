console.log("Salut beau gosse");

var display = document.querySelector('.display');   // Récupération de la div display
var display2 = document.querySelector('.display2');   // Récupération de la div display
var buttons = document.querySelectorAll('button');  // Récupération de tous les boutons

// Ajout d'un écouteur d'événements pour chaque bouton
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        var value = this.textContent;   // Récupération de la valeur du bouton cliqué
        // Si le bouton "=" est cliqué, évaluer l'expression mathématique
        if (value === "=") {
            var result = eval(display.textContent);
            display2.textContent = result;   // Affichage du résultat
        }
        else{
            display.textContent += value;   // Ajout de la valeur au contenu du display
        }
    });
});