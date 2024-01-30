function rollDice() {
    // Generate a random number between 1 and 6 (inclusive) for a six-sided die
    const result = Math.floor(Math.random() * 6) + 1;

    // Update the dice image source based on the rolled number
    const diceImage = document.getElementById('dice').getElementsByTagName('img')[0];
    diceImage.src = `./img/${result}.png`;

    
}