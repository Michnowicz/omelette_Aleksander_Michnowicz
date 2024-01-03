class Personnage {
    constructor(nom, lieu, argent, mainDroite, mainGauche) {
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.mainDroite = mainDroite;
        this.mainGauche = mainGauche;
    }
    seDeplacer(lieu) {
        console.log(this.nom + " est actuellement à la " + this.lieu)
    }
    payerArticle(article) {

    }
    couper(ingredient, outil) {

    }
}



class Lieu {
    constructor(nom, personnes) {
        this.nom = nom;
        this.personnes = personnes;
    }
}
let maison = new Lieu("maison", [])



class Outil {
    constructor(nom, action) {
        this.nom = nom;
        this.action = action;
    }
}
let couteau = new Outil("couteau", "coupé")
let mouleur = new Outil("mouleur", "moulu")



class Produit {
    constructor(nom, etats, prix) {
        this.nom = nom;
        this.etats = etats;
        this.prix = prix;
    }
}
let oeuf = new Produit("oeuf", "entier", 1.99)
let fromage = new Produit("fromage", "entier", 0.89)
let oignon = new Produit("oignon", "entier", 0.45)
let poivre = new Produit("poivre", "entier", 0.20)
let sel = new Produit("sel", "entier", 0.15)



class Epicerie extends Lieu {
    constructor(nom, personnes, panier, ingredients) {
        super(nom, personnes);
        this.panier = panier;
        this.ingredients = ingredients;
    }
}



class Poele extends Outil {
    constructor(nom,action, contenu) {
        super(nom, action)
        this.contenu = contenu
    }
    cuire() {
        setTimeout(() => {}, 4000)
        this.contenu.etats = "cuit"
    }
}



let bol = {
    contenu: [],
    melanger(nomMelange) {
        this.contenu.splice(0)
        let nomMelange = new Produit(nomMelange, "pas cuit", 0)
    }
}






// debut omelette

