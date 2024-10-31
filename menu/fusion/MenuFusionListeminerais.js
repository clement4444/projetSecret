export function MenuFusionListeMateriel(scene) {
    //le fond de la liste des minerais
    scene.fontListeMineraisFusion = scene.add.image(-5, window.innerHeight * 0.15, "fusionListeMinerais").setOrigin(0, 0).setInteractive();
    scene.fontListeMineraisFusion.displayWidth = window.innerWidth * 0.25;
    scene.fontListeMineraisFusion.displayHeight = window.innerWidth * 0.35;
    scene.menuFusionContainer.add(scene.fontListeMineraisFusion);

    //liste dynamique ---------------------------------------------
    // Définir la zone de défilement pour la liste
    scene.scrollAreaFusion = { x: 10, y: window.innerHeight * 0.15, width: window.innerWidth * 0.25, height: window.innerWidth * 0.35 };
    // Créer le conteneur pour les images
    scene.listMineraisContainerFusion = scene.add.container(scene.scrollAreaFusion.x, scene.scrollAreaFusion.y);

    const visibleItems = 4;
    const itemHeight = 100;
    scene.scrollLimitFusion = (10 - visibleItems) * itemHeight;
    scene.scrollPositionFusion = 0;
    // Ajouter les images dans le conteneur
    for (let i = 0; i < 10; i++) {
        const image = scene.add.image(0, i * itemHeight, `image${i}`).setOrigin(0, 0);
        image.displayWidth = 400; // Ajuster la taille si nécessaire
        image.displayHeight = 100;
        scene.listMineraisContainerFusion.add(image);
    }
    // Créer une zone masquée pour la liste visible
    scene.maskShape = scene.make.graphics().fillRect(scene.scrollAreaFusion.x, scene.scrollAreaFusion.y, scene.scrollAreaFusion.width, scene.scrollAreaFusion.height).setVisible(false);
    const maskFusion = scene.maskShape.createGeometryMask();
    scene.listMineraisContainerFusion.setMask(maskFusion);
    //ajouter la liste a mon contenaire
    scene.menuFusionContainer.add(scene.listMineraisContainerFusion);

    //a modifier

    scene.input.on('wheel', (pointer, gameObjects, deltaX, deltaY, deltaZ) => {
        // Vérifier si la souris est dans la zone de défilement
        if (pointer.x >= scene.scrollAreaFusion.x && pointer.x <= scene.scrollAreaFusion.x + scene.scrollAreaFusion.width && pointer.y >= scene.scrollAreaFusion.y && pointer.y <= scene.scrollAreaFusion.y + scene.scrollAreaFusion.height) {

            // Ajuster la position de défilement en fonction de la molette
            scene.scrollPositionFusion += deltaY * 0.2;
            scene.scrollPositionFusion = Phaser.Math.Clamp(scene.scrollPositionFusion, 0, scene.scrollLimitFusion);
            scene.listMineraisContainerFusion.y = scene.scrollAreaFusion.y - scene.scrollPositionFusion;
        }
    });
}