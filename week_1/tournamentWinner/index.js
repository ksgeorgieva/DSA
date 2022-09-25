const competitions = [
    ['HTML', 'C#'],
    ['C#', 'Python'],
    ['Python', 'HTML'],
];
const results = [0, 0, 1];

const tournamentWinner = (competitions, results) => {
    let teamWithHighestScore = '';

    const tournamentResults = {};

    competitions.forEach(([homeTeam, awayTeam], index) => {
        const currentResult = results[index];
        const winningTeam = currentResult
            ? homeTeam
            : awayTeam;
    
        tournamentResults[winningTeam] = tournamentResults[winningTeam]
            ? tournamentResults[winningTeam] + 1
            : 1;

        teamWithHighestScore = teamWithHighestScore
            ? tournamentResults[teamWithHighestScore] < tournamentResults[winningTeam]
                ? winningTeam
                : teamWithHighestScore 
            : winningTeam;
    });

    return teamWithHighestScore;
}

console.log(tournamentWinner(competitions, results))