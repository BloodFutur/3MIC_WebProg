const ctx = canvas.getcontext('canvas');

//fonction pour dessiner un cube de bois du jeu
function DrawGameCub(x, y){
    const a = 10;
    ctx.fillStyle="brown";
    ctx.fillRect(x, y, a, a);
    ctx.save();
}

//fonction pour dessiner des cercles du jeu
function Drawcircle(x, y){
    //let context=canvas.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth="2"
    ctx.arc(x,y,5, 0, 2*Math.PI);
    ctx.fillStyle="grey";
    ctx.stroke();
    ctx.save();
}

//fonction pour dessiner un cube du labyrinthe
function DrawLabCub(){
    const a = 10;
    ctx.fillStyle="black";
    ctx.fillRect(x, y, a, a);
    ctx.save();
}

//inserer l image de Mario
function Mario(){
    
}