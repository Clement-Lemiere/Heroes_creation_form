// Fonction pour ajouter un héro au localStorage
function addHero() {
    var heroName= document.getElementById("heroName").value;
    var heroAttack= document.getElementById("heroAttack").value;
    var heroDefense= document.getElementById("heroDefense").value;
    var heroLife= document.getElementById("heroLife").value;
    var heroLevel= document.getElementById("heroLevel").value;

    if (heroName && heroAttack && heroDefense && heroLife && heroLevel) {
        var hero = {
            heroName: heroName, 
            heroAttack: heroAttack, 
            heroDefense: heroDefense, 
            heroLife: heroLife, 
            heroLevel: heroLevel
        };
        var heroes = localStorage.getItem("heroes");
        if (heroes) {
            heroes = JSON.parse(heroes);
            heroes.push(hero);
        } else {
            heroes = [hero];
        }
        localStorage.setItem("heroes", JSON.stringify(heroes));
        
        document.getElementById("heroName").value = "";
        document.getElementById("heroAttack").value = "";
        document.getElementById("heroDefense").value = "";
        document.getElementById("heroLife").value = "";
        document.getElementById("heroLevel").value = "";
        alert("New Hero Created!");
    } 
    else {
        // Afficher une alerte pour informer l'utilisateur qu'il n'a rien indiqué
        alert("Add informations !");
    }
}
// Fonction pour afficher les informations sur la page d'accueil
function displayHeroes() {
    var heroes = localStorage.getItem("heroes");
    if (heroes) {
        heroes = JSON.parse(heroes);
        var heroesDiv = document.getElementById("heroes");
        heroesDiv.innerHTML = "";
        for (var i=0; i < heroes.length; i++) {
            var hero = heroes[i];
            var newHero = document.createElement("div");
            newHero.classList.add("hero");
            newHero.innerHTML =
            `<div class="heroCard">
            <h3>${hero.heroName}</h3>
            <p>Life: ${hero.heroLife}</p>
            <p>Attack: ${hero.heroAttack}</p>
            <p>Defense: ${hero.heroDefense}</p>
            <p>Level: ${hero.heroLevel}</p>
            </div>`;
            heroesDiv.appendChild(newHero);
        }
    }
}

//// Fonction pour supprimer  les heros
function deleteHeroes() {
    localStorage.removeItem("heroes");
    document.getElementById("heroes").innerHTML = "";
}
// Fonction de suppression d'un seul héros.
// var deleteHero = document.createElement("button");
// deleteHero.textContent = "Delete Hero";
// supprimer.setAttribute("onclick", "supprimerInfo(" + i + ")");
// newHero.appendChild(supprimer);

// Appel de la fonction displayHeroes() lorsque la page d'accueil est chargée

// Fonction pour ajouter une équipe au localStorage
function addTeam() {
    var team = document.getElementById("team").value;
    if (team) {
        var teams = localStorage.getItem("teams");
        if (teams) {
            teams = JSON.parse(teams);
            teams.push(team);
        } else {
            teams = [team];
        }
        localStorage.setItem("teams", JSON.stringify(teams));
        document.setElementById("team").value = "";
        // Afficher une alerte pour confirmer la création de l'équipe 
        alert("L'équipe a été créée avec succès !");
    } else {
        // Afficher une alerte pour informer l'utilisateur qu'il n'a rien indiqué
        alert("Veuillez saisir une équipe !");
    }
}
// Fonction pour afficher les informations sur la page d'accueil
function displayTeams() {
    var teams = localStorage.getItem("teams");
    if (teams) {
        teams = JSON.parse(teams);
        var teamsDiv = document.getElementById("teams");
        teamsDiv.innerHTML = "";
        for (var i = 0; i < teams.length; i++) {
            var team = document.createElement("p");
            team.textContent = teams[i];
            teamsDiv.appendChild(team);
        }
    }
}

//// Fonction pour supprimer toutes les informations
function deleteAll() {
    localStorage.removeItem("teams");
    document.getElementById("teams").innerHTML = "";
}

// Appel de la fonction displayTeams() lorsque la page d'accueil est chargée
window.onload = displayHeroes(), displayTeams();