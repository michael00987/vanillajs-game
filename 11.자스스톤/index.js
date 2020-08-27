let rival ={
    hero:document.getElementById('rival-hero'),
    deck:document.getElementById('rival-deck'),
    field:document.getElementById('rival-cards'),
    cost:document.getElementById('rival-cost'),
    deckData:[],
    heroData:[],
    fieldData:[]
}

let me ={
    hero:document.getElementById('my-hero'),
    deck:document.getElementById('my-deck'),
    field:document.getElementById('my-cards'),
    cost:document.getElementById('my-cost'),
    deckData:[],
    heroData:[],
    fieldData:[]
}

const turnButton=document.getElementById('turn-btn')
let tern = true;

function deckToField(myTurn,data){
    let obj = myTurn? me:rival
    let currCost = Number(obj.cost.textContent)
    if(currCost<data.cost){
        return true;
    }
    currCost -=data.cost
    obj.cost.textContent=currCost
   let idx = obj.deckData.indexOf(data)
   obj.deckData.splice(idx,1)
   obj.fieldData.push(data)
   console.log(obj.deckData,obj.fieldData)
   obj.deck.innerHTML=""
   obj.field.innerHTML=""
   obj.fieldData.forEach(data=>{
       cardConnectToDom(data,obj.field)
   })
   obj.deckData.forEach((data)=>{
       cardConnectToDom(data,obj.deck)
   })
   data.field=true;
}

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
            if(!data.mine || data.field){
                return;
            }
           
            if(!deckToField(true,data)){
                generateMyDeck(1)
            }
        }else{
            if(data.mine  || data.field){
                return;
            }
            if(!deckToField(false,data)){
                generateRivalDeck(1)
            }

        }
    })
    dom.appendChild(card)
}

function generateRivalDeck(num){
    for(let i = 0 ; i< num ; i++){
        rival.deckData.push(factory())
    }
    rival.deck.innerHTML=""
    rival.deckData.forEach((data)=>{
        cardConnectToDom(data, rival.deck)
    })
}
function generateMyDeck(num){
    for(let i = 0 ; i< num ; i++){
       me.deckData.push(factory(false, true)) 
    }
    me.deck.innerHTML=""
    me.deckData.forEach((data)=>{
        cardConnectToDom(data, me.deck)
    })
}
function generateRivalHero(){
    rival.heroData= factory(true)
    cardConnectToDom(rival.heroData, rival.hero,true)
}
function generateMyHero(){
    me.heroData= factory(true,true)
    cardConnectToDom(me.heroData, me.hero,true)
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
    if(tern){
        me.cost.textContent=10
    }else{
        rival.cost.textContent=10
    }
    document.getElementById('rival').classList.toggle('turn')
    document.getElementById('my').classList.toggle('turn')


})