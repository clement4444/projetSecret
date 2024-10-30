export function SetUICamera(scene) {
    // Créer une caméra dédiée à l'UI
    scene.uiCamera = scene.cameras.add(0, 0, scene.scale.width, scene.scale.height);
    scene.uiCamera.setScroll(0, 0); // Empêche le déplacement
    scene.uiCamera.ignore(scene.children.list); // Ignore les éléments de la scène principale

    //contenaire des élement ui
    scene.uiContainer = scene.add.container(0, 0);

    // Affiche l'icône d'argent dans l'UI
    scene.mineraisPlatinum = scene.add.image(50, 50, 'mineraisPlatinum').setOrigin(0.5, 0.5);
    scene.mineraisPlatinum.displayWidth = 70;
    scene.mineraisPlatinum.displayHeight = 70;
    scene.uiContainer.add(scene.mineraisPlatinum);

    // Crée un texte pour afficher la quantité d'argent (similaire)
    scene.money = 0;
    scene.moneyText = scene.add.text(100, 50, `${scene.money}`, { fontSize: '50px', fill: '#fff' });
    scene.uiContainer.add(scene.moneyText);


    //set la position des élement ui
    scene.uiTailleFenetreX = scene.scale.width;
    scene.uiTailleFenetreY = scene.scale.height;


    scene.poseXMineraisPlatinum = scene.uiTailleFenetreX / 2;
    scene.poseYMineraisPlatinum = 50;

    scene.poseXMoneyText = scene.uiTailleFenetreX / 2 + scene.mineraisPlatinum.displayWidth / 2;
    scene.poseYMoneyText = 50 - 15;
    scene.mineraisPlatinum.setPosition(scene.poseXMineraisPlatinum, scene.poseYMineraisPlatinum);
    scene.moneyText.setPosition(scene.poseXMoneyText, scene.poseYMoneyText);

    //enlever les élement ui de la camera principal
    scene.cameras.main.ignore(scene.uiContainer.list)
}
