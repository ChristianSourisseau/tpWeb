
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.rect;
	this.currLineWidth = 5;
	this.currColor = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	Pencil.prototype.onInteractionStart = function(Dnd) {
		drawing.paint(ctx);
		switch(this.currEditingMode){
			case editingMode.rect: {
			  this.currentShape = new Rectangle(Dnd.posx_init, Dnd.posy_init, Dnd.posx_fin - Dnd.posx_init, Dnd.posy_fin - Dnd.posy_init, this.currLineWidth, this.currColor);
			  break;
			}
			case editingMode.line: {
				this.currentShape = new Line(Dnd.posx_init, Dnd.posy_init, Dnd.posx_fin, Dnd.posy_fin, this.currLineWidth, this.currColor);
				break;
			}
		}
	}

	Pencil.prototype.onInteractionUpdate = function(Dnd) {
		drawing.paint(ctx);
		this.currentShape.posx_fin = Dnd.posx_fin;
		this.currentShape.posy_fin = Dnd.posy_fin;
		this.currentShape.paint(ctx);
	}

	Pencil.prototype.onInteractionEnd = function(Dnd) {
		drawing.addForm(this.currentShape);
		drawing.paint(ctx);
	}

}


