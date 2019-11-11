import PlayerView from './player_view';

export default class PlayerController {
	/** @param {Phaser.Scene} scene */
	constructor(scene) {
		this.scene = scene;
		this.playerview = new PlayerView(scene);
		this.isRight; //Checking player is in the right side or no 
	}
	preload() {}

	create() {
		this.playerview.create();//calling playerview creat function
	}
	jump = (isRight, onFinish) => {
		console.log("kepencet");
		//function to active the tween effect from player view and move it to the next pos
		this.playerview.jump(isRight, () => {//calling jump function from playerview class
			this.isRight = isRight;//assign isright from this scene to isright from playerviewclass
			onFinish();
		});		
	};
}
