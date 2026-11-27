/*Déclaration d'un objet en passant par la class. On utilise la méthode constructor, on lui déclare des paramètres ex (n, p, c).
Ensuite on déclare ensuite les propriétés avec this car on est DANS l'objet.*/

class Eleve {
    constructor(n, p, c) {
        this.nom = n;
        this.prenom = p;
        this.classe = c;
        this.notes = {
                        maths: [],
                        algorithmique: [],
                        javaScript: []
                    }

                         }
            }
/* on utilise new avec le nom de la class derrière, pour créer un objet avec les propriété qu'on lui a donné juste en haut. On remplace les paramètres (n, p, c)
par des valeurs qu'on aura choisi */



