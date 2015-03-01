// Creates a new game
game = new Phaser.Game(700, 1000, Phaser.AUTO, "game");

//Adds a the main "play" state
game.state.add("play", playState);

game.state.start("play");