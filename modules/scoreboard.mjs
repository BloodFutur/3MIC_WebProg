export class Scoreboard {
    constructor() {
        this.currentGamer = new Gamer("user", 0);
        this.gamers = [];
        this.gamers.push(this.currentGamer);

      }

    
    updatedName(name) {
        let previousGamer = this.currentGamer;
        if(name != this.currentGamer.name) {
            console.log("updated");
            this.currentGamer = new Gamer(name, 0);
            this.addGamer(this.currentGamer);
        }

        if (previousGamer != this.currentGamer && previousGamer.score == 0) {
            this.removeGamer(previousGamer);
            console.log("removed");
            console.log(this.gamers);   
        }

        this.renderArray();
    }

    addGamer(gamer) {
        this.gamers.push(gamer);
    }

    removeGamer(gamer) {
        this.gamers.splice(this.gamers.indexOf(gamer), 1);
    }

    renderArray() {
        let table = document.getElementById("scoreTable");
        table.innerHTML = "";
        this.gamers.forEach((gamer, index) => {
            let row = table.insertRow();
            let cell1 = row.insertCell();
            let cell2 = row.insertCell();
            cell1.innerHTML = gamer.name;
            cell2.innerHTML = gamer.score;
        });

    }

    updateCurrentGamer(gamer) {
        this.currentGamer = gamer;
    }

    getCurrentGamer() {
        return this.currentGamer;
    }


}


export class Gamer {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }   

    updateScore(score) {
        this.score = score;
    }      
    
    updateName(name) {  
        this.name = name;
    }

    getScore() {
        return this.score;
    }

    getName() {
        return this.name;
    }
}
