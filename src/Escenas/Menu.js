import Play1 from "./Play1.js";
class Menu extends Phaser.Scene {
    constructor () {
            super ("Menu");
    }
    
    preload () {
        this.load.image ('cielo','../public/img/lluviasDeEstrellas800x600.png');
        this.load.image ('button','../public/img/buttonplay.png');
    }

    create () {
        this.add.image(400, 300, 'cielo');

        this.startButton = this.add.image(400, 300, 'button').setInteractive ();
        this.startButton.on ('pointerdown',() =>{ 
            this.scene.start("Play1");
        });
    }
    
    update () {

    }

    }

    export default Menu;