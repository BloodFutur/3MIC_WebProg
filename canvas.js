canvas = document.getElementById('canvas');

//fonction pour dessiner un cube de bois du jeu
function DrawGameCub(x, y){
    ctx = canvas.getContext('2d');
    const a = 10;
    ctx.fillStyle='brown';
    ctx.fillRect(x, y, a, a);
    ctx.save();
}

//fonction pour dessiner des cercles du jeu
function Drawcircle(x, y){
    ctx = canvas.getContext('2d');
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
    ctx = canvas.getContext('2d');
    const a = 10;
    ctx.fillStyle="black";
    ctx.fillRect(x, y, a, a);
    ctx.save();
}

//inserer l image de Mario
function Mario(x, y){
    ctx = canvas.getContext('2d');
    const dim = 100;
    //let image=document.getElementByid=("id image en html");
    let Marioimg = new Image();
    Marioimg.src = './mario.png';
    
    //ctx.drawImage(image,x,y,dim,dim);
    Marioimg.addEventListener('load',function(){
    ctx.drawImage(Marioimg,x,y,dim,dim);
    },false);
}

//function qui met à jour le canvas
function MajJeu(){
    
}


DrawGameCub(100,100);
Mario(200, 100);