let hand = [];

function drawCard() {
  // Simulate drawing a card from a deck
  const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomRank = ranks[Math.floor(Math.random() * ranks.length)];

  const card = `${randomRank} of ${randomSuit}`;
  hand.push(card);

  // Display the updated hand
  displayHand();
}

function displayHand() {
  const handElement = document.getElementById('hand');
  handElement.innerHTML = hand.join('<br>');
}
