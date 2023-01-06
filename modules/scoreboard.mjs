/**
 * @fileoverview Scoreboard module.
 * This module is responsible for the scoreboard.
 * @class Scoreboard
 * @class Gamer
 */

/**
 * @class Scoreboard
 * @classdesc This class is responsible for the scoreboard.
 */
export class Scoreboard {

    /**
     * @constructor
     * @param {Gamer} currentGamer - The current gamer.
     * @param {Gamer[]} gamers - The list of gamers.
     */
    constructor() {
        this.currentGamer = new Gamer("user", 0);
        this.gamers = [];
        this.gamers.push(this.currentGamer);
      }

    
    /**
     * @description
     * @param {String} name - The name of the gamer.
     * 
     */
    updatedName(name) {
        let previousGamer = this.currentGamer;
        if(name != this.currentGamer.name) {
            this.currentGamer = new Gamer(name, 0);
            this.addGamer(this.currentGamer);
        }

        if (previousGamer != this.currentGamer && previousGamer.score == 0) {
            this.removeGamer(previousGamer);
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

    updateScoreCurrentGamer(score) {
        let newScore = this.currentGamer.score + score;
        this.currentGamer.updateScore(newScore);
        // Update score of the gamer in the table gamers
        this.gamers.forEach((gamer, index) => {
            if (gamer.name == this.currentGamer.name) {
                gamer.updateScore(newScore);
            }
        });

        this.renderArray();
    }

}


/**
 * @class Gamer
 * @classdesc This class is responsible for the gamer.
 */
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
