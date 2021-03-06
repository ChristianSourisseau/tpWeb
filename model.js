
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing() {
    this.formarray = new Array();

    Drawing.prototype.getForms = function() {
        return this.formarray;
    }

    Drawing.prototype.addForm = function(form) {
        this.formarray.push(form)
    }
}

function Form(thickness, color) {
    this.thickness = thickness;
    this.color = color;

    Form.prototype.getThickness = function() {
        return this.thickness;
    }
    Form.prototype.getColor = function() {
        return this.color;
    }
}

function Rectangle(xinit, yinit, width, height, thickness, color) {
    // top left corner
    this.tlx = xinit;
    this.tly = yinit;
    this.posx_fin = xinit + width;
    this.posy_fin = yinit + height;
    this.height = height;
    this.width = width;
    Form.call(this, thickness, color);
    Rectangle.prototype.getInitX = function() {
        return this.tlx;
    }
    Rectangle.prototype.getInitY = function() {
        return this.tly;
    }
    Rectangle.prototype.getFinX = function() {
        return this.posx_fin;
    }
    Rectangle.prototype.getFinY = function() {
        return this.posy_fin;
    }
    Rectangle.prototype.getHeight = function() {
        return this.height;
    }

    Rectangle.prototype.getWidth = function() {
        return this.width;
    }


    Rectangle.prototype.getThickness = function() {
        return this.thickness;
    }
    Rectangle.prototype.getColor = function() {
        return this.color;
    }
}

function Line(initx, inity, finx, finy, th, c) {
    //coordonates of two points
    this.posx_init = initx;
    this.posy_init = inity;
    this.posx_fin = finx;
    this.posy_fin = finy;
    Form.call(this, th, c);

    Line.prototype.getInitX = function() {
        return this.posx_init;
    }
    Line.prototype.getInitY = function() {
        return this.posy_init;
    }
    Line.prototype.getFinX = function() {
        return this.posx_fin;
    }
    Line.prototype.getFinY = function() {
        return this.posy_fin;
    }

    Line.prototype.getThickness = function() {
        return this.thickness;
    }
    Line.prototype.getColor = function() {
        return this.color;
    }
}