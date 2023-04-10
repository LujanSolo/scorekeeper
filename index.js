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


//* TOP SCORING TEAM'S SCOREBOX BECOMES HIGHLIGHTED
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

// add a NEWGAME button that resets the scores to 0, and resets the TIMER if there is one



//* HOME TEAM SCORING FUNCTIONS
function addOneHome() {
  homeScore++;
  homeScoreEl.textContent = homeScore;
  topScore();
};

function addTwoHome() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
  topScore();
};

function addThreeHome() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
  topScore();
};

//* AWAY(GUEST) TEAM SCORING FUNCTIONS
function addOneGuest() {
  guestScore++;
  guestScoreEl.textContent = guestScore;
  topScore();
};

function addTwoGuest() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
  topScore();
};

function addThreeGuest() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
  topScore();
};


