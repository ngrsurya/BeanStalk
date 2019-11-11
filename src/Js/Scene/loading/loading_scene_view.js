export default class LoadingSceneView {
   /** @param {Phaser.Scene} scene */
    constructor(scene){
      this.scene = scene;
      this.buttonScreen;
    }

    create(onButtonClicked){
        var width = this.scene.cameras.main.width;
        var height= this.scene.cameras.main.height;
        this.loadScene = false;
        this.loadingScreen = this.scene.add.image(width/2,height/2,'loadingScren');
        this.buttonHider = this.scene.add.image(614,1155,'buttonHider');
        this.buttonScreen = this.scene.add.image(613,1155,'buttonLoading').setInteractive();
        
        this.buttonScreen.visible = false;
        this.buttonHider.setDepth(2);
        this.buttonHider.setScale(1.3,1.3);
           
        this.loadingText = this.scene.make.text({
        x: width/2,
        y: height/2 + 560,
        text:'Loading...',
        style:{
        font:'48px monospace',
        fill: '#ffffff'
        }
      });
    
    this.loadingText.setOrigin(0.5,0.5);

    this.buttonScreen.on('pointerdown',onButtonClicked);
    }

    setButtonPlayVisible(){
      this.buttonHider.visible = false;
      this.buttonScreen.visible = true;
    }

    setLoadingVisible(){
      this.loadingText.visible = false;
    }
    


    setText(value){
      this.percentText.setText(parseInt(value * 100)+'%');
    }

};