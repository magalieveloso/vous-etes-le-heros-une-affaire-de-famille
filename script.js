const chaptersObj={
    lereveil:{
        subtitle: "Le reveil",
        text:"Vous vous reveillez comme d'habitude prêt pour votre journée.",
        img:"assets/wakeup.jpg",
        action:"goToChapter('appeltelephonique')"
        }
    ,appeltelephonique:{
        subtitle:"L'appel",
        text:"Soudainement votre frère vous appelle.",
        img:"assets/phonecall.jpg",
        options:[
        {text:"lui repondre",
        action:"goToChapter('larencontre')"
        },
        {text:"ne pas lui repondre",
        action:"goToChapter('nepasrepondre')"
    }
        ]

    }
    ,nepasrepondre:{
        subtitle:"Ignorer l'appel",
        text:"En ignorant l'appel de votre frère, vous restez à la maison et vous vous rendormez.",
        img:"assets/backtosleep.jpg",
        action:"goToChapter('lereveil')"

    }
    ,larencontre:{
        subtitle:"La rencontre",
        text:"Il vous demande de le rejoindre chez lui. N'oubliez pas d'amener le code pour rentrer à l'immeuble.",
        img:"assets/meetup.jpg",
        options:[
        {text:"prendre la bicyclette",
        action:"goToChapter('allerbicyclette')"
    },
    {text:"prendre la voiture",
    action:"goToChapter('arretfeujaune')"
   }
   ]
   }
    ,allerbicyclette:{
        subtitle:"Aller en bicyclette",
        text:"En choissisant la bicyclette, une voiture qui venait à toute vitesse ne vous voit pas et vous tue.",
        img:"assets/bike.jpg",
        action:"goToChapter('lereveil)'"

    }
    ,arretfeujaune:{
        subtitle:"Un feu jaune à l'horizon",
        text:"Vous voyez le feu de circulation passer du vert au jaune. Arrêter au feu jaune ou continuer à rouler?",
        img:"assets/yellowlight.jpg",
        options:[
        {text:"arreter au feu jaune",
        action:"goToChapter('ouiarreterfeujaune')"
        },
        {text:"continuer à rouler",
        action:"goToChapter('pasdestationnement')"
    }
    ]
    }
    ,ouiarreterfeujaune:{
        subtitle:"Arreter au feu jaune",
        text: "En choissisant d'arreter au feu jaune, la voiture derrière vous fonce dessus",
        img:"assets/caraccident.jpg",
        action:"goToChapter('lereveil')"

    }
    ,pasdestationnement:{
        subtitle:"Pas de stationnement",
        text:"Vous arrivez chez votre frère, mais il n'y a pas de stationnement de disponible.",
        img:"assets/noparking.jpg",
        action:"goToChapter('solutionstationnement')"

    }
    ,solutionstationnement:{
        subtitle:"Vous trouvez une place de stationnement",
        text:"Vous stationnez la voiture sur une rue passante à deux minutes de l'habitation de votre frère.",
        img:"assets/yesparking.jpg",
        options:[
        {text:"laisser votre sac sur le siège passager",
        action:"goToChapter('voleurs')"
        },
        {text:"fermer les portes de la voiture",
        action:"goToChapter('arriveedevantimmeuble')"
        },
        {text:"amener votre sac avec vous",
        action:"goToChapter('arriveedevantimmeuble')"
    }
    ]
    }
    ,voleurs:{
        subtitle:"Laisser votre sac sur le siège passager",
        text:"En laissant votre sac sur le siège passager suite à votre stationnemnt, des voleurs rentrent dans la voiture.",
        img:"assets/robbery.jpg",
        action:"goToChapter('lereveil')"

    }
    ,arriveedevantimmeuble:{
        subtitle:"L'arrivée devant l'immeuble d'appartements",
        text:"Vous arrivez devant l'immeuble où habite votre frère.",
        img:"assets/apartmentbuilding.jpg",
        action:"goToChapter('codeimmeuble')"

    }
    ,codeimmeuble:{
        subtitle:"Code pour rentrer",
        text:"Vous êtes dehors de l'immeuble, avez-vous le code pour rentrer et vous rendre à l'appartement?",
        img:"assets/code.jpeg",
        options:[
        {text:"oui",
        action:"goToChapter('prendreascenseur')"
        },
        {text:"non",
         action:"goToChapter('noncodeimmeuble')"}
    ]
    }
    ,noncodeimmeuble:{
        subtitle:"Code pour rentrer manquant",
        text:"Puisque vous n'avez pas le code pour rentrer dans l'immeuble, vous devez retourner chez vous pour chercher la feuille avec le code.",
        img:"assets/drivinghome.jpg",
        action:"goToChapter('lereveil')"


    }
    ,prendreascenseur:{
        subtitle:"L'ascenseur",
        text:"Prenez-vous l'ascenseur pour vous rendre au bon étage?",
        img:"assets/elevator.jpg",
        options:[
        {text:"oui",
        action:"goToChapter('mauvaisetage')"
        },
        {text:"non",
        action:"goToChapter('nonprendreascenseur')"
    }
    ]
    }
    ,nonprendreascenseur:{
        subtitle:"Prendre les escaliers",
        text:"Puisque vous avez pris les escaliers, vous avez eu une attaque cardiaque en les montant",
        img:"assets/heartattack.jpg",
        action:"goToChapter('lereveil')"


    }
    ,mauvaisetage:{
        subtitle:"Mauvais étage",
        text:"En prenant l'ascenseur vous arrivez au mauvais étage",
        img:"assets/spookyhallway.jpg",
        action:"goToChapter('reprendreascenseur')"

    }
    ,reprendreascenseur:{
        subtitle:"Reprendre l'ascenseur?",
        text:"Pour arrivez au bon étage ainsi que l'apartement de votre frère, prenez-vous de nouveau l'ascenseur?",
        img:"assets/elevator.jpg",
        options:[
        {text:"oui",
        action:"goToChapter('ouireprendreascenseur')"
        },
        {text:"non",
        action:"goToChapter('arriveedansappartement')"
    }
    ]
    }
    ,ouireprendreascenseur:{
        subtitle:"Reprendre l'ascenseur",
        text:"Puisque vous avez pris l'ascenseur, vous êtes resté coincé à l'intérieur de celui-ci.",
        img:"assets/stuckelevator.jpeg",
        action:"goToChapter('lereveil')"


    }

    ,arriveedansappartement:{
        subtitle:"L'arrivée à l'apartement",
        text:"Vous arrivez à l'appartement de votre frère sain et sauf malgré tout les détours! Victoire!!",
        img:"assets/apartment.jpg",
    }
};

function goToChapter(chapterName){
    const chapter= chaptersObj[chapterName];
console.log(chapter.subtitle);
console.log(chapter.text);
}

const chapitre1 = document.querySelector('.game .chapitre1');
chapitre1.innerText="Le reveil";
const texte=document.querySelector('.game .texte');
texte.innerText="Vous vous reveillez comme d'habitude prêt pour votre journée.";
const img=document.querySelector('.game.img');
img.innerHTML="assets/wakeup.jpg";
const optionsArr=["lui repondre","ne pas lui repondre","prendre la bicyclette","prendre la voiture",
"arreter au feu jaune","continuer à rouler","laisser votre sac sur le siège passager",
"fermer les portes de la voiture","amener votre sac avec vous","oui","non","oui","non","oui","non"];
for(let index=0;index<15;index++){
    const options= optionsArr[index];
    console.log(options);
}
const btn=document.querySelector('.btn .btn-1');
function choice(){
    console.log("bonjour");
};
btn.addEventListener("click",choice);