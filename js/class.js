export class Personnage {
    constructor(nom, lieu, argent, mainDroite, mainGauche) {
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.mainDroite = mainDroite;
        this.mainGauche = mainGauche;
    }
    seDeplacer(lieu) {
        console.log(this.nom + " est actuellement à la " + lieu.nom)
        this.lieu = lieu.nom
    }
    payerArticle(articles) {
        let total = 0
        articles.forEach(a => {
            this.argent = this.argent - a.prix
            console.log("prix de l'article " + a.nom + ": " + a.prix + "e \nIl vous reste " + this.argent + "e")
        });
    }
    couper(ingredient, outil) {
        if (outil.nom == "couteau") {
            if (ingredient.etat == "entier" && ingredient.nom != "oeuf") {
                console.log(this.nom + " découpe le/l' " + ingredient.nom);
                ingredient.etat = "découpé"
            }
        } else {
            console.log("il vous faut un couteau pour découper.");
        }
    }
}

export class Lieu {
    constructor(nom, personnes) {
        this.nom = nom;
        this.personnes = personnes;
    }
}

export class Outil {
    constructor(nom, action) {
        this.nom = nom;
        this.action = action;
    }
}

export class Produit {
    constructor(nom, etat, prix) {
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}

export class Epicerie extends Lieu {
    constructor(nom, personnes, panier, ingredients) {
        super(nom, personnes);
        this.panier = panier;
        this.ingredients = ingredients;
    }
}

export class Poele extends Outil {
    constructor(nom,action, contenu) {
        super(nom, action)
        this.contenu = contenu
    }
    cuire() {
        setTimeout(() => {}, 4000)
        this.contenu.etats = "cuit"
    }
}

