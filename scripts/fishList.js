// Import the function that returns a copy of the fish array
import { getFish } from './database.js'

export const fishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="card">
            <div><img  class="fish__image image--card" src="${fish.image}" style="width:100%" /></div>
            <div class="container">
            <div class="fish__name"><h3>${fish.name}</h3></div>
            <div class="fish__species">Species: ${fish.species}</div>
            <div class="fish__length">Length: ${fish.length} in</div>
            <div class="fish__location">Location: ${fish.location}</div>
            <div class="fish__diet">Diet: ${fish.food}</div>
            </div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}

// export const fishList = () => {
//     // Invoke the function that you imported from the database module
//     const fishes = getFish()

//     // Start building a string filled with HTML syntax
//     let htmlString = ''

//     // Create HTNL representations of each fish here
//     for (const fish of fishes) {

//         // Why is there a backtick used for this string?
//         htmlString += `<section class="card">
//             <div><img  class="fish__image image--card" src="${fish.image}" style="width:100%" /></div>
//             <div class="container">
//             <div class="fish__name"><h3>${fish.name}</h3></div>
//             <div class="fish__species">Species: ${fish.species}</div>
//             <div class="fish__length">Length: ${fish.length} in</div>
//             <div class="fish__location">Location: ${fish.location}</div>
//             <div class="fish__diet">Diet: ${fish.food}</div>
//             </div>
//         </section>
// `
//     }

//     return htmlString
// }