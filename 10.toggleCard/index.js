const ver = 4;
const hor = 3;
let clickFlag = true
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
      if(clickFlag){
        card.classList.toggle('flipped');
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
