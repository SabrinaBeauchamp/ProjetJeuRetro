const categorie = ["Jeux plateforme", "FPS", "RPG", "MMORPG", "MOBA", "Jeux horreur", "hack'n slash", "RTS", "Jeux sport", "Jeux de réflexion", "Jeux 'Blockade'", "Jeux arcade", "Jeux d'aventure"]
export const choix =[
    {
        nom:"oui",
        selected: false,
    },
    {
        nom:"non",
        selected: false,
    },
];

export const completerIncsription = [
    {
        nom:"question_1",
        label:"2",
        type: "text",
        text: "Votre pseudonyme?",
        reponse:"",
    },
    {
        nom:"question_2",
        label:"2",
        type: "checkbox",
        text: "voulez-vous qu'on utilise votre nom ou votre pseudonyme?",
        reponse:"",
    },
    {
        nom:"question_3",
        label:"3",
        type: "checkbox",
        text: "selectionner quelle categorie de jeu que vous aimer jouer?",
        reponse:"",
    },
    {
        nom:"question_4",
        label:"4",
        type: "checkbox",
        text: "Est-ce que vous accepter de rendre public vos liste aux autres utilisateur? ",
        reponse:"",
    },
]

export const options = [
    {
        nom:"aime",
        url:"/img/imgs/posseder.png",
        titre:"J'aime",
        selected: false,
    },
    {
        nom:"maybe",
        url:"/img/imgs/like.png",
        titre:"Peut-être",
        selected: false,
    },
    {
        nom:"nope",
        url:"/img/imgs/nope.png",
        titre:"Pas intéresser",
        selected: false,
    },
]

export const jeux = ["Pong", "Pacman", "Space Invaders", 'Démineur', 'Snake']