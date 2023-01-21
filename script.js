// Function: picks a random number from 1 to num
const pickOneTo = num => {
    let random = Math.floor(Math.random() * num) + 1;
    return random;
}

// Function: turns luckyNums[] into an array with length 'spots' filled with random numbers (1 to 'choice')
const fillLuckyNums = (spots, choice) => {
    while(luckyNums.length < spots) {
        let randomNum = pickOneTo(choice);
        if(!luckyNums.includes(randomNum)) {
            luckyNums.push(randomNum);
        }
    }

    const sortedLuck = luckyNums.sort(function(a,b) {
        return a - b;
    });

    return sortedLuck;
}

// Three pieces of data for message components
const color = ["Lavender",
                "Turquoise",
                "Tangerine",
                "Mint green",
                "Sage",
                "Maroon",
                "Periwinkle",
                "Crimson",
                "Lemon yellow",
                "Slate gray",
                "Coral",
                "Pale pink",
                "Navy blue"];
const quote = ["The only way to change the world is to change yourself.",
                "Self-awareness is the first step to self-improvement.",
                "The only person you should try to be better than is the person you were yesterday.",
                "The only true wisdom is in knowing you know nothing.",
                "The best way to predict your future is to create it.",
                "The only thing to fear is fear itself.",
                "The only true limit is the one you set for yourself.",
                "The greatest glory in living lies not in never falling, but in rising every time we fall.",
                "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
                "The best way to find yourself is to lose yourself in the service of others.",
                "The greatest glory in living lies not in never falling, but in rising every time we fall.",
                "Happiness is not something ready made. It comes from your own actions.",
                "The only way to do great work is to love what you do."];
const luckyNums = [];

// Fills luckyNums[] with 7 lucky numbers (1 - 50) for LottoMax 
fillLuckyNums(7, 50);

// Testing Features
console.log(luckyNums.join(" "));

