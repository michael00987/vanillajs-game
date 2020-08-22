const ver = 4;
const hor = 3;
let clickFlag = true
let clickedCards = [];
let completeCards=[]
const candidateColor=['red','red','yellow','yellow','green','green','orange','orange','white','white','pink','pink']
let color=[]
for(let i = 0; candidateColor.length > 0; i++ ){
  color=color.concat(candidateColor.splice(Math.floor(Math.random()*candidateColor.length),1));
}
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
    cardBack.style.backgroundColor=color[i]
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    card.addEventListener('click', () => {
      if(clickFlag && !completeCards.includes(card)){
        card.classList.toggle('flipped');
        clickedCards.push(card)
        if(clickedCards.length === 2){
         if( clickedCards[0].querySelector('.card-back').style.backgroundColor===
          clickedCards[1].querySelector('.card-back').style.backgroundColor){
            console.log('같다')
            completeCards.push(clickedCards[0])
            completeCards.push(clickedCards[1])
            clickedCards=[]
            if(completeCards.length===12){
              setTimeout(()=>{
                alert('끝')
              },20)
            }
          }else {
            console.log(clickedCards)
            clickFlag=false;
            setTimeout(()=>{
              console.log(clickedCards[0])
              clickedCards[0].classList.remove('flipped');
              clickedCards[1].classList.remove('flipped');
              clickFlag=true;
              clickedCards=[]
            },1000)
          }
        }
      }
      if(completeCards.length===12){
      
      }
    });
    document.body.appendChild(card);
  }
  document.querySelectorAll('.card').forEach((card,index)=>{
    setTimeout(()=>{
      clickFlag=false
      card.classList.toggle('flipped')
    },1000+100*index)
  })
  document.querySelectorAll('.card').forEach((card,index)=>{
    setTimeout(()=>{
      card.classList.toggle('flipped')
      clickFlag=true
    },5000)
  })

};

settingCard(ver, hor);
