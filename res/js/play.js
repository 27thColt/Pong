playState = {
    preload:function() {
        game.load.image("player1", "assets/img/player1.png");
        game.load.image("player2", "assets/img/player2.png");
        
        
    },
    
    create:function() {

        this.player1 = game.add.sprite(this.game.width - this.game.width + 5, this.game.height * 0.5, "player1");
        this.player2 = game.add.sprite(this.game.width - 40, this.game.height * 0.5 , "player2");

        //Enabling ARCADE physics on boths players
        this.game.physics.enable(this.player1, Phaser.Physics.ARCADE);
        this.game.physics.enable(this.player2, Phaser.Physics.ARCADE);

        //Enables/Disables ARCADE Physics features like gravity, acceleration, etc.
        this.player1.body.allowGravity = false;
        this.player1.body.immovable = true;
        this.player1.body.collideWorldBounds = true;

        this.player2.body.allowGravity = false;
        this.player2.body.immovable = true;
        this.player2.body.collideWorldBounds = true;

        //normal keyboard scrolling won't work
        this.game.input.keyboard.addKeyCapture([
            Phaser.Keyboard.UP,
            Phaser.Keyboard.DOWN,
            Phaser.Keyboard.LEFT,
            Phaser.Keyboard.RIGHT,
            Phaser.Keyboard.SPACEBAR]);

        //Player Acceleration when it moves
        this.playerAcceleration = 300;
        this.maxSpeed = 400;
        this.playerDrag = 150;

        this.player1.body.maxVelocity.setTo(this.maxSpeed, this.maxSpeed);
        this.player2.body.maxVelocity.setTo(this.maxSpeed, this.maxSpeed);
        this.player1.body.drag.setTo(this.playerDrag, this.playerDrag);
        this.player2.body.drag.setTo(this.playerDrag, this.playerDrag);

    },
    update:function() {
        //Player 1 movement
        if (this.input.keyboard.isDown(Phaser.Keyboard.W)) {
            this.player1.body.acceleration.y = -this.playerAcceleration;

        } else if (this.input.keyboard.isDown(Phaser.Keyboard.S)) {
            this.player1.body.acceleration.y = this.playerAcceleration;

        } else { 
            this.player1.body.acceleration.y = 0;

        };

        //Player 2 movement
        if (this.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            this.player2.body.acceleration.y = -this.playerAcceleration;

        } else if (this.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            this.player2.body.acceleration.y = this.playerAcceleration;

        } else { 
            this.player2.body.acceleration.y = 0;

        };
    
    }

};