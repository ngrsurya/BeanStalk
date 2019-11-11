import 'phaser';
import config from '../src/Js/Config';
import BootScene from '../src/Js/Scene/boot/boot_scene_controller';
import LoadingScene from '../src/Js/Scene/loading/loading_scene_controller';
import GameScene from '../src/Js/Scene/gameplay/gameplay_scene_controller';
import ResultScene from '../src/Js/Scene/result/result_scene_controller'

class Game extends Phaser.Game {
  constructor () {
    super(config);
    this.scene.add('BootScene',BootScene);
    this.scene.add('LoadingScene',LoadingScene);
    this.scene.add('GameScene',GameScene);
    this.scene.add('ResultScene',ResultScene);
    this.scene.start('BootScene');
  }
}

window.game = new Game();
