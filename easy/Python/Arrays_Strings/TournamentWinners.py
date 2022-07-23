# o(n) time | o(n) space
def tournamentWinner(competitions, results):
    set = {}
    winner = ""
    for comp, res in zip(competitions, results):
        team1, team2 = comp
        winner = team1 if res == 1 else team2
        total = set.get(winner, 0)
        total += 3
        set[winner] = total
    return max(set, key=set.get)

# o(n^2) time | o(n) space
def tournamentWinnerFor(competitions, results):
    set = {}
    for i in range(len(competitions)):
        for j in range(len(competitions[i])):
            if competitions[i][j] in set:
                break
            else:
                set[competitions[i][j]] = 0

    for k in range(len(results)):
        if results[k] == 0:
            set[competitions[k][1]] += 3
        else:
            set[competitions[k][0]] += 3
    return max(set, key=set.get)


competitions = [
  ["HTML", "Java"],
  ["Java", "Python"],
  ["Python", "HTML"]
]

results = [0, 1, 1]

print(tournamentWinner(competitions, results))
print(tournamentWinnerFor(competitions, results))
