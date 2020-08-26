const rivalHero=document.getElementById('rival-hero')
const myHero=document.getElementById('my-hero')
const rivalDeck=document.getElementById('rival-deck')
const myDeck=document.getElementById('my-deck')
let rivalDeckData = []
let myDeckData = []
let rivalHeroData;
let myHeroData;

function generateRivalDeck(num){
    for(let i = 0 ; i< num ; i++){
        rivalDeckData.push(factory())
    }
    rivalDeckData.forEach((data)=>{
        const card = document.querySelector('.card-hidden .card').cloneNode(true)
        card.querySelector('.card-cost').textContent=data.cost
        card.querySelector('.card-att').textContent=data.att
        card.querySelector('.card-hp').textContent=data.hp
        rivalDeck.appendChild(card)
    })
}
function generateMyDeck(num){
    for(let i = 0 ; i< num ; i++){
       myDeckData.push(factory()) 
    }
    myDeckData.forEach((data)=>{
        const card = document.querySelector('.card-hidden .card').cloneNode(true)
        card.querySelector('.card-cost').textContent=data.cost
        card.querySelector('.card-att').textContent=data.att
        card.querySelector('.card-hp').textContent=data.hp
        myDeck.appendChild(card)
    })
}
function generateRivalHero(){
    rivalHeroData= factory(true)
}
function generateMyHero(){
    myHeroData= factory(true)
}
function initialSetting(){
    generateRivalDeck(5)
    generateMyDeck(5)
    generateRivalHero()
    generateMyHero()
};
function Card(hero){
    if(hero){
        this.att =Math.ceil( Math.random()*2);
        this.hp =Math.ceil( Math.random()*5)+25;
    }else{
        this.att =Math.ceil( Math.random()*5);
        this.hp =Math.ceil( Math.random()*5);
        this.cost = Math.floor((this.att+this.hp)/2);
    }
}

function factory(hero){
    return new Card(hero)
}
console.log(myDeckData)
initialSetting();