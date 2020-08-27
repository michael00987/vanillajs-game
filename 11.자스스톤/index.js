const rivalHero=document.getElementById('rival-hero')
const myHero=document.getElementById('my-hero')
const rivalDeck=document.getElementById('rival-deck')
const myDeck=document.getElementById('my-deck')
const rivalField=document.getElementById('rival-cards')
const myField=document.getElementById('my-cards')
const rivalCost=document.getElementById('rival-cost')
const myCost=document.getElementById('my-cost')
const turnButton=document.getElementById('turn-btn')
let rivalDeckData = []
let myDeckData = []
let rivalHeroData;
let myHeroData;
let rivalFieldData=[]
let myFieldData=[]
let tern = true;

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
    card.addEventListener('click',(card)=>{
        console.log(tern, data)
        if(tern){
            if(!data.mine){
                return;
            }
            let currCost = Number(myCost.textContent)
            if(currCost<data.cost){
                return;
            }
            currCost -=data.cost
            myCost.textContent=currCost
           let idx = myDeckData.indexOf(data)
           myDeckData.splice(idx,1)
           myFieldData.push(data)
           console.log(myDeckData,myFieldData)
           myDeck.innerHTML=""
           myField.innerHTML=""
           myFieldData.forEach(data=>{
               cardConnectToDom(data,myField)
           })
           myDeckData.forEach((data)=>{
               cardConnectToDom(data,myDeck)
           })

        }else{
            if(data.mine){
                return;
            }
            let currCost = Number(rivalCost.textContent)
            if(currCost<data.cost){
                return;
            }
            currCost -=data.cost
            rivalCost.textContent=currCost
            let idx = rivalDeckData.indexOf(data)
            rivalDeckData.splice(idx,1)
            rivalFieldData.push(data)
            console.log(rivalDeckData,rivalFieldData)
            rivalDeck.innerHTML=""
            rivalField.innerHTML=""
            rivalFieldData.forEach(data=>{
                cardConnectToDom(data,rivalField)
            })
            rivalDeckData.forEach((data)=>{
                cardConnectToDom(data,rivalDeck)
            })
        }
    })
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
       myDeckData.push(factory(false, true)) 
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
    myHeroData= factory(true,true)
    cardConnectToDom(myHeroData, myHero,true)
}

function Card(hero, myCard){
    if(hero){
        this.att =Math.ceil( Math.random()*2);
        this.hp =Math.ceil( Math.random()*5)+25;
        this.hero=true;
    }else{
        this.att =Math.ceil( Math.random()*5);
        this.hp =Math.ceil( Math.random()*5);
        this.cost = Math.floor((this.att+this.hp)/2);
    }
    if(myCard){
        this.mine= true
    }
}

function factory(hero,myCard){
    return new Card(hero, myCard)
}

function initialSetting(){
    generateRivalDeck(5)
    generateMyDeck(5)
    generateRivalHero()
    generateMyHero()
};

initialSetting();

turnButton.addEventListener('click',()=>{
    tern=!tern
    document.getElementById('rival').classList.toggle('turn')
    document.getElementById('my').classList.toggle('turn')


})