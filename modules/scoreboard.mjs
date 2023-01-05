export class Gamer {
    constructor(Name, Score){
        this.name = Name;
        this.score = Score;
        this.gamers = []
    }
    
    Scoreboard()
    {
        let alias = prompt("Entre ton nom", "User");
        //let gamers = [];
        //self.gamers
        this.gamers.push( new Gamer(alias, 0));
        //console.log(gamers);
        //let game = new Gamer ("test", 0);
        //let table = document.getElementById("scoreTable");

        //console.log(table);
        //console.log(tableau);
        this.renderArray();

    }

    addGamer()
    {
        
    }
    removeGamer(ev)
    {
        this.gamers.splice(ev.target.getAttribute("array-index"), 1);
        renderArray();
    }

    renderArray()
    {
        let tableau= document.getElementById("scoreTable");
        //console.log(tableau);
        tableau.innerText = "";
        this.gamers.forEach((gamer, index) => {
                let tableRow = document.createElement("tr");
                let nameTd = document.createElement("td");
                let scoreTd = document.createElement("td");
                let rmvTd = document.createElement("td");
                let rmvButton = document.createElement("button");
                rmvButton.innerText = "delete";
                rmvButton.setAttribute("array-index", index);
                rmvButton.addEventListener("click", gamer.removeGamer);
                rmvTd.appendChild(rmvButton);

                nameTd.innerText = gamer.name;
                scoreTd.innerText = gamer.score;

                tableRow.appendChild(nameTd);
                tableRow.appendChild(scoreTd);
                tableRow.appendChild(rmvTd);
                tableau.appendChild(tableRow);
        
        });
        //console.log(tableau);
    }


    UpdateScore()
    {
        
    }

}