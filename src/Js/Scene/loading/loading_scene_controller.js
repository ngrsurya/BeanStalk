import 'phaser';
import LoadingSceneView from './loading_scene_view';

export default class LoadingSceneController extends Phaser.Scene{
    constructor(){
        super('LoadingScene');
        this.view = new LoadingSceneView(this);
  
    }

    init() {
        this.readyCount = 0;
    }
    preload(){
      this.play =  function(){
        this.scene.start('GameScene');
      }.bind(this);
      this.view.create(this.play);;
      this.load.image('barRound','src/assets/image/bar_round.png');
      this.load.image('barScore','src/assets/image/bar_score.png');
      this.load.image('barTimer','src/assets/image/bar_timer.png');
      this.load.image('result','src/assets/image/result.png');
      this.load.image('shader','src/assets/image/shader.png');
      this.load.image('timesUp','src/assets/image/times_up.png');
      this.load.image('tree','src/assets/image/tree.png');
      this.load.image('leaf','src/assets/image/leaf.png');
      this.load.image('axe','src/assets/image/axe.png');
      this.load.spritesheet('character','src/assets/image/jack.png',{frameWidth:457/3,frameHeight:232});
      this.load.spritesheet('buttonArrow','src/assets/image/button_arrow.png',{frameWidth:510/2,frameHeight:164});
      this.load.spritesheet('buttonQuit','src/assets/image/button_quit.png',{frameWidth:674/2,frameHeight:99});
    

    this.load.on('complete',function(){
        this.ready();
    }.bind(this));
     
    this.timedEvenet = this.time.delayedCall(500,this.ready,[],this);    
}

    ready (){
        this.readyCount++;
        if(this.readyCount == 2){
        this.view.setButtonPlayVisible();
        this.view.setLoadingVisible();
        }
    }

}