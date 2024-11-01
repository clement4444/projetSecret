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
    scene.fontListeMineraisFusion.displayHeight = window.innerWidth * 0.35;
    scene.menuFusionContainer.add(scene.fontListeMineraisFusion);

    //la liste dynamique des minerais
    setListeDynamique(scene);
}


function setListeDynamique(scene) {
    //liste dynamique ---------------------------------------------
    // Définir la zone de défilement pour la liste
    scene.scrollAreaFusion = { x: 10, y: window.innerHeight * 0.167, width: window.innerWidth * 0.20, height: window.innerHeight * 0.671 };
    // Créer le conteneur pour les images
    scene.listMineraisContainerFusion = scene.add.container(scene.scrollAreaFusion.x, scene.scrollAreaFusion.y);

    const visibleItems = 4;
    scene.itemHeightListeMineraisFusion = 100;
    scene.scrollLimitFusion = (10 - visibleItems) * scene.itemHeightListeMineraisFusion;
    scene.scrollPositionFusion = 0;
    //set les clé de minerais
    scene.clesPurification = ["brut", "soigne", "pur", "raffine", "elegant", "brillant", "carre", "grave", "ovale", "parfait"];
    // Ajouter les images dans le conteneur
    for (let i = 0; i < scene.clesPurification.length; i++) {
        //les case du minerais
        caseMinerais(scene, i)

        //les minerais
        //cle défférent a chaque tour
        const cle = scene.clesPurification[i];
        const image = scene.add.image(0, i * scene.itemHeightListeMineraisFusion, scene.dataMinerais.rubis[cle].image).setOrigin(0, 0);
        image.displayWidth = 100;
        image.displayHeight = 100;
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
                caseMinerais(scene, y)
                //cle défférent a chaque tour
                const cle = scene.clesPurification[y];
                const image = scene.add.image(0, y * scene.itemHeightListeMineraisFusion, scene.dataMinerais[scene.listeMineraisType[i]][cle].image).setOrigin(0, 0);
                image.displayWidth = 100;
                image.displayHeight = 100;
                scene.listMineraisContainerFusion.add(image);
                console.log("ok");
            }
        }
    }
}

function caseMinerais(scene, i) {
    //la case du minerais
    const caseMinerais = scene.add.image(0, i * scene.itemHeightListeMineraisFusion, "fusionSectionMinerais").setOrigin(0, 0);
    caseMinerais.displayWidth = window.innerWidth * 0.2;
    caseMinerais.displayHeight = window.innerHeight * 0.2;
    scene.listMineraisContainerFusion.add(caseMinerais);
}