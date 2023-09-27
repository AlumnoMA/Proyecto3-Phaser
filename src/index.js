import Play1 from "./Escenas/Play1.js";

let config = {
    type: Phaser.AUTO,
    width: 1100,
    height: 700,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: true
        }
    },
    scene: {Play1}
};

let game = new Phaser.Game(config);