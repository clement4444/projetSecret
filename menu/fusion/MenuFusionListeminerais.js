import { CalculerMinerais } from "./caculerMinerais.js";

export function MenuFusionListeMateriel(scene) {
    //les 6 catégorie de minerais------------------------------
    scene.listeMineraisType = ["rubis", "saphirs", "topazes", "emeraudes", "onyx", "diamants"];
    scene.litsteImageCategorie = [];
    for (let i = 0; i < 6; i++) {
        //le fond de la categorie
        const imageFond = scene.add.image(window.innerWidth * 0.24, window.innerHeight * 0.18 + i * window.innerHeight * 0.1, i === 0 ? "fusionCategorieSelcet" : "fusionCategorie").setOrigin(0, 0);
        imageFond.displayWidth = window.innerWidth * 0.06;
        imageFond.displayHeight = window.innerHeight * 0.09;
        scene.menuFusionContainer.add(imageFond);
        scene.litsteImageCategorie.push(imageFond);
        //rendre la catégorie interactiv
        // Ajouter l'événement de clic
        imageFond.setInteractive();
        imageFond.on('pointerdown', () => {
            //choisi la catergorie a select
            scene.mineraisSelect = scene.listeMineraisType[i];
            //change la liste des minerais 
            actualiserListeDynamique(scene);
            //aplique effet select au bon et met le normal au autre
            for (let y = 0; y < 6; y++) {
                if (scene.listeMineraisType[y] === scene.mineraisSelect) {
                    scene.litsteImageCategorie[y].setTexture('fusionCategorieSelcet');
                } else {
                    scene.litsteImageCategorie[y].setTexture('fusionCategorie');
                }
            }
        });

        //les minerais type exposition
        const image = scene.add.image(window.innerWidth * 0.255, window.innerHeight * 0.195 + i * window.innerHeight * 0.1, scene.dataMinerais[scene.listeMineraisType[i]].presentation).setOrigin(0, 0);
        image.displayWidth = window.innerWidth * 0.026;
        image.displayHeight = window.innerHeight * 0.06;
        scene.menuFusionContainer.add(image);
    }

    //le fond de la liste des minerais---------------------------------------------
    scene.fontListeMineraisFusion = scene.add.image(-5, window.innerHeight * 0.15, "fusionListeMinerais").setOrigin(0, 0).setInteractive();
    scene.fontListeMineraisFusion.displayWidth = window.innerWidth * 0.25;
    scene.fontListeMineraisFusion.displayHeight = window.innerHeight * 0.7;
    scene.menuFusionContainer.add(scene.fontListeMineraisFusion);

    //liste des minerais de fusion possible
    scene.ListeMineraisUtiliserCase = []
    //la liste dynamique des minerais
    setListeDynamique(scene);
}


function setListeDynamique(scene) {
    //liste dynamique ---------------------------------------------
    // Définir la zone de défilement pour la liste
    scene.scrollAreaFusion = { x: 10, y: window.innerHeight * 0.167, width: window.innerWidth * 0.234, height: window.innerHeight * 0.671 };
    // Créer le conteneur pour les images
    scene.listMineraisContainerFusion = scene.add.container(scene.scrollAreaFusion.x, scene.scrollAreaFusion.y);

    const visibleItems = 4;
    scene.itemHeightListeMineraisFusion = window.innerHeight * 0.175;
    scene.scrollLimitFusion = (10 - visibleItems) * scene.itemHeightListeMineraisFusion;
    scene.scrollPositionFusion = 0;
    //set les clé de minerais
    scene.clesPurification = ["brut", "soigne", "pur", "raffine", "elegant", "brillant", "carre", "grave", "ovale", "parfait"];
    // Ajouter les images dans le conteneur
    for (let i = 0; i < scene.clesPurification.length; i++) {
        //les case du minerais
        caseMinerais(scene, i, "rubis")

        //les minerais
        //cle défférent a chaque tour
        const cle = scene.clesPurification[i];
        const image = scene.add.image((window.innerWidth * 0.027), (i * scene.itemHeightListeMineraisFusion + window.innerHeight * 0.032), scene.dataMinerais.rubis[cle].image).setOrigin(0, 0);
        image.displayWidth = window.innerWidth * 0.026;
        image.displayHeight = window.innerHeight * 0.065;
        scene.listMineraisContainerFusion.add(image);
    }
    // Créer une zone masquée pour la liste visible
    scene.maskShape = scene.make.graphics().fillRect(scene.scrollAreaFusion.x, scene.scrollAreaFusion.y, scene.scrollAreaFusion.width, scene.scrollAreaFusion.height).setVisible(false);
    const maskFusion = scene.maskShape.createGeometryMask();
    scene.listMineraisContainerFusion.setMask(maskFusion);
    //ajouter la liste a mon contenaire
    scene.menuFusionContainer.add(scene.listMineraisContainerFusion);
}


function actualiserListeDynamique(scene) {
    // Supprime toutes les images actuelles du conteneur
    scene.listMineraisContainerFusion.removeAll(true);

    for (let i = 0; i < 6; i++) {
        //parcour les 6 minerais jusque a trouver le select
        if (scene.listeMineraisType[i] === scene.mineraisSelect) {
            // Ajouter les images dans le conteneur
            for (let y = 0; y < scene.clesPurification.length; y++) {
                //les case du minerais
                caseMinerais(scene, y, scene.listeMineraisType[i])
                //cle défférent a chaque tour
                const cle = scene.clesPurification[y];
                const image = scene.add.image((window.innerWidth * 0.027), (y * scene.itemHeightListeMineraisFusion + window.innerHeight * 0.032), scene.dataMinerais[scene.listeMineraisType[i]][cle].image).setOrigin(0, 0);
                image.displayWidth = window.innerWidth * 0.026;
                image.displayHeight = window.innerHeight * 0.065;
                scene.listMineraisContainerFusion.add(image);
            }
        }
    }
    //remonter le scroll de la liste en haut
    scene.scrollPositionFusion = Phaser.Math.Clamp(0, 0, scene.scrollLimitFusion);
    scene.listMineraisContainerFusion.y = scene.scrollAreaFusion.y - scene.scrollPositionFusion;
}

function caseMinerais(scene, i, cleMinerais) {
    //la case du minerais
    const caseMinerais = scene.add.image(window.innerWidth * 0.015, i * scene.itemHeightListeMineraisFusion, CalculerMinerais(scene, i, cleMinerais) ? "fusionsectionMineraisValider" : "fusionSectionMinerais").setOrigin(0, 0);
    caseMinerais.displayWidth = window.innerWidth * 0.21;
    caseMinerais.displayHeight = window.innerHeight * 0.12;
    scene.listMineraisContainerFusion.add(caseMinerais);

    //texte TYPE
    const typeText = scene.add.text(
        window.innerWidth * 0.07,
        i * scene.itemHeightListeMineraisFusion + window.innerHeight * 0.013,
        `${scene.dataMinerais[cleMinerais][scene.clesPurification[i]].type}`,
        {
            fontSize: `${window.innerHeight * 0.03}px`,
            fill: '#663807',
            fontFamily: 'Arial',
            fontStyle: 'bold'
        });
    scene.listMineraisContainerFusion.add(typeText);
    //texte purifaication
    const purifaicationText = scene.add.text(
        window.innerWidth * 0.158,
        i * scene.itemHeightListeMineraisFusion + window.innerHeight * 0.013,
        `${scene.dataMinerais[cleMinerais][scene.clesPurification[i]].nom}`,
        {
            fontSize: `${window.innerHeight * 0.03}px`,
            fill: '#663807',
            fontFamily: 'Arial',
            fontStyle: 'bold'
        });
    scene.listMineraisContainerFusion.add(purifaicationText);
    //texte quantiter
    const quantiterText = scene.add.text(
        window.innerWidth * 0.072,
        i * scene.itemHeightListeMineraisFusion + window.innerHeight * 0.058,
        `X${scene.dataMinerais[cleMinerais][scene.clesPurification[i]].quantiter}`,
        {
            fontSize: `${window.innerHeight * 0.04}px`,
            fill: '#1bba05',
            fontFamily: 'Arial',
            fontStyle: 'bold'
        });
    scene.listMineraisContainerFusion.add(quantiterText);
}