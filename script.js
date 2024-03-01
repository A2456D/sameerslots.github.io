let user = null;

function updateAccountDetails() {
  const accountDetails = document.getElementById('account-details');
  const accountForm = document.getElementById('account-form');

  if (user) {
    accountDetails.classList.remove('hidden');
    accountForm.classList.add('hidden');

    document.getElementById('username-display').textContent = user.username;
    document.getElementById('total-wins').textContent = user.totalWins || 0;
    document.getElementById('amount-won').textContent = user.amountWon || 0;

    document.getElementById('slot-machine').classList.remove('hidden');
  } else {
    accountDetails.classList.add('hidden');
    accountForm.classList.remove('hidden');
    document.getElementById('slot-machine').classList.add('hidden');
  }
}

function loginOrSignup() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simulate server-side authentication
  if (username && password) {
    user = {
      username: username,
      totalWins: 0,
      amountWon: 0
    };
    localStorage.setItem('user', JSON.stringify(user));
    updateAccountDetails();
  } else {
    document.getElementById('login-error').classList.remove('hidden');
  }
}

function logout() {
  localStorage.removeItem('user');
  user = null;
  updateAccountDetails();
}

function spin() {
  const symbols = ['💰', '🍒', '🍋', '🍇', '🍉', '🍊', '🍓', '🍍', '🍎'];
  const getRandomSymbol = () => symbols[Math.floor(Math.random() * symbols.length)];

  document.getElementById('slot1').textContent = getRandomSymbol();
  document.getElementById('slot2').textContent = getRandomSymbol();
  document.getElementById('slot3').textContent = getRandomSymbol();

  checkWin();
}

function checkWin() {
  const slot1 = document.getElementById('slot1').textContent;
  const slot2 = document.getElementById('slot2').textContent;
  const slot3 = document.getElementById('slot3').textContent;
  const resultMessage = document.getElementById('result');

  if (slot1 === slot2 && slot2 === slot3 && slot1 === '💰') {
    resultMessage.textContent = 'Congratulations! You won $100!';
    resultMessage.style.color = 'green';

    if (user) {
      user.totalWins = (user.totalWins || 0) + 1;
      user.amountWon = (user.amountWon || 0) + 100;
      localStorage.setItem('user', JSON.stringify(user));
      updateAccountDetails();
    }
  } else {
    resultMessage.textContent = 'Sorry, try again!';
    resultMessage.style.color = 'red';
  }
}

// Check if the user is already logged in
const storedUser = localStorage.getItem('user');
user = storedUser ? JSON.parse(storedUser) : null;

// Initial update of account details
updateAccountDetails();
