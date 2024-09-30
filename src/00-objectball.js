function gameObjects() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}

// Call the function and log the output
console.log(gameObject());

//console.log(gameObject())
// take player argument and return the number of points for that player
function numPointsScored(playerName){
    const game = gameObject();
    for(let team in game){
        const players = game[team].players;
        if (players[playerName]){
            return players[playerName].points;
        }
    }
    return 0;
}
numPointsScored()
//takes in an argument of a player's name and returns the shoe size for that player.
function shoeSize(playerName){
    const game = gameObject();
    for (let team in game){
        const players = game [team].players
        if (players[playerName]){
            return players[playerName].shoe;
        }
    }
    return 0;
}
shoeSize();
//takes in an argument of the team name and returns an array of that teams colors.
function teamColors(teamName){
    const game = gameObject();
    for (let team in game){
        if (game[team].teamName === teamName){
            return game[team].colors;
        }
    }
    return [];
}
teamColors()
//operates on the game object to return an array of the team names.
function teamNames(){
    const game= gameObject();
    return [game.home.teamName, game.away.teamName];
}
teamNames()
//takes in an argument of a team name and returns an array of the jersey numbers for that team.
function playerNumbers(teamName){
    const game= gameObject();
    for (let team in game){
        if (game[team].teamName === teamName){
            return Object.values(game[team].players).map(player =>player.number);
        }
    }
    return [];
}
playerNumbers()
//takes in an argument of a player's name and returns an object of that player's stats.
function playerStats(playerName){
    const game= gameObject();
    for (let team in game){
        const players = game[team].players
        if (players[playerName]){
            return players[playerName];
        }
    }
    return {};
}
playerStats()
//will return the number of rebounds associated with the player that has the largest shoe size.
function bigShoeRebounds(){
    const game = gameObject();
    let largestShoeSize = 0;
    let rebounds = 0;

for (let team in game){
    const players = game[team].players;
    for (let player in players){
        if (players[player].shoe > largestShoeSize){
            largestShoeSize = players[player].shoe;
            rebounds = players[player]
        }
    }
}
return rebounds;
}
bigShoeRebounds()
//player has the most points
function mostPointsScored(){
    const game = gameObject();
    let maxPoints = 0;
    let playerName = "";
    for (let team in game ){
        const players = game[team].players;
        for(let player in players ){
            if (players[player].points > maxPoints){
                maxPoints = players[player].points;
                playerName = player
            }
        }
    }
    return playerName;
}
mostPointsScored();
//team has the most points
function winningTeam(){
    const game =gameObject();
    let homePoints = 0;
    let awayPoints = 0;
    for (let player in game.home.players){
        homePoints += game.home.players[player].points;
    }
    for (let player in game.away.players){
        awayPoints += game.away.players[player].points;
    }
    return homePoints > awayPoints ? game.home.teamName : game.away.teamName; 
} 
winningTeam()
//player has the longest name
function playerWithLongestName(){
    const  game = gameObject();
    let longestName = "";
    for (let team in game){
        const players =game[team].players;
        for(let player in players){
            if (player.length > longestName.length){
                longestName = player;
            }
        } 
    }
    return longestName;
}
playerWithLongestName()
// returns true if the player with the longest name had the most steals.
function doesLongNameStealATon(){
    const longestName = playerWithLongestName();
    const playerStatsInfo = playerStats(longestName);
    let maxSteals = 0;
    const game = gameObject();
    for(let team in game){
        const players = game[team].players;
        for (let player in players){
            if (players[player].steals > maxSteals){
                maxSteals = players[player].steals;
            }
        }
    }
    return playerStatsInfo.steals === maxSteals;
}
doesLongNameStealATon();
// examples using debugger console
console.log(numPointsScored("Alan Anderson")); 
console.log (shoeSize("Reggie Evans"));
console.log(teamColors("Brooklyn Nets"));
console.log(playerNumbers("Charlotte Hornets"))
console.log(playerStats("Brook Lopez"))
console.log(bigShoeRebounds())
console.log(mostPointsScored())
console.log(winningTeam())
console.log(playerWithLongestName())
console.log(doesLongNameStealATon())