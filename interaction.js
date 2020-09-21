
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  // Définir ici les attributs de la 'classe'
  this.posx_init = 0;
  this.posy_init = 0;
  this.posx_fin = 0;
  this.posy_fin = 0;
  this.mousedown = false;

	// Developper les 3 fonctions gérant les événements
  DnD.prototype.mouseDown = function(evt) {
    //mouse down and take original position
    this.mousedown = true;
    this.posx_init = getMousePosition(canvas, evt).x;
    this.posy_init = getMousePosition(canvas, evt).y;

    //log events
    console.log(this.posx_init);
    console.log(this.posy_init);

  }

  DnD.prototype.mouseUp = function(evt) {
    this.mousedown = false;
    this.posx_fin = getMousePosition(canvas, evt).x;
    this.posy_fin = getMousePosition(canvas, evt).y;

      //log events
      console.log(this.posx_fin);
      console.log(this.posy_fin);
  }

  DnD.prototype.mouseMove = function(evt) {
    if (this.mousedown) {
       //draw something
      console.log('moving');
    }
  }
  
  // Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.mouseDown, false);
  canvas.addEventListener('mousemove', this.mouseMove, false);
  canvas.addEventListener('mouseup', this.mouseUp, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};


