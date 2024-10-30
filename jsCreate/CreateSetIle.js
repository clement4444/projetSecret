export function SetIle(scene) {
    // Ajouter l'image de l'île au centre
    scene.island = scene.add.image(400, 300, 'island').setOrigin(0.5, 0.5);
    //ajouter les 6 ile autour
    const islandPositions = [
        { x: -100, y: 150, image: "island1" },
        { x: -50, y: 450, image: "island2" },
        { x: 250, y: 600, image: "island3" },
        { x: 650, y: 600, image: "island4" },
        { x: 900, y: 400, image: "island5" },
        { x: 800, y: 100, image: "island6" },
    ];

    const islandWidth = 300;
    const islandHeight = 300;

    islandPositions.forEach(pos => {
        const island = scene.add.image(pos.x, pos.y, pos.image).setOrigin(0.5, 0.5);
        island.displayWidth = islandWidth;
        island.displayHeight = islandHeight;
    });
}