import 'phaser';

export default class BootSceneController extends Phaser.Scene{
    constructor(){
        super('BootScene');
    }
    preload(){
        this.load.image('loadingScren','src/assets/image/loader.png');
        this.load.image('buttonHider','src/assets/image/mask.png');
        this.load.image('buttonLoading','src/assets/image/Button.png');
    }
    
    create(){
       this.scene.start('LoadingScene');      
    }
    update(){
    }
};