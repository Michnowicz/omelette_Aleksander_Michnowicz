//import des classes
import { Personnage, Lieu, Outil, Produit, Epicerie, Poele} from "./_class.js";



//valeurs de base de personnage
let personnage = new Personnage("Gary", "", 20.00, [], [])

//creation du lieu maison
let maison = new Lieu("maison", [])

//creation d'outils
let couteau = new Outil("couteau", "coupé")
let mouleur = new Outil("mouleur", "moulu")

//ajout de produits pour l'omelette
let oeuf = new Produit("oeuf", "entier", 1.99)
let fromage = new Produit("fromage", "entier", 0.89)
let oignon = new Produit("oignon", "entier", 0.45)
let poivre = new Produit("poivre", "moulu", 0.20)
let sel = new Produit("sel", "moulu", 0.15)

//creation de l'objet panier
let panier = []
//valeurs de base pour l'epicerie
let epicerie = new Epicerie("epicerie", [], panier, [oeuf, fromage, oignon, poivre, sel])

//creation de l'objet bol
let bol = {
    contenu: [],
    melanger(nomMelange) {
        this.contenu.splice(0) // supprime les elements du tableau contenu
        this.contenu[0] =  new Produit(nomMelange, "pas cuit", 0)
        console.log(`${personnage.nom} mélange les ingrédients dans le bol.\n${personnage.nom} crée un/une ${nomMelange} ${this.contenu[0].etat}`)
    }
}

//valeurs de bases pour la poele
let poele = new Poele("poele", [])


// debut omelette
personnage.seDeplacer(maison)



//epicerie
personnage.seDeplacer(epicerie)

personnage.mainDroite.push(epicerie.panier)
console.log(personnage.nom + " apris un panier")



//copie des ingredients dans le panier du personnage
epicerie.ingredients.forEach(e => {
    personnage.mainDroite[0].push(e)
    console.log(personnage.nom + " a pris un(e) " + e.nom)
});
//payage de chaque article
personnage.payerArticle(personnage.mainDroite[0])



//retour a la maison
personnage.seDeplacer(maison)

//deplacement de chaque ingredient dans le bol
for (let i = 0; i = personnage.mainDroite[0].length; i++) {
    bol.contenu.push(personnage.mainDroite[0][0])
    console.log(personnage.nom + " a mis " + personnage.mainDroite[0][0].nom + " dans le bol.")
    //suppression de chaque ingredient dans le panier
    personnage.mainDroite[0].shift()
}


//retour a l'epicerie
personnage.seDeplacer(epicerie)

// enleve le panier de la main droite
personnage.mainDroite.shift()
console.log(personnage.nom + " remet le panier dans le magasin.")



//retour a la maison
personnage.seDeplacer(maison)

//couper les ingrédients
bol.contenu.forEach(e => {
    personnage.couper(e, couteau)
});

//mélange des ingrédients
bol.melanger("omelette")

//transfert du bol vers la poele
poele.contenu.push(bol.contenu[0])
bol.contenu.shift()
console.log(`${personnage.nom} verse ${poele.contenu[0].nom} dans la poele.`);

//cuisson
poele.cuire()