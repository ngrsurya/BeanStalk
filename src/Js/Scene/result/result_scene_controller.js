import 'phaser';
import ResultSceneView from './result_scene_view';

export default class ResultSceneController extends Phaser.Scene{
    constructor(){
        super('ResultScene');
        this.sceneresults = new ResultSceneView(this);
    }

    preload(){
     
    }

    create(){
      this.sceneresults.update();
    }
    
    update(){
    }
}