function flipCard(cardId) {
  const card = document.getElementById(cardId);
  card.querySelector('.trainer-info-left').classList.toggle('flipped');
}

function buyNow() {
window.location.href = "pricing.html"; 
}

