let homeScoreEl = document.getElementById('home-el');
let guestScoreEl = document.getElementById('guest-el');

homeScoreEl.textContent = 0;
guestScoreEl.textContent = 0;

let homeScore = 0;
let guestScore = 0;

// if homeScore > guestScore, then set attribute and add a bright yellow border to the scorebox, change the background color to a metal blue(near black)

// add a NEWGAME button that resets the scores to 0, and resets the TIMER if there is one



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