let homeScoreEl = document.getElementById('home-el');
let guestScoreEl = document.getElementById('guest-el');

homeScoreEl.textContent = 0;
guestScoreEl.textContent = 0;

let homeScore = 0;
let guestScore = 0;

//* HOME TEAM SCORING FUNCTIONS
function addOneHome() {
  homeScore++;
  homeScoreEl.textContent = homeScore;
};

function addTwoHome() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
};

function addThreeHome() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
};

//* AWAY(GUEST) TEAM SCORING FUNCTIONS
function addOneGuest() {
  guestScore++;
  guestScoreEl.textContent = guestScore;
};

function addTwoGuest() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
};

function addThreeGuest() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
};