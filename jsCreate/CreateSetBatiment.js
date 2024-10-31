export function SetBatiment(scene) {
    //ajouter les 3 batipmant
    //puissance
    const batimantPuissance = scene.add.image(300, 220, "batimentPuissance").setOrigin(0.5, 0.5);
    batimantPuissance.displayWidth = 70;
    batimantPuissance.displayHeight = 51;
    //invocation
    const batimantInvocation = scene.add.image(400, 250, "batimentInvocation").setOrigin(0.5, 0.5);
    batimantInvocation.displayWidth = 70;
    batimantInvocation.displayHeight = 56;
    //fusion
    const batimantFusion = scene.add.image(500, 220, "batimentFusion").setOrigin(0.5, 0.5);
    batimantFusion.displayWidth = 50;
    batimantFusion.displayHeight = 50;
    // Ajouter l'événement de clic
    batimantFusion.setInteractive();
    batimantFusion.on('pointerdown', () => {
        if (scene.menu === "home") {
            scene.createMenu(); // Appeler la fonction pour créer le menu
            scene.menu = "fusion";
        }
    });
}