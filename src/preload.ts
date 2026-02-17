import Phaser from "phaser";

declare global {
	interface Window {
		game?: Phaser.Game;
	}
}

class Preload extends Phaser.Scene {
	constructor() {
		super("preload");
	}

	preload() {
		//this.load.setBaseURL("/WebSite/");
		const welcome = document.getElementById("welcome");
		if (welcome) {
			this.load.on("progress", (value: number) => {
				let string = "LOADING";
				for (let i = 0; i < value * 5; i++) {
					string += ".";
				}
				welcome.textContent = string;
			});
		}
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


const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	parent: 'phaser-container',
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		width: 1280,
		height: 720
	},
	backgroundColor:'#FFFFFF',
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

