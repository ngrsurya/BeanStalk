import 'phaser';
import GameplaySceneView from './gameplay_scene_view';
import PlayerController from './Player/player_controller';
import EnviromentController from './Enviroment Tree/enviroment_controller';

export default class GameplaySceneController extends Phaser.Scene {
	constructor() {
		super('GameScene');
		this.view = new GameplaySceneView(this);
		this.playercontroller = new PlayerController(this);
		this.enviromentcontroller = new EnviromentController(this);
	}

	preload() {
		this.playercontroller.create();
		this.enviromentcontroller.create();
	}

	create() {
		this.view.create(
			() => this.jumpLeft()
			,() => this.jumpRight()
		);
		
	}

	jumpLeft = () =>{
		 this.playercontroller.jump(false, () => {})
		 this.enviromentcontroller.startMoveTrue()
	}

	jumpRight(){
		this.playercontroller.jump(true, () => {})
		this.enviromentcontroller.startMoveTrue()
	}

	update() {
		this.enviromentcontroller.update();
	}
}
