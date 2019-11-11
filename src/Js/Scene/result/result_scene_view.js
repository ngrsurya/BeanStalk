export default class ResultSceneView{
  /** @param {Phaser.Scene} scene */
    constructor(scene){
        this.scene= scene;
    }

    preload(){
    }

    update(){
        var width = this.scene.cameras.main.width;
        var height = this.scene.cameras.main.width;
        this.tara = this.scene.add.text(width/2,height/2,'tara',{ fontSize: '32px', fill: '#fff' })
    }
};