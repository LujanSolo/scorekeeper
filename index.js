// set variables for homeScore and guestScore
let homeScoreEl = document.getElementById('home-el');
let guestScoreEl = document.getElementById('guest-el');

homeScoreEl.textContent = 0;
guestScoreEl.textContent = 0;

let homeScore = 0;
let guestScore = 0;


// build functions for onclick events +1, +2, +3
function addOneHome() {
  homeScore++;
  homeScoreEl.textContent = homeScore;
}