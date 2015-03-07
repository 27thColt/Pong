playState = {
    preload:function() {
        game.load.image("player1", "assets/img/player1.png");
        game.load.image("player2", "assets/img/player2.png");
        game.load.image("ball", "assets/img/ball.png");
        
    },
    
    create:function() {
        //score of the players
        scorePlayer1 = 0;
        scorePlayer2 = 0;


        this.player1 = game.add.sprite(this.game.width - this.game.width + 5, this.game.height * 0.5 - 17, "player1");
        this.player2 = game.add.sprite(this.game.width - 40, this.game.height * 0.5 - 17, "player2");
        this.ballGroup = this.game.add.group();


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
        this.playerAcceleration = 500;

        //Will spawn a ball after everything is done being created
        this.spawnBall();
    },
    update:function() {
        //collision
        this.game.physics.arcade.collide(this.player1, ball);
        this.game.physics.arcade.collide(this.player2, ball);

        this.keyPress();

        //Updates the scores and ball position when it reaches one player's side
        if (ball.body.x >= this.game.width - ball.body.width) {
            console.log("Player 1 Point!");
            scorePlayer1 += 1;
            this.spawnAgain();
            document.getElementById("p1score").innerHTML = scorePlayer1;
        } else if (ball.body.x <= 0) {
            console.log("Player 2 Point!");
            scorePlayer2 += 1;
            this.spawnAgain();
            document.getElementById("p2score").innerHTML = scorePlayer2;
        };

        //Updates if one player hits the ball
        if (ball.body.touching.right == true && this.player2.body.touching.left == true) {
            console.log("Player 2 hits!");
            if (ball.body.velocity.y >= 0 && ball.body.velocity.y <= 100) {
                ball.body.velocity.y += 200;
            };


        } else if (ball.body.touching.left == true && this.player1.body.touching.right == true) {
            console.log("Player 1 hits!");
            if (ball.body.velocity.y >= -100 && ball.body.velocity.y <= 100) {
                ball.body.velocity.y += 200;
            };
        };
    
    },

    keyPress:function() {
        //Player 1 movement
        if (this.input.keyboard.isDown(Phaser.Keyboard.W)) {
            this.player1.body.velocity.y = -this.playerAcceleration;

        } else if (this.input.keyboard.isDown(Phaser.Keyboard.S)) {
            this.player1.body.velocity.y = this.playerAcceleration;

        } else { 
            this.player1.body.velocity.y = 0;

        };

        //Player 2 movement
        if (this.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            this.player2.body.velocity.y = -this.playerAcceleration;

        } else if (this.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            this.player2.body.velocity.y = this.playerAcceleration;

        } else { 
            this.player2.body.velocity.y = 0;

        };

    },

    //Spawns a ball to the screen
    spawnBall:function() {
        ball = this.ballGroup.create(this.game.width * 0.5, Math.floor(Math.random() * 700), "ball");
        this.game.physics.enable(ball, Phaser.Physics.ARCADE);

        ball.body.bounce.set(1);
        ball.body.allowGravity = false;
        ball.body.immovable = false;
        ball.body.collideWorldBounds = true;

        ballVel = 600;

        ball.body.velocity.x = ballVel;
        ball.body.velocity.y = Math.floor((Math.random() * 350) - 100);

    },

    spawnAgain:function() {
        ball.body.x = this.game.width * 0.5;
        ball.body.y = Math.floor(Math.random() * 700);
        ball.body.velocity.y = Math.floor(Math.random() * 250);

    }

};