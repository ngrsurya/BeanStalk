export default class GameplaySceneView {
	/** @param {Phaser.Scene} scene */
	constructor(scene) {
		this.scene = scene;
		this.backGround = []; //background array
		this.leaf = []; //leaf image
		this.position = []; //background position array
	}
	preload() {}

	create(LeftButtonClickEvent, RightButtonClickEvent) {
		this.position[0] = 1070;
		this.position[1] = 650;
		this.position[2] = 230;
		this.position[3] = -190;
		var width = this.scene.cameras.main.width;
		var height = this.scene.cameras.main.height;

		//Button
		this.buttonLeft = this.scene.add.sprite(170, height - 100, 'buttonArrow', 0).setInteractive();
		this.buttonRight = this.scene.add.sprite(550, height - 100, 'buttonArrow', 0).setInteractive();
		this.buttonLeft.flipX = 1;
		this.buttonRight.setDepth(2);
		this.buttonLeft.setDepth(2);
		this.buttonRight.on('pointerdown', RightButtonClickEvent);
		this.buttonLeft.on('pointerdown', LeftButtonClickEvent);
		
	}
}
