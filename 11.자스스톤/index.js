const rivalHero=document.getElementById('rival-hero')
const myHero=document.getElementById('my-hero')
const rivalDeck=document.getElementById('rival-deck')
const myDeck=document.getElementById('my-deck')
let rivalDeckData = []
let myDeckData = []
let rivalHeroData;
let myHeroData;

function cardConnectToDom(data, dom, hero){
    const card = document.querySelector('.card-hidden .card').cloneNode(true)
    card.querySelector('.card-cost').textContent=data.cost
    card.querySelector('.card-att').textContent=data.att
    card.querySelector('.card-hp').textContent=data.hp
    if(hero){
    card.querySelector('.card-cost').style.display='none'
    const name = document.createElement('div')
    name.textContent="영웅"
    card.appendChild(name)
    }
    dom.appendChild(card)
}

function generateRivalDeck(num){
    for(let i = 0 ; i< num ; i++){
        rivalDeckData.push(factory())
    }
    rivalDeckData.forEach((data)=>{
        cardConnectToDom(data, rivalDeck)
    })
}
function generateMyDeck(num){
    for(let i = 0 ; i< num ; i++){
       myDeckData.push(factory()) 
    }
    myDeckData.forEach((data)=>{
        cardConnectToDom(data, myDeck)

    })
}
function generateRivalHero(){
    rivalHeroData= factory(true)
    cardConnectToDom(rivalHeroData, rivalHero,true)
}
function generateMyHero(){
    myHeroData= factory(true)
    cardConnectToDom(myHeroData, myHero,true)
}

function Card(hero){
    if(hero){
        this.att =Math.ceil( Math.random()*2);
        this.hp =Math.ceil( Math.random()*5)+25;
        this.hero=true;
    }else{
        this.att =Math.ceil( Math.random()*5);
        this.hp =Math.ceil( Math.random()*5);
        this.cost = Math.floor((this.att+this.hp)/2);
    }
}

function factory(hero){
    return new Card(hero)
}

function initialSetting(){
    generateRivalDeck(5)
    generateMyDeck(5)
    generateRivalHero()
    generateMyHero()
};

initialSetting();