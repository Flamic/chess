const IMAGE_PATH = 'img';
const IMAGE_FORMAT = 'png';

class ChessPiece {
    color;
    type;
    row;
    col;

    constructor (color, type, row, col) {
        this.color = color;
        this.type = type;
        this.row = row;
        this.col = col;
    }

    get imageSource() {
        return `${IMAGE_PATH}/${this.color}${this.type}.${IMAGE_FORMAT}`;
    }

    get image() {
        let img = document.createElement('img');
        img.src = this.imageSource;
        return img;
    }
}