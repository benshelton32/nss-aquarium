const database = {
    fish: [
        {
            name: "Bart",
            species: "Royal Gramma",
            food: "crustaceans",
            size: 3,
            location: "The Bahamas",
            image: "https://live.staticflickr.com/4022/4330459424_d81575968b_b.jpg"
        },
        {
            name: "Dory",
            species: "Royal Blue Tang",
            food: "algae",
            size: 9,
            location: "Great Barrier Reef of Australia",
            image: "https://www.americanoceans.org/wp-content/uploads/2021/01/blue-tang-scaled.jpg"
        },
        {
            name: "Nemo",
            species: "Ocellaris Clownfish",
            food: "algae",
            size: 4,
            location: "Great Barrier Reef of Australia",
            image: "https://media.kidadl.com/6079adecdc5b3114f41d2158_fun_facts_about_clownfish_for_kids_3660a98f08.jpg"
        }
    ]
}


export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}