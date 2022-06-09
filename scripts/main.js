import { getFish } from './database.js'
import { fishList } from './fishList.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */

const parentHTMLElement = document.querySelector(".fishListHTMLString")


parentHTMLElement.innerHTML = fishList()