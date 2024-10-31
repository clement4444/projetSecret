export function MenuFusion(scene) {
    // Ajouter un fond au menu
    const menuBackground = scene.add.graphics();
    menuBackground.fillStyle(0x000000, 0.8); // Couleur noire avec opacité
    menuBackground.fillRect(0, 0, window.innerWidth, window.innerHeight); // Taille du menu
    scene.menuFusionContainer.add(menuBackground);

    // Ajouter du texte au menu
    const menuText = scene.add.text(20, 20, 'Menu de Fusion', { fontSize: '32px', fill: '#fff' });
    scene.menuFusionContainer.add(menuText);

    //croix fermer
    const boutonCroix = scene.add.image(window.innerWidth * 0.94, window.innerHeight * 0.02, "boutonCroix").setOrigin(0, 0).setInteractive();
    boutonCroix.displayWidth = window.innerWidth * 0.05;
    boutonCroix.displayHeight = window.innerWidth * 0.05;
    boutonCroix.on('pointerdown', () => {
        scene.menuFusionContainer.destroy(); // Détruire le menu quand on clique sur "Fermer"
        scene.menu = "home";
    });
    scene.menuFusionContainer.add(boutonCroix);
}