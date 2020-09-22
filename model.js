
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

function Rectangle(xinit, yinit, w, h, th, c) {
    // top left corner
    this.tlx = xinit;
    this.tly = yinit;
    this.brx = Math.abs(xinit - w);
    this.bry = Math.abs(yinit - h);
    Form.call(this, th, c);

    Rectangle.prototype.getInitX = function() {
        return this.tlx;
    }
    Rectangle.prototype.getInitY = function() {
        return this.tly;
    }
    Rectangle.prototype.getFinX = function() {
        return this.brx;
    }
    Rectangle.prototype.getFinY = function() {
        return this.bry;
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
}