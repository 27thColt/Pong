menuState = {
	preload:function() {
		game.load.image("ply1Btn", "assets/img/ply1Btn.png");
		game.load.image("ply2Btn", "assets/img/ply2Btn.png");
	},

	create:function() {

		//Buttons
		var buttonText =  {
			font: "30px Trebuchet MS",
			fill: "#ffffff"
		};

		this.ply1Btn = this.game.add.button(this.game.width * 0.5 - 125, 100, "ply1Btn", this.ply1Btn);

		this.ply2Btn = this.game.add.button(this.game.width * 0.5 - 125, 200, "ply2Btn", this.ply2Btn);

		this.game.input.keyboard.addKeyCapture([
			Phaser.Keyboard.UP,
			Phaser.Keyboard.DOWN,
			Phaser.Keyboard.LEFT,
			Phaser.Keyboard.RIGHT,
			Phaser.Keyboard.SPACEBAR]);
	},

	update:function() {

	},

	ply1Btn:function() {

	},

	ply2Btn:function() {
		game.state.start("play");
	}

};