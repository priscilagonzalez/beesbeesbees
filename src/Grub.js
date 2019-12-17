var Grub = function() {

  this._age = {};
  this.color = "pink";
  this.food = "jelly";
};

Grub.prototype.eat = function(food) {
  this._food = food;
};

