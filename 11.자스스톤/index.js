let rival = {
  hero: document.getElementById('rival-hero'),
  deck: document.getElementById('rival-deck'),
  field: document.getElementById('rival-cards'),
  cost: document.getElementById('rival-cost'),
  deckData: [],
  heroData: [],
  fieldData: [],
  selectedCard: null,
  selectedCardData: null,
};

let me = {
  hero: document.getElementById('my-hero'),
  deck: document.getElementById('my-deck'),
  field: document.getElementById('my-cards'),
  cost: document.getElementById('my-cost'),
  deckData: [],
  heroData: [],
  fieldData: [],
  selectedCard: null,
  selectedCardData: null,
};

const turnButton = document.getElementById('turn-btn');
let turn = true;

function deckToField(myTurn, data) {
  let obj = myTurn ? me : rival;
  let currCost = Number(obj.cost.textContent);
  if (currCost < data.cost) {
    return true;
  }
  currCost -= data.cost;
  obj.cost.textContent = currCost;
  let idx = obj.deckData.indexOf(data);
  obj.deckData.splice(idx, 1);
  obj.fieldData.push(data);
  console.log(obj.deckData, obj.fieldData);
  redrawField(obj);
  redrawDeck(obj);
  data.field = true;
}

function redrawField(obj) {
  obj.field.innerHTML = '';
  obj.fieldData.forEach((data) => {
    cardConnectToDom(data, obj.field);
  });
}
function redrawDeck(obj) {
  obj.deck.innerHTML = '';
  obj.deckData.forEach((data) => {
    cardConnectToDom(data, obj.deck);
  });
}
function redrawHero(obj) {
  obj.hero.innerHTML = '';
  cardConnectToDom(obj.heroData, obj.hero, true);
}
function redraw(myScreen) {
  let obj = myScreen ? me : rival;
  redrawField(obj);
  redrawDeck(obj);
  redrawHero(obj);
}

function turnAction(card, data, m2r) {
  let friendly = m2r ? me : rival;
  let enemy = m2r ? rival : me;
  if (turn) {
    if (card.classList.contains('card-turnover')) {
      return;
    }
    if ((m2r ? !data.mine : data.mine) && friendly.selectedCard) {
      data.hp = data.hp - friendly.selectedCardData.att;
      if (data.hp <= 0) {
        let index = enemy.fieldData.indexOf(data);
        if (index > -1) {
          enemy.fieldData.splice(index, 1);
        } else {
          alert('나 승리하셨습니다.');
          initialSetting();
        }
      }
      redraw(false);
      friendly.selectedCard.classList.remove('card-selected');
      friendly.selectedCard.classList.add('card-turnover');
      friendly.selectedCard = null;
      return;
    } else if (m2r ? !data.mine : data.mine) {
      return;
    }
    if (data.field) {
      card.parentNode.querySelectorAll('.card-selected').forEach((card) => {
        card.classList.remove('card-selected');
      });
      card.classList.add('card-selected');
      friendly.selectedCard = card;
      friendly.selectedCardData = data;
      console.log(friendly.selectedCard, friendly.selectedCardData);
    } else {
      if (!deckToField(m2r, data)) {
        m2r ? generateMyDeck(1) : generateRivalDeck(1);
      }
    }
  }
}

function cardConnectToDom(data, dom, hero) {
  const card = document.querySelector('.card-hidden .card').cloneNode(true);
  card.querySelector('.card-cost').textContent = data.cost;
  card.querySelector('.card-att').textContent = data.att;
  card.querySelector('.card-hp').textContent = data.hp;
  if (hero) {
    card.querySelector('.card-cost').style.display = 'none';
    const name = document.createElement('div');
    name.textContent = '영웅';
    card.appendChild(name);
  }
  card.addEventListener('click', () => {
    turnAction(card, data, turn);
  });
  dom.appendChild(card);
}

function generateRivalDeck(num) {
  for (let i = 0; i < num; i++) {
    rival.deckData.push(factory());
  }
  redrawDeck(rival);
}
function generateMyDeck(num) {
  for (let i = 0; i < num; i++) {
    me.deckData.push(factory(false, true));
  }
  redrawDeck(me);
}
function generateRivalHero() {
  rival.heroData = factory(true);
  cardConnectToDom(rival.heroData, rival.hero, true);
}
function generateMyHero() {
  me.heroData = factory(true, true);
  cardConnectToDom(me.heroData, me.hero, true);
}

function Card(hero, myCard) {
  if (hero) {
    this.att = Math.ceil(Math.random() * 2);
    this.hp = Math.ceil(Math.random() * 5) + 25;
    this.hero = true;
    this.field = true;
  } else {
    this.att = Math.ceil(Math.random() * 5);
    this.hp = Math.ceil(Math.random() * 5);
    this.cost = Math.floor((this.att + this.hp) / 2);
  }
  if (myCard) {
    this.mine = true;
  }
}

function factory(hero, myCard) {
  return new Card(hero, myCard);
}

function initialSetting() {
  generateRivalDeck(5);
  generateMyDeck(5);
  generateRivalHero();
  generateMyHero();
  redraw(true);
  redraw(false);
}

initialSetting();

turnButton.addEventListener('click', () => {
  let obj = turn ? me : rival;
  document.getElementById('rival').classList.toggle('turn');
  document.getElementById('my').classList.toggle('turn');
  redrawField(obj);
  redrawHero(obj);
  turn = !turn;
  if (turn) {
    me.cost.textContent = 10;
  } else {
    rival.cost.textContent = 10;
  }
});
