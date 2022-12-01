let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

//fonction pour dessiner un cube de bois du jeu
function DrawGameCub(ctx, x, y){
    const a = 10;
    ctx.fillStyle='#DEB887';
    ctx.fillRect(x, y, a, a);
    ctx.save();
}
//fonction dessiner cube de bois avec img
function imgDrawGameCub(ctx, x,y){
    const dim = 100;
    let cubebois = new Image();
    cubebois.src = //lien de l'image;
    cubebois.addEventListener('load',function(){
        ctx.drawImage(cubebois,x,y,dim,dim);
    },false);
}

//fonction pour dessiner des cercles du jeu
function Drawcircle(ctx, x, y){
    //let context=canvas.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth="2"
    ctx.arc(x,y,5, 0, 2*Math.PI);
    ctx.fillStyle="grey";
    ctx.stroke();
    ctx.save();
}
//function pour dessiner des cercles  à partir de l'image
function imgDrawcircle(ctx, x,y){
    const dim = 100;
    let circle = new Image();
    circle.src = //lien de l'image;
    circle.addEventListener('load',function(){
        ctx.drawImage(circle,x,y,dim,dim);
    },false);
}

//fonction pour dessiner un cube du labyrinthe
function DrawLabCub(ctx){
    const a = 10;
    ctx.fillStyle="black";
    ctx.fillRect(x, y, a, a);
    ctx.save();
}

//inserer l image de Mario
function Mario(ctx, x, y){
    const dim = 100;
    //let image=document.getElementByid=("id image en html");
    let Marioimg = new Image();
    Marioimg.src = './mario.png';
    
    //ctx.drawImage(image,x,y,dim,dim);
    Marioimg.addEventListener('load',function(){
        ctx.drawImage(Marioimg,x,y,dim,dim);
    },false);
}

//function généric qui dessine une image
function DrawImg(ctx, tile){
    const dim = 20;
    let img= new Image();
    img.src = tile.image;//lien de l'image;
    img.addEventListener('load',function(){
        ctx.drawImage(img,tile.x,tile.y,dim,dim);
    },false);
    ctx.save();
}

//function qui met à jour le canvas
function MajJeu(ctx, Mat){
    while(true){
        ctx.clearRect(0,0, canvas.width, canvas.height);
        let lignes= 0; // à définir plus tard
        let colones=0;// à définir plus tard
        for (let i=0; i< lignes; i++){
            for(let j=0; j< colones; j++){
                let obj = Mat[i][j];
                DrawImg(obj);

            }
        }

    }
}


DrawGameCub(ctx, 100,100);
Mario(ctx, 200, 100);
