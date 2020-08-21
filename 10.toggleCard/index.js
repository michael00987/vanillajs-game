const ver = 4;
const hor = 3;
let settingCard = (ver, hor) => {
  for (let i = 0; i < hor * ver; i++) {
    let card = document.createElement('div');
    card.className = 'card';
    let cardInner = document.createElement('div');
    cardInner.className = 'card-inner';
    let cardFront = document.createElement('div');
    cardFront.className = 'card-front';
    let cardBack = document.createElement('div');
    cardBack.className = 'card-back';
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
    document.body.appendChild(card);
  }
};

settingCard(ver, hor);
