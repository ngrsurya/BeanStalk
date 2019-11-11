import EnviromentView from './enviroment_view';
export default class EnviromentController {
	/** @param {Phaser.Scene} scene */
	constructor(scene) {
        this.scene = scene;
        this.enviromentview = new EnviromentView(scene);
        this.startMove;  
        this.check = 0;
        this.pos = [];
        console.log("cons");

        this.background = [];   
    }

    create(){
        this.startMove = false;
        console.log("create");
        this.enviromentview.create();
        this.background[0] = this.enviromentview.background[0];
        this.background[1] = this.enviromentview.background[1];
        this.background[2] = this.enviromentview.background[2];
        this.background[3] = this.enviromentview.background[3];
    }
    update(){
       if(this.startMove){
            this.enviromentmovemen();
        }


      
    }
    enviromentmovemen = () => {
        this.pos[0] = this.background[0].y + 200;
        this.pos[1] = this.background[1].y + 200;
        this.pos[2] = this.background[2].y + 200;
        this.pos[3] = this.background[3].y + 200;
        for(var j = 0;j<this.background.length;j++){
            if(this.background[j].y < this.pos[j]){
                this.background[j].y += 10;

                if(this.background[j] >= this.pos[j]){
                    this.background[j] += 0;
                }
            }
        } 
            for(var i=0;i<this.background.length;i++){
                if(this.background[i].y == 1490){//1470 stand for max height config
                    this.background[i].y = -190; 
                    this.startMove = false;
                    console.log('enviromentmovement'+this.startMove);
                }
            }
        
    }

    startMoveTrue(){
        this.startMove = true;
        this.check = 5;;
    }
}