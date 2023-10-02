import Play1 from "./Play1.js";
import Menu from "./Menu.js";

class GameOver extends Phaser.Scene {
    constructor() {
        super("GameOver");
    }
    preload (){
        this.load.image('GameOver', '../public/img/Gameover.jpg');
        this.load.image('Replay', '../public/img/replay.png');
        this.load.image('Home', '../public/img/Home.png');
        this.load.audio('go', '../public/sounds/Game over.mp3')
    }
    create (){
        this.add.image(400,300, 'GameOver');
        
        this.sonido = this.sound.add('go');
        const soundconfig = {
            volume: 1,
            loop: false
        }
        
        this.sonido.play(soundconfig);

        this.startButton = this.add.image(720,550, 'Replay').setInteractive();
        this.startButton.on('pointerdown', () => {
            this.scene.start("Play1");
        });
        this.startButton = this.add.image(80,550, 'Home').setInteractive();
        this.startButton.on('pointerdown', () => {
            this.scene.start("Menu");
        });
    }
    update(){

    }
}

export default GameOver;