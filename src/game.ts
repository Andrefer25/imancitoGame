import 'phaser';

export default class ImancitoGame extends Phaser.Scene
{
    constructor ()
    {
        super('null');
    }

    bgPrincipal: Phaser.GameObjects.TileSprite;
    bgNubes: Phaser.GameObjects.TileSprite;
    bgSea: Phaser.GameObjects.TileSprite;
    bgIsland: Phaser.GameObjects.TileSprite;
    personaje: Phaser.Physics.Arcade.Sprite;
    cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    enemies: Phaser.GameObjects.Group;

    preload ()
    {
        this.load.image('background', 'assets/img/background.png');
        this.load.image('island', 'assets/img/islas.png');
        this.load.image('sea', 'assets/img/mar.png');
        this.load.image('nubes', 'assets/img/backgroundNubes.png');
        this.load.image('metal', 'assets/img/spriteMetales1.png');
        this.load.image('maincharacter', './assets/img/maincharacter.png');
    }

    create ()
    {
        this.bgPrincipal = this.add.tileSprite(0, 0, 1366, 640, "background");
        this.bgPrincipal.setOrigin(0, 0);
        this.bgPrincipal.setScrollFactor(0);

        this.bgNubes = this.add.tileSprite(0, 0, 1366, 640, "nubes");
        this.bgNubes.setOrigin(0, 0);
        this.bgNubes.setScrollFactor(0);

        this.bgIsland = this.add.tileSprite(0, 0, 1366, 640, "island");
        this.bgIsland.setOrigin(0, 0);
        this.bgIsland.setScrollFactor(0);
        
        this.personaje = this.physics.add.sprite(203, 328, "maincharacter");
        this.personaje.setCollideWorldBounds(true);

        this.bgSea = this.add.tileSprite(0, 0, 1366, 640, "sea");
        this.bgSea.setOrigin(0, 0);
        this.bgSea.setScrollFactor(0);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.enemies = this.add.group();

        this.addOneEnemy(1470,70);
        
    }

    update() {
        var cursors = this.cursors;
        var player = this.personaje;
        
        //movimiento escenario
        this.bgIsland.tilePositionX += 1;
        this.bgSea.tilePositionX += 3;
        this.bgNubes.tilePositionX += 0.2;

        //movimiento personaje
        if (cursors.left.isDown)
        {
            player.setVelocityX(-300);
        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(300);
        }
        else if (cursors.up.isDown)
        {
            player.setVelocityY(-200);
        }
        else if (cursors.down.isDown)
        {
            player.setVelocityY(200);
        }
        else
        {
            player.setVelocityX(0);
        }
    }

    addOneEnemy(x,y) {
        var enemy = this.add.sprite(x,y,"metal");
        this.enemies.add(enemy);

        enemy.x += -200;
    }

    addRowOfEnemies() {

    }

}



const config = {
    type: Phaser.AUTO,
    backgroundColor: '#000000',
    width: 1366,
    height: 640,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 400 }
        }
    },
    scene: ImancitoGame
};

const game = new Phaser.Game(config);
