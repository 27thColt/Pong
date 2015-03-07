// Creates a new game
game = new Phaser.Game(1000, 700, Phaser.AUTO, "game");

//Adds a the main "play" state
game.state.add("play", playState);
game.state.add("menu", menuState);

game.state.start("menu");