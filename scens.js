import { SetCamera } from "./jsCreate/CreateSetCamera.js";
import { SetIle } from "./jsCreate/CreateSetIle.js";
import { SetMine } from "./jsCreate/CreateSetMine.js";
import { SetBatiment } from "./jsCreate/CreateSetBatiment.js";
import { SetUICamera } from "./jsCreate/CreateSetUICamera.js";

export default class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainScene' });
    }

    create() {
        //set la camera principal
        SetCamera(this);

        // Variables pour suivre l'état de la souris
        this.isMouseDown = false;
        this.mouseStartX = 0;
        this.mouseStartY = 0;

        //afficher les ile
        SetIle(this);

        //afficher les mine
        SetMine(this);

        //afficher les batimant
        SetBatiment(this);

        //afficher les ressource
        SetUICamera(this);

        this.input.on('pointerdown', (pointer) => {
            if (pointer.leftButtonDown()) {
                this.isMouseDown = true;
                this.mouseStartX = pointer.x;
                this.mouseStartY = pointer.y;
            }
        });

        this.input.on('pointerup', () => {
            this.isMouseDown = false;
        });

        this.zoomFactor = 1;
        this.maxZoom = 10;
        this.minZoom = 0.1;

        this.input.on('wheel', (pointer, gameObjects, deltaX, deltaY) => {
            const cameraX = this.cameras.main.scrollX + pointer.x;
            const cameraY = this.cameras.main.scrollY + pointer.y;

            const centerX = this.cameras.main.scrollX + this.cameras.main.width / 2;
            const centerY = this.cameras.main.scrollY + this.cameras.main.height / 2;

            if (deltaY < 0) {
                this.zoomFactor += 0.1 * this.zoomFactor;
            } else {
                this.zoomFactor -= 0.1 * this.zoomFactor;
            }

            this.zoomFactor = Phaser.Math.Clamp(this.zoomFactor, this.minZoom, this.maxZoom);
            this.cameras.main.setZoom(this.zoomFactor);
        });
    }

    createMenu() {
        // Créer un conteneur pour le menu
        const menuFusionContainer = this.add.container(200, 200).setDepth(10); // Définit une profondeur pour que le menu soit au-dessus des autres éléments

        // Ajouter un fond au menu
        const menuBackground = this.add.graphics();
        menuBackground.fillStyle(0x000000, 0.8); // Couleur noire avec opacité
        menuBackground.fillRect(-200, -200, window.innerWidth, window.innerHeight); // Taille du menu
        menuFusionContainer.add(menuBackground);

        // Ajouter du texte au menu
        const menuText = this.add.text(20, 20, 'Menu de Fusion', { fontSize: '32px', fill: '#fff' });
        menuFusionContainer.add(menuText);

        //croix fermer
        const boutonCroix = this.add.image(350, 50, "boutonCroix").setOrigin(0.5, 0.5).setInteractive();
        boutonCroix.displayWidth = 70;
        boutonCroix.displayHeight = 70;
        boutonCroix.on('pointerdown', () => {
            menuFusionContainer.destroy(); // Détruire le menu quand on clique sur "Fermer"
        });
        menuFusionContainer.add(boutonCroix);

        //iniore les autre menu
        this.cameras.main.ignore(menuFusionContainer);
    }

    update() {
        if (this.isMouseDown) {
            const deltaX = this.input.x - this.mouseStartX;
            const deltaY = this.input.y - this.mouseStartY;

            this.cameras.main.scrollX -= deltaX / this.zoomFactor;
            this.cameras.main.scrollY -= deltaY / this.zoomFactor;

            this.mouseStartX = this.input.x;
            this.mouseStartY = this.input.y;
        }
    }
}
