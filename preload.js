import { ChargerMenuFusion } from "./jsPreload.js/PreloadMenuFusion.js";
import { ChargerMinerais } from "./jsPreload.js/PreloadMinerais.js";
import { ChargerIleBatiment } from "./jsPreload.js/PreloadIleBatiment.js";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PreloadScene' });
    }

    preload() {

        //minerai
        this.load.image('mineraisPlatinum', './ressource/gem/platinum.png');
        //charger les bouton
        this.load.image('boutonCroix', './ressource/bouton/boutonCroix.png');

        //charger ile
        ChargerIleBatiment(this);

        //charger le menu de fusion
        ChargerMenuFusion(this);

        //charger les minerais
        ChargerMinerais(this);
    }

    create() {
        this.scene.start('MainScene');
    }
}
