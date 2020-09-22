
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Form.prototype.paint = function() {
    //abstract method?
}

Rectangle.prototype.paint = function(ctx) {

    ctx.rect(this.getInitX(), this.getInitY(), this.getFinX(), this.getFinY());
    ctx.strokeStyle = this.getColor(); 
    ctx.lineWidth = this.getThickness();
    ctx.stroke();
  };
  
  Line.prototype.paint = function(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinX(), this.getFinY());
    ctx.strokeStyle = this.getColor();
    ctx.lineWidth = this.getThickness();
    ctx.stroke();
  };
  
  Drawing.prototype.paint = function(ctx, canvas) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
    
    this.getForms().forEach(function (eltDuTableau) {
      // now fill the canvas
     eltDuTableau.paint(ctx);
    });
}
