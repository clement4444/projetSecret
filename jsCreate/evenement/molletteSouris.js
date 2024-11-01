export function EvenementMolletteSouris(scene) {
    //paramètre de zoom
    scene.zoomFactor = 1;
    scene.maxZoom = 10;
    scene.minZoom = 0.1;

    scene.input.on('wheel', (pointer, gameObjects, deltaX, deltaY) => {
        if (scene.menu === "home") {
            const cameraX = scene.cameras.main.scrollX + pointer.x;
            const cameraY = scene.cameras.main.scrollY + pointer.y;

            const centerX = scene.cameras.main.scrollX + scene.cameras.main.width / 2;
            const centerY = scene.cameras.main.scrollY + scene.cameras.main.height / 2;

            if (deltaY < 0) {
                scene.zoomFactor += 0.1 * scene.zoomFactor;
            } else {
                scene.zoomFactor -= 0.1 * scene.zoomFactor;
            }

            scene.zoomFactor = Phaser.Math.Clamp(scene.zoomFactor, scene.minZoom, scene.maxZoom);
            scene.cameras.main.setZoom(scene.zoomFactor);
        } else if (scene.menu === "fusion") {
            // Vérifier si la souris est dans la zone de défilement
            if (pointer.x >= scene.scrollAreaFusion.x && pointer.x <= scene.scrollAreaFusion.x + scene.scrollAreaFusion.width && pointer.y >= scene.scrollAreaFusion.y && pointer.y <= scene.scrollAreaFusion.y + scene.scrollAreaFusion.height) {
                // Ajuster la position de défilement en fonction de la molette
                scene.scrollPositionFusion += deltaY * 0.2;
                scene.scrollPositionFusion = Phaser.Math.Clamp(scene.scrollPositionFusion, 0, scene.scrollLimitFusion);
                scene.listMineraisContainerFusion.y = scene.scrollAreaFusion.y - scene.scrollPositionFusion;
            }
        }
    });
}