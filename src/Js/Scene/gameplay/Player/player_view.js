export default class PlayerView {
	/** @param {Phaser.Scene} scene */
	constructor(scene) {
		this.scene = scene;
		this.player;
		this.positionLeft = 200; //position to player stand at leaf
		this.positionRight = 500; //position to player stand at leaf
	}
	create() {
		var height = this.scene.cameras.main.height;
		this.player = this.scene.add.sprite(this.positionRight, height / 2 + 300, 'character', 0); //adding player sprite to gamescene
		this.player.setDepth(3);
	}

	jump = (toRight, onFinish) => {
		//adding tween function animate player jump to the another side
		this.tweenRight = this.scene.tweens.add({
			targets: this.player,
			props: {
				x: { value: toRight ? 500 : 200, duration: 800, ease: 'Linear' },//adding tween at x value(500 to right,200 to left)
				y: { value: toRight ? 120 : 550, duration: 800, ease: 'Linear' }//adding tween at y value(120 to right,550 to left)
			},
			onComplete: () => {//checking what to after complete tweens
				this.player.setFrame(0);//setting frame to 0 (idle position)
				this.player.flipX = toRight ? -1 : 0;//switch flip depends on which side we current stay
				onFinish();
			}
		});
		this.player.setFrame(1);//setplayerto frame 1 which is jump sprite
		this.player.flipX = toRight ? 0 : -1;//set flip depends on which side we're going
	};
}
