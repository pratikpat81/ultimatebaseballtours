function onPageLoadALE() {
    getStandings("AL", "East")
    .then(data => {
        console.log(data)
        document.getElementById("demo1").innerHTML = data.map(team => {
            return `<ul class="container2"> 
            <p> ${team.DivisionRank}</p>
            <p> ${team.Division}</p>
            <p> ${team.City}</p>
            <p> ${team.Team}</p>
            <p> ${team.Wins}</p>
            <p> ${team.Losses}</p>
            </ul>`
        }).join("")
    })
}

function onPageLoadALW() {
    getStandings("AL", "West")
    .then(data => {
        console.log(data)
        document.getElementById("demo1").innerHTML = data.map(team => {
            return `<ul class="container2">
            <p> ${team.DivisionRank}</p>
            <p> ${team.Division}</p>
            <p> ${team.City}</p>
            <p> ${team.Team}</p>
            <p> ${team.Wins}</p>
            <p> ${team.Losses}</p>
            </ul>`
        }).join("")
 
    })
}

function onPageLoadALC() {
    getStandings("AL", "Central")
    .then(data => {
        console.log(data)
        document.getElementById("demo1").innerHTML = data.map(team => {
            return `<ul class="container2">
            <p> ${team.DivisionRank}</p>
            <p> ${team.Division}</p>
            <p> ${team.City}</p>
            <p> ${team.Team}</p>
            <p> ${team.Wins}</p>
            <p> ${team.Losses}</p>
            </ul>`
        }).join("")
    })
}

function onPageLoadNLE() {
    getStandings("NL", "East")
    .then(data => {
        console.log(data)
        document.getElementById("demo1").innerHTML = data.map(team => {
            return `<ul class="container2">
            <p> ${team.DivisionRank}</p>
            <p> ${team.Division}</p>
            <p> ${team.City}</p>
            <p> ${team.Team}</p>
            <p> ${team.Wins}</p>
            <p> ${team.Losses}</p>
            </ul>`
        }).join("")
    })
}

function onPageLoadNLW() {
    getStandings("NL", "West")
    .then(data => {
        console.log(data)
        document.getElementById("demo1").innerHTML = data.map(team => {
            return `<ul class="container2">
            <p> ${team.DivisionRank}</p>
            <p> ${team.Division}</p>
            <p> ${team.City}</p>
            <p> ${team.Team}</p>
            <p> ${team.Wins}</p>
            <p> ${team.Losses}</p>
            </ul>`
        }).join("")
    })
}

function onPageLoadNLC() {
    getStandings("NL", "Central")
    .then(data => {
        console.log(data)
        document.getElementById("demo1").innerHTML = data.map(team => {
            return `<ul class="container2">
            <p> ${team.DivisionRank}</p>
            <p> ${team.Division}</p>
            <p> ${team.City}</p>
            <p> ${team.Team}</p>
            <p> ${team.Wins}</p>
            <p> ${team.Losses}</p>
            </ul>`
        }).join("")
    })
}

function getStandings(league, division) {
    return fetch("https://api.sportsdata.io/api/mlb/fantasy/json/Standings/2021?key=a69b48e51a7c472aa0eb1271ba77422e")
    .then(res => res.json())
    .then (data =>  {
        const result = data.map(function(ranking){ 
        return { 
            City:ranking.City,
            Team:ranking.Name,
            League:ranking.League,
            Division:ranking.Division,
            DivisionRank:ranking.DivisionRank,
            Wins:ranking.Wins,
            Losses:ranking.Losses

        }})
        .filter(x => x.League === league)
        .filter(x => x.Division === division)
        result.sort (function(a,b){ 
            return (a.DivisionRank - b.DivisionRank);
            }); 

        return result;
    })
    
}






// remove the massive JSON objects, and replace with fetch call --> got that. 
// read about JS Promise and then()--> sorta

//remember the difference between CLASS and ID
    // ID and classes are 'Hooks' 
    // ID's are unique, when there will only be one of something on the page 
    // Classes: use when there will be multiple instances of somethign on a page 
    // IDs are great to use if you want to hook something up to Javascript. It's way easier to just grab an ID and perform an action, than it is to search through a bunch of classes and select the n:th of those classes.




// render fetched data in a <li> tag using "document.getElementById("demo").innerHTML" and using map
// apply styles to the li tags using child selectors
// remember the difference between class and id

// goals : render a list of teams
// goals: render a list of team logos






// console.log(getStandings("AL", "East"));
// console.log(getStandings("NL", "West"));

// function myFunction() {
//     // https://pokeapi.co/api/v2/pokemon/ditto
  
//     fetch("https://pokeapi.co/api/v2/pokemon/charmander")
//       .then((response) => response.json())
//       .then(
//         (data) =>
//           (document.getElementById("pokemon").innerHTML = data.moves
//             .map((move) => {
//               return `<li>${move.move.name}</li>`;
//             })
//             .join(""))
//       );
  
//     //   document.getElementById("demo").innerHTML = "Paragraph changed.";
//   