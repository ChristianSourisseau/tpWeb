
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColor = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	Pencil.prototype.onInteractionStart = function(Dnd) {
		switch(this.currEditingMode){
			case editingMode.rect: {
			  currentShape = new Rectangle(Dnd.posx_init, Dnd.posy_init, 0, 0, currLineWidth, currColor);
			  this.currentShape.paint(ctx);
			}
			case editingMode.line: {
				currentShape = new Line(Dnd.posx_init, Dnd.posy_init, 0, 0, currLineWidth, currColor);
				this.currentShape.paint(ctx);
			}
		  }
	}

	Pencil.prototype.onInteractionUpdate = function(Dnd) {
		this.currentShape.posx_fin = Dnd.posx_fin;
		this.currentShape.posy_fin = Dnd.posy_fin;
		this.currentShape.paint(ctx);
	}

	Pencil.prototype.onInteractionEnd = function(Dnd) {
		this.currentShape.posx_fin = Dnd.posx_fin;
		this.currentShape.posy_fin = Dnd.posy_fin;
		drawing.addForm(currentShape);
	}

};


