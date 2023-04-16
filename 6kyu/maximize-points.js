// Task
// Two teams are playing a game of tennis. The team sizes are the same and each player from the first team plays against the corresponding player from the second team.



// Each player has a certain power level. If a player has a higher power level than her opponent, she is guaranteed to win and her team would get 1 point for that win while the opponents get a 0.

// You are the coach of the first team and you know the power levels of all the players before the game starts. You want to rearrange the players in your team to earn the highest possible total score.

// Input/Output
// [input] integer array team1
// The power levels of the players in the first team. Teams have less than 100 players and each power level is less than 100.

// [input] integer array team2
// Array of the same length as team1, the power levels of the players of the second team.

// [output] an integer
// The maximum number of points the first team can get.

// Example
// For team1 = [3,2,4] and team2 = [1,2,3], the output should be 3.

// If you don't rearrange the players in the first team, it will get 2 points, since 3 > 1, 2 = 2 and 4 > 3.

// However, if you rearrange the order of the players to [2, 3, 4], the first team will get 3 points.

function maximizePoints(team1, team2){
    for (power2 of team2) {
        // array for each power of team 2 of the difference between each power team 2
        const diffArr = []
        for (i=0; i<team1.length; i+=1){
            const power1 = team1[i]
            // diff between each team1 power and each team2 power
            // we want the diff to the smallest positive integer
            const diff = power1 - power2
            diffArr.push({power1Index: i, diff: diff})
            console.log("t2:", power2, "t1:", power1, "diff:", diff)
        }
        // console.log("diffArr for", power2, ":", diffArr)

        diffArr.sort((a, b) => a.diff > b.diff ? 1 : -1)

        console.log("diffArr sorted:", diffArr)

        // swap power1s on team1
        console.log(team1)
        console.log(team1[0])
        console.log(team1[diffArr[0].power1Index])

        // team1[0] = team1[diffArr[0].power1Index]
        // team1[diffArr[0].power1Index] = team1[0]

        const valToAdd = team1[diffArr[0].power1Index]
        team1.splice(diffArr[0].power1Index, 1)
        team1.unshift(valToAdd)
        // [team1[0], team1[diffArr[0].power1Index]] = team1[diffArr[0].power1Index], team1[0]

        console.log(team1)
        console.log(team2)
    }

    return "function ran"
}

console.log(maximizePoints([3,2,4], [1,2,3]))

// maximizePoints([25, 7, 26, 48],[1, 36, 5, 33])   =>   3