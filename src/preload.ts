import Phaser from "phaser";

class Preload extends Phaser.Scene {
	constructor() {
		super("preload");
	}

	preload() {
		//this.load.setBaseURL("/WebSite/");
		this.welcome = document.getElementById("welcome");
		this.load.on("progress", (value: number) => {
			let string = "LOADING";
			for (let i = 0; i < value * 5; i++) {
				string += ".";
			}
			this.welcome.textContent = string;
		});
		this.load.image("planet", "assets/planet.png");
		/*
		this.load.once("complete", () => {
			import("./menu").then(({Menu}) => {
				this.scene.add("Menu", Menu, true);
			});
		}
		*/
	}
}

const wrapper = document.getElementById('game-wrapper')!;
let game: Phaser.Game;

const config: Phaser.Types.Core.GamesConfig = {
	type: Phaser.AUTO,
	parent: 'phaser-container',
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		width: 1280,
		height: 720
	},
	backgroundColor:'#000000',
	physics: {
		default: 'arcade',
		arcade: {
			debug: 
				false
		}
	},
	scene: [Preload],
	audio: {
		disableWebAudio: false
	}
};

if (!window.game) {
	window.game = new Phaser.Game(config);
}

