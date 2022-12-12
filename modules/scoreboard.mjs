export class Gamer {
    constructor(Name, Score){
        this.name = Name;
        this.score = Score;
    }
    
}

export function Scoreboard()
{
    let alias = prompt("Entre ton nom", "User");
    let gamers = [];
    gamers.push( new Gamer(alias, 0));
    console.log(gamers);
    //let table = document.getElementById("scoreTable");

    //console.log(table);
    //console.log(tableau);
    renderArray(gamers);

}

export function renderArray(gamers)
{
    let tableau= document.getElementById("scoreTable");
    console.log(tableau);
    tableau.innerText = "";
    gamers.forEach((gamer, index) => {
            let tableRow = document.createElement("tr");
            let nameTd = document.createElement("td");
            let scoreTd = document.createElement("td");
            //rmvTd = document.createElement("td");
            //rmvButton = document.createElement("button");
            //rmvButton.innerText = "delete";
            //rmvButton.setAttribute("array-index", index);
            //rmvButton.addEventListener("click", removeStudent);
            //rmvTd.appendChild(rmvButton);

            nameTd.innerText = gamer.name;
            scoreTd.innerText = gamer.score;

            tableRow.appendChild(nameTd);
            tableRow.appendChild(scoreTd);
            //tableRow.appendChild(rmvTd);
            tableau.appendChild(tableRow);
    
    });
    console.log(tableau);
}