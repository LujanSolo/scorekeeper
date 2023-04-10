let homeScoreEl = document.getElementById('home-el');
let guestScoreEl = document.getElementById('guest-el');
let timerEl = document.getElementById('timer-box');
let periodEl = document.getElementById('period-box');
let differentialEl = document.getElementById('differential-box');

timerEl.textContent = 60;
periodEl.textContent = 1;
differentialEl.textContent = 0;

homeScoreEl.textContent = 0;
guestScoreEl.textContent = 0;

let homeScore = 0;
let guestScore = 0;

// build a function to startGame(),
// wherein
// the TIMER BEGINS the countdown. 
// upon timer === 0, PERIOD advances by 1.
// pause 10 seconds and start the TIMER again. Repeat until
// PERIOD 4 runs down to 0 and END GAME. 


//* TOP SCORING TEAM'S SCOREBOX BECOMES HIGHLIGHTED EVALUATED ON EVERY SCORING BUTTON CLICK
function topScore() {
  if(homeScore > guestScore){
    homeScoreEl.setAttribute("style", "border: .2rem solid yellow; background: darkblue");
    guestScoreEl.removeAttribute("style", "border: 2rem solid yellow; background: darkblue");
  } else if (guestScore > homeScore) {
    guestScoreEl.setAttribute("style", "border: .2rem solid yellow; background: darkblue");
    homeScoreEl.removeAttribute("style", "border: 2rem solid yellow; background: darkblue");
  } else {
    homeScoreEl.removeAttribute("style", "border: .2rem solid yellow; background: darkblue");
    guestScoreEl.removeAttribute("style", "border: 2rem solid yellow; background: darkblue");
  };
}

//* POINT DIFFERENTIAL (HOMETEAM ADV) TO BE CALLED ON EVERY SCORING BUTTON
function pointDifferential() {
  let differential = homeScore - guestScore;
  differentialEl.textContent = differential;
}

//* HOME TEAM SCORING FUNCTIONS
function addOneHome() {
  homeScore++;
  homeScoreEl.textContent = homeScore;
  topScore();
  pointDifferential();
};

function addTwoHome() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
  topScore();
  pointDifferential();
};

function addThreeHome() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
  topScore();
  pointDifferential();
};

//* AWAY(GUEST) TEAM SCORING FUNCTIONS
function addOneGuest() {
  guestScore++;
  guestScoreEl.textContent = guestScore;
  topScore();
  pointDifferential();
};

function addTwoGuest() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
  topScore();
  pointDifferential();
};

function addThreeGuest() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
  topScore();
  pointDifferential();
};


