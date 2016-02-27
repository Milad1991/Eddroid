Eddroid.Menu = function(game) {
  this.startEddroid;
  this.startPrompt;
  this.Eddroidlogo;
  this.backgroundPic;
  this.spaceKey;

};

Eddroid.Menu.prototype = {

  create: function() {
    backgroundPic = this.add.image(0, 0, 'premap');
    Eddroidlogo = this.add.image(90, 40, 'logo');
    startPrompt = this.add.text(120, 400, "Space Bar To Begin The Experience", { font: "35px Arial", fill: "#fff", align: "center" });
    this.enabled = true;
    spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    spaceKey.onDown.add(this.start, this);
    console.log('Daaaammmmnnnnn, Daniel');

  },
  start: function() {
      this.state.start('Main');
  }
};
