const rollButton = document.querySelector('#roll-button')
const dieRolls = []
const div = document.querySelector('div')
const showButton = document.querySelector("#ShowAllRolls")
const ol = document.querySelector('ol')

rollButton.addEventListener("click", function () {
    // iRollDice = prompt("How many times the dice is rolled", 25);
    // Sum all your dice rolls and display the result in the Total area on the page using innerHTML. (2 point)
    // 

    let sumOfAllDice = 0
    let numberOfDice = document.querySelector('#number-of-dice').value
    let counter = 0
    while (counter < numberOfDice) {
        let dieValue = Math.floor(Math.random() * 6 + 1);
        console.log(dieValue)
        counter += 1
        dieRolls.push(dieValue)
        sumOfAllDice += dieValue
    }

    console.log(sumOfAllDice)

    div.innerHTML = sumOfAllDice


})

// Add a click event listener to your "Show All Rolls" button.
// Write a new loop: 
// Loop over the dieRolls array, 
// creating a new List Item for each number and 
// adding that List Item to the innerHTML of the "All Rolls" element. 
// This LI should show the value of the roll. (4 points)
//
showButton.addEventListener("click", function () {
    for (let counter = 0; counter < dieRolls.length; counter += 1) {
        let currentDieValue = dieRolls[counter]
        // const newDiceString = '<li class="dice">' + numberRolled + "</li>";
        // allRollsElement.innerHTML += newDiceString;
        const newDiceString = '<li class="dice">' + currentDieValue + "</li>";
        ol.innerHTML += newDiceString
    }
})









