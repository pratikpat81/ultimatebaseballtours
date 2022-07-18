function onPageLoad() { 
    getStadium(30000,"Outdoor")
    .then(data => { 
        document.getElementById("demo").innerHTML = data.map(team => {
            return `<li> 
            <h3>${team.Arena}</h3> 
            <p>${team.City}</p>
            </li>`
        }).join("")
    })
}

function getStadium(capacity,type) { 
    return fetch("https://api.sportsdata.io/api/mlb/odds/json/Stadiums?key=a69b48e51a7c472aa0eb1271ba77422e")
    .then(res => {
        return res.json()
    })
    .then (data => { 
        const result = data.map(function(stadium){ 
            return { 
            Arena:stadium.Name, 
            City:stadium.City,
            State:stadium.State,
            Capacity:stadium.Capacity,
            Typeofstadium:stadium.Type,
        }}) 

     const filtered = result.filter(
        x => { 
                if (x.Capacity >= capacity && x.Typeofstadium === type) {
                return true
                } else { 
                return false
                }
            });
       return filtered;
    })
} 











// function onPageLoad() { 
//     getStadium(30000, "Outdoor")
//     .then(data => { 
//         console.log(data)
//         document.getElementById("demo").innerHTML = data.map(team => {
//             return `<li> 
//             <p>${team.Arena}</p> 
//             <p>${team.City}</p>
//             </li>`
//         }).join("")
//     })
// }

// // function getStadium(capacity,type) { 
// //     console.log(capacity, type);
// //     return fetch("https://api.sportsdata.io/api/mlb/odds/json/Stadiums?key=a69b48e51a7c472aa0eb1271ba77422e")
// //     .then(res => {
// //         return res.json()
// //     })
// //     .then (data => { 
// //         const result = data.map(function(stadium){ 
// //             return { 
// //             Arena:stadium.Name, 
// //             City:stadium.City,
// //             State:stadium.State,
// //             Capacity:stadium.Capacity,
// //             Typeofstadium:stadium.Type,
// //         }}) 

//         const filteredArray = result.filter(  
// //             x => { 
// //                 if (x.capacity >= 30000 && x.Typeofstadium === 'Outdoor') {
// //                 return true
// //                 } else { 
// //                 return false
// // //                 }
// // //             });
// //             console.log("filteredArray", filteredArray)

// //         return filteredArray;
       
// //     }) 
// /