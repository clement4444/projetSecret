export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PreloadScene' });
    }

    preload() {
        //charger les ile
        this.load.image('island', './ressource/ile/ilePrincipal.png');
        this.load.image('island1', './ressource/ile/ile1.png');
        this.load.image('island2', './ressource/ile/ile2.png');
        this.load.image('island3', './ressource/ile/ile3.png');
        this.load.image('island4', './ressource/ile/ile4.png');
        this.load.image('island5', './ressource/ile/ile5.png');
        this.load.image('island6', './ressource/ile/ile6.png');
        //charger les mine
        this.load.image('mineRubis', './ressource/mine/mineRubis.png');
        this.load.image('mineSaphirs', './ressource/mine/mineSaphirs.png');
        this.load.image('mineTopazes', './ressource/mine/mineTopazes.png');
        this.load.image('mineEmeraudes', './ressource/mine/mineEmeraudes.png');
        this.load.image('mineOnyx', './ressource/mine/mineOnyx.png');
        this.load.image('mineDiamants', './ressource/mine/mineDiamants.png');
        //charger les batimant
        this.load.image('batimentFusion', './ressource/batiment/fusion.png');
        this.load.image('batimentInvocation', './ressource/batiment/invocation.png');
        this.load.image('batimentPuissance', './ressource/batiment/puissance.png');
        //minerai
        this.load.image('mineraisPlatinum', './ressource/gem/platinum.png');
        //charger les bouton
        this.load.image('boutonCroix', './ressource/bouton/boutonCroix.png');

    }

    create() {
        this.scene.start('MainScene');
    }
}
