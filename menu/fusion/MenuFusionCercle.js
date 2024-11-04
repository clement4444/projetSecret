export function MenuFusionCercle(scene) {
    //crée conter de cercle
    scene.cercleContener = scene.add.container(0, 0);

    //le gros rond fond
    scene.fusionCercle = scene.add.image(window.innerWidth * 0.6, window.innerHeight * 0.15, "fusionCercle3").setOrigin(0, 0);
    scene.fusionCercle.displayWidth = window.innerWidth * 0.3;
    scene.fusionCercle.displayHeight = window.innerHeight * 0.6;
    scene.menuFusionContainer.add(scene.fusionCercle);

    //case central
    scene.fusionCaseCentral = scene.add.image(window.innerWidth * 0.69, window.innerHeight * 0.348, "fusionCaseCentral").setOrigin(0, 0);
    scene.fusionCaseCentral.displayWidth = window.innerWidth * 0.11;
    scene.fusionCaseCentral.displayHeight = window.innerHeight * 0.2;
    scene.menuFusionContainer.add(scene.fusionCaseCentral);

    //case---------------------------------------------------------
    //case haut 
    scene.fusionCaseHaut = scene.add.image(window.innerWidth * 0.7, window.innerHeight * 0.07, "fusionCaseVide").setOrigin(0, 0);
    scene.fusionCaseHaut.displayWidth = window.innerWidth * 0.09;
    scene.fusionCaseHaut.displayHeight = window.innerHeight * 0.22;
    scene.menuFusionContainer.add(scene.fusionCaseHaut);

    //case haut droite
    scene.fusionCaseDroiteHaut = scene.add.image(window.innerWidth * 0.913, window.innerHeight * 0.25, "fusionCaseVide").setOrigin(0, 0);
    scene.fusionCaseDroiteHaut.angle = 70;
    scene.fusionCaseDroiteHaut.displayWidth = window.innerWidth * 0.09;
    scene.fusionCaseDroiteHaut.displayHeight = window.innerHeight * 0.22;
    scene.menuFusionContainer.add(scene.fusionCaseDroiteHaut);

    //case bas droite
    scene.fusionCaseDroiteBas = scene.add.image(window.innerWidth * 0.9, window.innerHeight * 0.7, "fusionCaseVide").setOrigin(0, 0);
    scene.fusionCaseDroiteBas.angle = 145;
    scene.fusionCaseDroiteBas.displayWidth = window.innerWidth * 0.09;
    scene.fusionCaseDroiteBas.displayHeight = window.innerHeight * 0.22;
    scene.menuFusionContainer.add(scene.fusionCaseDroiteBas);

    //case bas gauche
    scene.fusionCaseGaucheBas = scene.add.image(window.innerWidth * 0.66, window.innerHeight * 0.8, "fusionCaseVide").setOrigin(0, 0);
    scene.fusionCaseGaucheBas.angle = -140;
    scene.fusionCaseGaucheBas.displayWidth = window.innerWidth * 0.09;
    scene.fusionCaseGaucheBas.displayHeight = window.innerHeight * 0.22;
    scene.menuFusionContainer.add(scene.fusionCaseGaucheBas);

    //case haut gauche
    scene.fusionCaseGaucheHaut = scene.add.image(window.innerWidth * 0.55, window.innerHeight * 0.38, "fusionCaseVide").setOrigin(0, 0);
    scene.fusionCaseGaucheHaut.angle = -65;
    scene.fusionCaseGaucheHaut.displayWidth = window.innerWidth * 0.09;
    scene.fusionCaseGaucheHaut.displayHeight = window.innerHeight * 0.22;
    scene.menuFusionContainer.add(scene.fusionCaseGaucheHaut);



    //ajouter au menu
    scene.menuFusionContainer.add(scene.cercleContener);
}