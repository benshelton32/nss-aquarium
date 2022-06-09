const database = {
    fish: [
        {
            name: "Bart",
            species: "Royal Gramma",
            food: "crustaceans",
            length: 3,
            location: "The Bahamas",
            image: "https://live.staticflickr.com/4022/4330459424_d81575968b_b.jpg"
        },
        {
            name: "Dory",
            species: "Royal Blue Tang",
            food: "algae",
            length: 9,
            location: "Great Barrier Reef of Australia",
            image: "https://www.americanoceans.org/wp-content/uploads/2021/01/blue-tang-scaled.jpg"
        },
        {
            name: "Nemo",
            species: "Ocellaris Clownfish",
            food: "algae",
            length: 4,
            location: "Great Barrier Reef of Australia",
            image: "https://media.kidadl.com/6079adecdc5b3114f41d2158_fun_facts_about_clownfish_for_kids_3660a98f08.jpg"
        },
        {
            name: "Malak",
            species: "Emporer Angelfish",
            food: "algae",
            length: 10,
            location: "Egypt",
            image: "https://www.marinefishez.com/images/stories/virtuemart/product/fish-example10.jpg"
        },
        {
            name: "Charles",
            species: "Mandarin Dragonet",
            food: "crustaceans",
            length: 3,
            location: "Philippines",
            image: "https://www.thesprucepets.com/thmb/CY8EX-kLMd5GQqELM_ov9-A25ic=/3675x2756/smart/filters:no_upscale()/portrait-of-mandarin-fish-synchiropus-splendidus--banda-neira-island--indonesia-892114852-5ac6bd95875db900373d0afd.jpg"
        },
        {
            name: "Reginald",
            species: "Copperband Butterfly Fish",
            food: "clams",
            length: 8,
            location: "Ryukyu Islands, Japan",
            image: "https://reefbuilders.com/wp-content/blogs.dir/1/files/2020/06/copperband-butterflyfish1.jpg"
        }
    ]
}


export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}