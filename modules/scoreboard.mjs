/**
 * @fileoverview Scoreboard module.
 * This module is responsible for the scoreboard.
 * @class Scoreboard
 * @class Gamer
 */

/**
 * @class Scoreboard
 * @classdesc This class is responsible to display the scoreboard and manage scores of the gamers.
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
     * After name changed in the input field, this method is called.
     * If the name is different from the current gamer, a new gamer is created.
     * @param {String} name - The name of the gamer.
     */
    updatedName(name) {
        let previousGamer = this.currentGamer;
        if(name != this.currentGamer.name) {
            this.currentGamer = new Gamer(name, 0);
            this.addGamer(this.currentGamer);
        }

        if (previousGamer != this.currentGamer && previousGamer.score == 0) {
            this.removeGamer(previousGamer);
        }

        this.renderArray();
    }

    /**
     * Add a gamer to the list of gamers.
     * @param {Gamer} gamer 
     */
    addGamer(gamer) {
        this.gamers.push(gamer);
    }

    /**
     * Remove a gamer from the list of gamers.
     * @param {Gamer} gamer
     */
    removeGamer(gamer) {
        this.gamers.splice(this.gamers.indexOf(gamer), 1);
    }

    /**
     * Render the list of gamers in the table.
     */
    renderArray() {
        let table = document.getElementById("scoreTable");
        table.innerHTML = ""; // Clear the table
        this.gamers.forEach((gamer, index) => {
            let row = table.insertRow();
            let cell1 = row.insertCell();
            let cell2 = row.insertCell();
            cell1.innerHTML = gamer.name;
            cell2.innerHTML = gamer.score;
        });

    }

    /**
     * Update the current gamer who is playing.
     * @param {Gamer} gamer
     */
    updateCurrentGamer(gamer) {
        this.currentGamer = gamer;
    }

    /**
     * Get the current gamer who is playing.
     * @returns {Gamer} The current gamer.
     */
    getCurrentGamer() {
        return this.currentGamer;
    }

    /**
     * Update the score of the current gamer in the scoreboard.
     * @param {Number} score 
     */
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
    /**
     * @constructor
     * @param {String} name 
     * @param {Number} score 
     */
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }   

    /**
     * Set the score of the gamer.
     * @param {Number} score 
     */
    updateScore(score) {
        this.score = score;
    }      
    
    /**
     * Set the name of the gamer.
     * @param {String} name 
     */
    updateName(name) {  
        this.name = name;
    }

    /**
     * Get the score of the gamer.
     * @returns {Number} The score of the gamer.
     */
    getScore() {
        return this.score;
    }

    /**
     * Get the name of the gamer.
     * @returns {String} The name of the gamer.
     */
    getName() {
        return this.name;
    }
}
