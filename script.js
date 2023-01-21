// Function: picks a random number from 1 to num
const pickOneTo = num => {
    let randomNum = Math.floor(Math.random() * num) + 1;
    return randomNum;
}

// Function: picks a random index from 0 to lengthMinusOne
const pickRandomIndex = lengthMinusOne => {
    let randomIndex = Math.floor(Math.random() * lengthMinusOne);
    return randomIndex;
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

// Helper Function: Displays cool message
const printMsg = msg => {
    let msgLength = msg.length;
    console.log("=".repeat(msgLength));
    console.log(msg);
    console.log("=".repeat(msgLength));
}

// ASCII Art
const text = `Daryl the Coder @therealdecoder 

                    ___gggrgM**M#mggg__
                __wgNN@"B*P""mp""@d#"@N#Nw__
              _g#@0F_a*F#  _*F9m_ ,F9*__9NG#g_
           _mN#F  aM"    #p"    !q@    9NL "9#Qu_
          g#MF _pP"L  _g@"9L_  _g""#__  g"9w_ 0N#p
        _0F jL*"   7_wF     #_gF     9gjF   "bJ  9h_
       j#  gAF    _@NL     _g@#_      J@u_    2#_  #_
      ,FF_#" 9_ _#"  "b_  g@   "hg  _#"  !q_ jF "*_09_
      F N"    #p"      Ng@       '#g"      "w@    "# t
     j p#    g"9_     g@"9_      gP"#_     gF"q    Pb L
     0J  k _@   9g_ j#"   "b_  j#"   "b_ _d"   q_ g  ##
     #F  'NF     "#g"       "Md"       5N#      9W"  j#
     #k  jFb_    g@"q_     _*"9m_     _*"R_    _#Np  J#
     tApjF  9g  J"   9M_ _m"    9%_ _*"   "#  gF  9_jNF
      k'N    "q#       9g@        #gF       ##"    #"j
      '_0q_   #"q_    _&"9p_    _g"'L_    _*"#   jAF,'
       9# "b_j   "b_ g"    *g _gF    9_ g#"  "L_*"qNF
        "b_ "#_    "NL      _B#      _I@     j#" _#"
          NM_0"*g_ j""9u_  gP  q_  _w@ ]_ _g*"F_g@
           "NNh_ !w#_   9#g"    "m*"   _#*" _dN@"
              9##g_0@q__ #"4_  j*"k __*NF_g#@P"
                "9NN#gIPNL_ "b@" _2M"Lg#N@F"
                    ""P@*NN#gEZgNN@#@P""`;



// Main Function: Creates the random message to display
const message = () => {
    let colorIndex = pickRandomIndex(color.length - 1);
    let quoteIndex = pickRandomIndex(quote.length - 1);
    let winningNums = luckyNums.join(" ");

    printMsg("=== Welcome to TR. Decoders Fortune Cookie ===")
    console.log("Today your color focus should be everything " + color[colorIndex] +".");

    console.log("");
    console.log("Reflect heavily on this ... ");
    console.log("'" + quote[quoteIndex] + "'");
    console.log("");

    console.log("Here are your lucky numbers: ");
    printMsg(winningNums);
    console.log("");
    console.log(text);
}

// Testing Features
message();
