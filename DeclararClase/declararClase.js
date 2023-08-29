class TransbordorEspacial {//debe se segir casmesquil
    constructor(planeta) {
        this.planeta = planeta;//propiedad de obejto planeta

    }
}
//objetos
var zeus = new TransbordorEspacial("jupiter");
console.log(zeus.planeta);

var apolo = new TransbordorEspacial("marte");
console.log(apolo.planeta);