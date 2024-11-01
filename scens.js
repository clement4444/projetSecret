import { SetCamera } from "./jsCreate/CreateSetCamera.js";
import { SetIle } from "./jsCreate/CreateSetIle.js";
import { SetMine } from "./jsCreate/CreateSetMine.js";
import { SetBatiment } from "./jsCreate/CreateSetBatiment.js";
import { SetUICamera } from "./jsCreate/CreateSetUICamera.js";

import { Data } from "./data.js";

//import pour le menu fusion
import { MenuFusion } from "./menu/fusion/MenuFusion.js";
import { MenuFusionCercle } from "./menu/fusion/MenuFusionCercle.js";
import { MenuFusionListeMateriel } from "./menu/fusion/MenuFusionListeminerais.js";


//importe les évenement
import { EvenementMolletteSouris } from "./jsCreate/evenement/molletteSouris.js";

export default class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainScene' });
    }

    create() {
        //set la data
        Data(this);
        //set la camera principal
        SetCamera(this);

        // Variables pour suivre l'état de la souris
        this.isMouseDown = false;
        this.mouseStartX = 0;
        this.mouseStartY = 0;

        //variable utile
        this.menu = "home";

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

        //évenement de la souris
        EvenementMolletteSouris(this);
    }

    createMenu() {
        // Créer un conteneur pour le menu
        this.menuFusionContainer = this.add.container(0, 0).setDepth(10); // Définit une profondeur pour que le menu soit au-dessus des autres éléments

        MenuFusion(this);
        MenuFusionListeMateriel(this);
        MenuFusionCercle(this);

        //iniore les autre menu
        this.cameras.main.ignore(this.menuFusionContainer);
    }

    update() {
        //verifer que est sur la map
        if (this.menu === "home") {
            if (this.isMouseDown) {
                const deltaX = this.input.x - this.mouseStartX;
                const deltaY = this.input.y - this.mouseStartY;

                // Calculer la nouvelle position de défilement
                let newCamerasMainX = this.cameras.main.scrollX - deltaX / this.zoomFactor;
                let newCamerasMainY = this.cameras.main.scrollY - deltaY / this.zoomFactor;

                // Définir les limites de la carte
                const limitLeft = -5100;
                const limitRight = 5000;
                const limitTop = -3000;
                const limitBottom = 3000;

                // Appliquer les limites
                newCamerasMainX = Phaser.Math.Clamp(newCamerasMainX, limitLeft, limitRight);
                newCamerasMainY = Phaser.Math.Clamp(newCamerasMainY, limitTop, limitBottom);

                this.cameras.main.scrollX = newCamerasMainX;
                this.cameras.main.scrollY = newCamerasMainY;

                this.mouseStartX = this.input.x;
                this.mouseStartY = this.input.y;
            }
        }
    }
}
