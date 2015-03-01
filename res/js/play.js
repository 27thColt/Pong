playState = {
    preload:function() {
        game.load.image("player1", "assets/img/player1.png");
        game.load.image("player2", "assets/img/player2.png");
        
        
    },
    
    create:function() {
        this.player1 = game.add.sprite(this.game.width - this.game.width + 5, this.game.height - this.game.height, "player1");
        this.player2 = game.add.sprite(this.game.width - 40, this.game.height - this.game.height, "player2");

        //Enabling ARCADE physics on boths players
        this.game.physics.enable(this.player1, Physics.Phaser.ARCADE);
        this.game.physics.enable(this.player2, Physics.Phaser.ARCADE);

        //Enables/Disables ARCADE Physics features like gravity, acceleration, etc.
        this.player1.body.acceleration = true;
        this.player1.body.allowGravity = false;
        this.player1.body.allowRotation = false;
        this.player1.body.immovable = true;

        this.player2.body.acceleration = true;
        this.player2.body.allowGravity = false;
        this.player2.body.allowRotation = false;
        this.player2.body.immovable = true;

        //normal keyboard scrolling won't work
        this.game.input.keyboard.addKeyCapture([
            Phaser.Keyboard.UP,
            Phaser.Keyboard.DOWN,
            Phaser.Keyboard.LEFT,
            Phaser.Keyboard.RIGHT,
            Phaser.Keyboard.SPACEBAR]);

    },
    update:function() {
    
    
    }

};