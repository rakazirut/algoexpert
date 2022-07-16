/*

  There's an algorithms tournament taking place in which teams of programmers
  compete against each other to solve algorithmic problems as fast as possible.
  Teams compete in a round robin, where each team faces off against all other
  teams. Only two teams compete against each other at a time, and for each
  competition, one team is designated the home team, while the other team is the
  away team. In each competition there's always one winner and one loser; there
  are no ties. A team receives 3 points if it wins and 0 points if it loses. The
  winner of the tournament is the team that receives the most amount of points.


  Given an array of pairs representing the teams that have competed against each
  other and an array containing the results of each competition, write a
  function that returns the winner of the tournament. The input arrays are named
  competitions and results, respectively. The competitions array has elements in the form of
  [homeTeam, awayTeam], where each team is a string of at most 30
  characters representing the name of the team. The results  array
  contains information about the winner of each corresponding competition in the competitions
   array. Specifically, results[i] denotes
  the winner of competitions[i], where a 1 in the results array means that the home team in the corresponding
  competition and a 0 means the away team won


  It's guaranteed that exactly one team will win the tournament and that each
  team will compete against all other teams exactly once. It's also guaranteed
  that the tournament will always have at least two teams.

  */

/*
My solution
o(n^2) time | o(n) space
*/

// function tournamentWinner(competitions, results) {
//     let compResults = {}
//     for (let i = 0; i < competitions.length; i++) {
//         for (let j = 0; j < competitions[i].length; j++) {
//             if (competitions[i][j] in compResults) {
//                 break
//             } else {
//                 compResults[competitions[i][j]] = 0
//             }
//         }
//     }

//     for (let k = 0; k < results.length; k++) {
//         if (results[k] === 0) {
//             compResults[competitions[k][1]] += 3
//         } else {
//             compResults[competitions[k][0]] += 3
//         }
//     }
    
//     const maxPoints = Math.max(...Object.values(compResults))
//     return Object.keys(compResults).find(team => compResults[team] === maxPoints);
// }

/* 
AlgoExpert Solution 
O(n) time | O(n) space
*/

const HOME_TEAM_WON = 1;
function tournamentWinner(competitions, results) {
    let currentBestTeam=""
    const scores = {[currentBestTeam]: 0}

    for(let idx = 0; idx < competitions.length; idx++){
        const result = results[idx]
        const [home, away] = competitions[idx]

        const winningTeam = result === HOME_TEAM_WON ? home : away;
        updateScores(winningTeam, 3, scores)

        if(scores[winningTeam]>scores[currentBestTeam]){
            currentBestTeam = winningTeam
        }
    }
    return currentBestTeam
}

function updateScores(team, points, scores){
    if(!(team in scores)) scores[team] = 0
    scores[team]+=points
}

let competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
]
let results = [0, 0, 1]
let ans = tournamentWinner(competitions, results)
console.log(ans)

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;