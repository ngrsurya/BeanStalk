export default class EnviromentView {
	/** @param {Phaser.Scene} scene */
	constructor(scene) {
		this.scene = scene;
        this.background = [];
        this.leaf =[];
        this.positionY = [];
        this.positionX = [];
    }

    create(){
        var width = this.scene.cameras.main.width;
        //Position Height 
        this.positionY[0] = 1070;
        this.positionY[1] = 650;
        this.positionY[2] = 230;
        this.positionY[3] = -190;
                   
        //Position Width (0 = left) & (1 =  right)
        this.positionX[0] = 210;//for left
        this.positionX[1] = 510;//for right

        //Background Image
		this.background[0] = this.scene.add.image(width / 2, this.positionY[0], 'tree');
		this.background[1] = this.scene.add.image(width / 2, this.positionY[1], 'tree');
		this.background[2] = this.scene.add.image(width / 2, this.positionY[2], 'tree');
		this.background[3] = this.scene.add.image(width / 2, this.positionY[3], 'tree');
    
		//Leaf image
		this.leaf[0] = this.scene.add.image(this.positionX[1], this.positionY[0] + 10, 'leaf');
		this.leaf[1] = this.scene.add.image(this.positionX[0], this.positionY[1] + 10, 'leaf');
		this.leaf[2] = this.scene.add.image(this.positionX[1], this.positionY[2] + 10, 'leaf');
		this.leaf[3] = this.scene.add.image(this.positionX[0], this.positionY[3] + 10, 'leaf');
		this.leaf[0].flipX = -1;
        this.leaf[2].flipX = -1;
        
        
    }
}