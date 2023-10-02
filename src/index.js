import Play1 from "./Escenas/Play1.js";
import Menu from "./Escenas/Menu.js";
import GameOver from "./Escenas/gameOver.js";

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
    scene: [Menu, Play1, GameOver]
};

let game = new Phaser.Game(config);