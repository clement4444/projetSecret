export function SetMine(scene) {
    //ajouter les 6 mine
    const minesPositions = [
        { x: 250, y: 260, image: "mineRubis" },
        { x: 310, y: 290, image: "mineSaphirs" },
        { x: 365, y: 320, image: "mineTopazes" },
        { x: 435, y: 320, image: "mineEmeraudes" },
        { x: 490, y: 290, image: "mineOnyx" },
        { x: 550, y: 260, image: "mineDiamants" },
    ];

    const minesWidth = 45;
    const minesHeight = 45;

    minesPositions.forEach(pos => {
        const mine = scene.add.image(pos.x, pos.y, pos.image).setOrigin(0.5, 0.5);
        mine.displayWidth = minesWidth;
        mine.displayHeight = minesHeight;
    });
}