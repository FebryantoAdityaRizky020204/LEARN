/**
 * Object Oriented Programming
 * 
 * TODO: Prototype
 * ! ?????
 */

// TODO: FUNCTION
const hex = (r,g,b) => {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

const rgb = (r,g,b) => {
    return `rgb(${r},${g}${b})`;
}


// TODO: MEMBUAT OBJECT MENGGUNAKAN FACTORY FUNCTION
function convertColor(r,g,b) {
    const color = {}
    color.r = r
    color.g = g
    color.b = b

    color.hex = function() {
        const {r, g, b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    }

    color.rgb = function() {
        const {r, g, b} = this;
        return `rgb(${r},${g}${b})`;
    }

    return color
}

// TODO: Membuat Object dengan Constructor Function

// ?CONSTRUCTOR
function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

// ! INSTANCE [const color1 = new Color(12,21,23)]

// ?METHOD
Color.prototype.rgb = function() {
    const {r, g, b} = this;
    return `rgb(${r},${g}${b})`;
}

Color.prototype.rgba = function(a = 1.0) {
    const {r, g, b} = this;
    return `rgb(${r},${g}${b}${a})`;
}

Color.prototype.hex = function() {
    const {r, g, b} = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

// TODO: Membuat Object dengan Class 
class Colors {
    constructor(r = 0, g = 0, b = 0){
        this.r = r;
        this.g = g;
        this.b = b;
        this.buatNgeTes();
    }

    buatNgeTes() {
        console.log('ini dipanggil');
    }

    rgb() {
        const {r, g, b} = this;
        return `rgb(${r},${g}${b})`;
    }
    
    rgba(a = 1.0) {
        const {r, g, b} = this;
        return `rgb(${r},${g}${b}${a})`;
    }
    
    hex() {
        const {r, g, b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    }
}


// TODO: EXTEND dan SUPER CLASS
class Peliharaan { // PARENT CLASS
    constructor(nama, umur){
        this.nama = nama
        this.umur = umur
    }

    makan() {
        return `${this.nama} lagi makan`
    }
}

class Kucing extends Peliharaan { // CHILD CLASS
    // ? misalnya kita ingin membuat params baru
    constructor(name, age, lives){
        super(name, age) // ? untuk parse params child ke params di parent class
        this.lives = lives
    }

    mengeong() {
        return `Meongg!!`
    }
}

class Anjing extends Peliharaan { // CHILD CLASS
    menggongong(){
        return `GukGuk!!`
    }
}

class Sapi extends Peliharaan { // CHILD CLASS
    Moooo(){
        return `Moooo!!`
    }
}

// ? Function to add 2 number
const add = (a, b) => a + b




