class Heros{
    constructor(nom, attaque, defense, niveau){
        console.log("Constructor : nom " + nom);
        this._nom = nom;
        this._vie = vie;
        this._attaque = attaque;
        this._defense = defense;
        this._niveau = niveau;
    }

    get nom() {
        console.log("get" + this._nom);
        return this._nom;
    }

    set nom(value){
        console.log("set" + this._nom);
        this._nom = value;
    }

    get vie(){
        console.log("get" + this._vie);
        return this._vie;
    }

    set vie(value){
        console.log("set" + this._vie);
        this._vie = value;
    }

    get attaque(){
        console.log("get" + this._attaque);
        return this._attaque;
    }

    set attaque(value){
        console.log("set" + this._attaque);
        this._attaque = value;
    }

    get defense(){
        console.log("get" + this._defense);
        return this._defense;
    }

    set defense(value){
        console.log("set" + this._defense);
        this._defense = value;
    }

    get niveau(){
        console.log("get" + this._niveau);
        return this._niveau;
    }

    set niveau(value){
        console.log("set" + this._niveau);
        this._niveau = value;
    }

}

class Equipe {
    constructor(nom){
        this.nom = nom;
        this.membre = [];
        // on va remplir le tableau avec les membres des héros
        // on aura donc un tableau d'objet
    }

    ajouterMembre(heros){
        this.membre.push(heros);
    }

    supprimerMembre(heros){
        const index = this.membre.indexOf(heros);
        if (index !== 1) {
            this.membre.splice(index, 1);
        }
    }

    donneTotalAttaque(){
        let totalAttaque = 0;
        for (const heros in this.membre){
            totalAttaque += heros.attaque;
        }
        return totalAttaque;
    }

    donneTotalDefense(){
        let totalDefense = 0;
        for (const heros in this.membre){
            totalDefense += heros.defense;
        }
        return totalDefense;
    }

}

// Création des héros
const hero1 = new Heros("Toto", 100, 20, 10, 1);
const hero2 = new Heros("Bob", 120, 18, 15, 2);
const hero3 = new Heros("Xena", 480, 45, 38, 10);

// Modification des propriètés des héros à l'aide des setters
hero1.nom = "Nouveau Héros 1";
hero2.attaque = 22;
hero3.niveau = 4;

console.log(hero1.nom);
console.log(hero2.nom);
console.log(hero3.nom);

// Création de l'équipe
const equipe = new Equipe("Equipe 1")

// ajout des héros à l'équipe
equipe.ajouterMembre(hero1);
equipe.ajouterMembre(hero2);
equipe.ajouterMembre(hero3);

console.log(equipe.donneTotalAttaque()); // Affiche la force d'attaque totale de l'équipe
console.log(equipe.donneTotalDefense()); // Affiche la force de defense totale de l'équipe


//suppression d'un héro de l'équipe
equipe.supprimerMembre(hero2);
console.log(equipe.membre); // affiche les membres restants de l'équipe