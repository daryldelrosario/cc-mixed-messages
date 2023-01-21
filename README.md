# Fortune Cookie Generator
Mixed messages generator that emulates fortune cookie messages

## Code Demo
<kbd><img src="mixed-messages-ld.gif" alt="live demo gif"></kbd>

## Instructions
* feel free to clone this repo <a href="https://github.com/daryldelrosario/cc-mixed-messages.git">`Clone`</a>
* using your software run file script.js

Please note: 
* this code demo uses Node.js
* ran via vscode terminal through command `node script.js`

## Features
* outputs message comprised of three data variables
    1. colors with 7 variations
    2. quotes with 7 variations
    3. 7 unique lucky numbers chosen from 1 - 50
* includes function to generate an array of chosen length and chosen range of numbers starting from 1

```
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
```