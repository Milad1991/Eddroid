Eddroid.Menu = function(game) {
  this.startEddroid;
  this.startPrompt;
  this.Eddroidlogo;
  this.backgroundPic;
};

Eddroid.Menu.prototype = {

  create: function() {
    backgroundPic = this.add.image(0, 0, 'premap')
    Eddroidlogo = this.add.image(90, 40, 'logo');
    startPrompt = this.add.text(150, 450, "Click To Begin Your Experience", { font: "35px Arial", fill: "#fff", align: "center" });
    startPrompt.inputEnabled = true;

  },
  update: function() {
      this.state.start('Eddroid');
  }
};
