import Play1 from "./Escenas/Play1.js";

let config = {
    type: Phaser.AUTO,
    width:  800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: [Play1]
};

let game = new Phaser.Game(config);