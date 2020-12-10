//Inspirational quotes
let inspirationalTable = [
    [
        '“I enjoy every day ',
        '“Everyday is beautiful ',
        '“I will make it ',
        '“Everyday is a new day and i am positive ',
        '“I remain positive '
    ],
    [
        'just because ',
        'in view of the fact that , ',
        'more opportunities ',
        'now that ',
        'as long as '
    ],
    [
        'i choose to.”',
        'i enjoy every second.”',
        'there are more opportunities than i find.”',
        'i am happy.”',
        'i feel really good.”'
    ]
];

//Hard work Quotes
let hardWorkTable = [
    ['“Work hard, be kind, ',
        '“Keep up the great work, ',
        '“Never give up on your dreams because ',
        '“Always stay focused as ',
        '“Your opportunities are endless '
    ],
    ['amazing opportunities ',
        'stunning things  ',
        'marvelous things ',
        'astonishing opportunities ',
        'unbelievable things '
    ],
    ['will happen.”',
        'will come your way.”',
        'are on their way.”',
        'are yet to meet you.”',
        'are waiting for you.”'
    ]
];

//Function used when reset button is clicked
const resetQuotes = () => {
    document.getElementById('displayQuotes').innerHTML = '';
    $('#noQuoteMesssage').show();
}

//Function used when generate button is clicked
const generateQuotes = () => {
    $('#noQuoteMesssage').hide();
    document.getElementById('displayQuotes').innerHTML = ''; //Delete old quotes present on the DOM
    displayQuotes(buildQuotes($('#quoteType').val(), $('#quoteNumber').val()));
}

//Function used when we want to display result on the DOM
const displayQuotes = quotesTable => {
  for (let n in quotesTable) {
    let para = document.createElement("p");
    para.appendChild(document.createTextNode(quotesTable[n]));
    let element = document.getElementById("displayQuotes");
    element.appendChild(para);
  }
};

//Function used when we want to get a set(Array) of quotes depeding the type choosed
const buildQuotes = (typeOfQuote, quoteNumber) => {
    if (typeOfQuote === 'Inspirational')
        return quotesConstruct(inspirationalTable, quoteNumber); //Return a array of inspirational quote(s)
    else
        return quotesConstruct(hardWorkTable, quoteNumber); //Return a array of hard work quote(s)
}

//Function used when we want to from our differents quotes phrases
const quotesConstruct = (tableType, quoteNumber) => {
    let quotesArray = []; //Definding an array to fill in the generated quote while in our for loop bellow
    let controlFillArray = 0;

    //Loop for building different quote phrase by avoiding have the same quote on the DOM
    do {
        let quote = '';
        for (let n in tableType) {
            quote += ' ' + tableType[n][Math.floor(Math.random() * tableType[n].length)];
        }
        if (!quotesArray.includes(quote)) {
            quotesArray.push(quote);
            controlFillArray++;
        } else {
            console.log("There's the same quote in the table, we cannot add this again...The loop, continue... :)");
        }

    } while (controlFillArray < quoteNumber);

    return quotesArray;
}