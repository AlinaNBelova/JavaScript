let deck = [];
let dealerContainer = document.querySelector("#dealer-hand");
let playerContainer =document.querySelector("#player-hand");
let dealerCardArray=[];
let playerCardArray =[];
let dealerSumScore=0;
let playerSumscore =0;
//let sumScore =0
let points =0

let player ="player";
let dealer = "dealer";
let dealButton = document.querySelector('#deal-button');
let hitButton =document.querySelector('#hit-button');
let standButton =document.querySelector('#stand-button');

let dealerPoints= document.querySelector('#dealer-points');
let playerPoints = document.querySelector('#player-points');

let messages = document.querySelector('#messages');



function getDeck(){
    let suits = ["hearts", "diamonds", "spades", "clubs"];
    let cardValues = [ "ace","2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
    suits.forEach(function(suit){
        cardValues.forEach(function(cardValue){
            cardObject = { "cardValue": cardValue, "suit":suit, "cardImage": 'images/' + cardValue + '_of_' + suit + '.png' };
            deck.push(cardObject);

            
        })
    })
    
};


function dealCards(hand){
    card = deck.pop()
    console.log(card)
    let newCard =document.createElement('img');
    newCard.setAttribute("src", card.cardImage)
    switch (hand) {
        case "player":
            playerContainer.append(newCard);
            playerCardArray.push(card);
            
            break;
    
        case "dealer":
            dealerContainer.append(newCard);
            dealerCardArray.push(card);
            break;
            
    };
    console.log(card)
    console.log(playerCardArray)
    return playerCardArray
    return dealerCardArray
    return newCard

} 
function shuffleDeck(array) {
    let ctr =array.length, temp, index;
    while(ctr>0){
        index = Math.floor(Math.random()*ctr);
        ctr --;
        temp=array[ctr];
        array[ctr]=array[index];
        array[index] =temp;
    }
    return array
}

function calculateScore(hand){
    let sumScore=0;

    let CardArray;
    switch (hand) {
        case "dealer":
            CardArray=dealerCardArray;
            points=dealerPoints;
            sumScore=dealerSumScore;

            break;
    
        case "player":
                CardArray=playerCardArray;
                points=playerPoints;
                sumScore=dealerSumScore;
            break;
    }

    
    let ScoreArray = CardArray.map(function(card){
        console.log("I ran!")
       
        let score=card.cardValue
        console.log(card.cardValue)
        console.log(score)
        console.log(sumScore);
        
        if (score=="jack"|| score=="queen"|| score=="king") {
            score = 10;
            }
        if (score == "ace" && sumScore < 11) {
            score = 11;
            }
            if(score=="ace" && sumScore >11){
                score =1;
            }
        else{score=parseInt(score)
                };
        sumScore+=score;
        console.log(sumScore);
        
        return sumScore
        // return dealerCardArray.cardValue;
        });
    // console.log(dealerScoreArray)
    points.textContent =sumScore
    if (sumScore>21){
        messages.textContent= hand+' busts!!! GAME OVER'
        gameOver()
        }
    }
    
// calculateScore(dealerCardArray);
//console.log(calculateScore(playerCardArray));



// function showScore(points){
//     switch (points) {
//         case dealer:
//             dealerPoints.textContent =sumScore
//             break;
    
//         case player:
//             playerPoints.textContent =sumScore
//             break;
//     }
// }
// showScore(dealer)

function gameOver(){
    dealButton.hidden =true;
    hitButton.hidden=true;
    standButton.hidden=true;

}


dealButton.addEventListener('click',function(){
    getDeck();
    shuffleDeck(deck);
    dealCards(player);
    dealCards(player);
    calculateScore(player);
    //console.log(playerCardArray)
    ;
    // console.log(cardFace)

    // showScore(player)
    
    dealCards(dealer);
    dealCards(dealer);
    // console.log(dealerCardArray.cardValue)
    calculateScore(dealer);
    //showScore(dealer)
    dealButton.hidden =true;
})
hitButton.addEventListener('click', function () {
    dealCards(player);
    calculateScore(player);
})
standButton.addEventListener('click', function(){
    console.log("I run stand!")
    console.log(dealerSumScore)
    if(dealerSumScore<16){
        dealCards(dealer);
        calculateScore(dealer);
    }
    
})

