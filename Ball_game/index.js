/*
Most football fans love it for the goals and excitement.
You are to handle the referee's little notebook and count the players
who were sent off for fouls and misbehavior.

The rules: Two teams, named "A" and "B" have 11 players each;
players on each team are numbered from 1 to 11.
Any player may be sent off the field by being given a red card.
A player can also receive a yellow warning card, which is fine,
but if he receives another yellow card, he is sent off immediately (no need for a red card in that case).
If one of the teams has less than 7 players remaining, the game is stopped immediately by the referee,
and the team with less than 7 players loses.
A card is a string with the team's letter ('A' or 'B'), player's number, and card's color ('Y' or 'R')
- all concatenated and capitalized. e.g the card 'B7Y' means player #7 from team B received a yellow card.

The task: Given a list of cards (could be empty), return the number of remaining players on each team at the end of the game
(as a tuple of 2 integers, team "A" first). If the game was terminated by the referee for insufficient number of players,
you are to stop the game immediately, and ignore any further possible cards.

Note for the random tests: If a player that has already been sent off receives another card - ignore it.

*/


function game(cards) {
    const PLAYERS_BALL_BREAK = 7;
    let team1WithCards = [];
    let team2WithCards = [];
    let teamsPlayers = [11,11];


    if (cards.length === 0) {
        return teamsPlayers;
    }

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const team = card[0];
        const playerNumber = card.slice(1, card.length - 1);
        const cardValue = card[card.length - 1];


        if (team === 'A') {
            const playerFirstTeam = team1WithCards.find(el => el.player === playerNumber);

            if (playerFirstTeam) {
                if (playerFirstTeam.card === 'Y') {
                    playerFirstTeam.card = 'R';
                    teamsPlayers[0] = teamsPlayers[0] - 1;
                } else if (playerFirstTeam.card === 'R') {
                  continue;
                }

                if (teamsPlayers[0] < PLAYERS_BALL_BREAK) {
                    return teamsPlayers;
                }

            } else {
                team1WithCards.push({ player: playerNumber, card: cardValue});
                const playerFirstTeam = team1WithCards.find(el => el.player === playerNumber);

                if (playerFirstTeam.card === 'R') {
                    teamsPlayers[0] = teamsPlayers[0] - 1;
                }
            }
        } else {
            const playerSecondTeam = team2WithCards.find(el => el.player === playerNumber);

            if (playerSecondTeam) {
                if (playerSecondTeam.card === 'Y'){
                    playerSecondTeam.card = 'R';
                    teamsPlayers[1] = teamsPlayers[1] - 1;
                } else if (playerSecondTeam.card === 'R') {
                    continue;
                }
                if (teamsPlayers[0] < PLAYERS_BALL_BREAK) {
                    return teamsPlayers;
                }

            } else {
                team2WithCards.push({player: playerNumber, card: cardValue});
                const playerSecondTeam = team2WithCards.find(el => el.player === playerNumber);

                if (playerSecondTeam.card === 'R') {
                    teamsPlayers[1] = teamsPlayers[1] - 1;
                }
            }
        }
    }
    return teamsPlayers;
}
game(['A5Y', 'B3R', 'B3Y', 'A1R', 'A9R', 'A7Y', 'B5Y', 'A2R', 'A10R', 'B8Y', 'A7Y', 'B7Y','B5Y', 'B7R', 'B2Y', 'B4Y','A3Y','B5Y', 'B8Y', 'B11Y', 'B11Y']);










