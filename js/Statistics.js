class Statistics {
  constructor() {
    this.gameResults = [];
  }

  addGameToResults(win, bid) {
    this.gameResults.push({ win, bid })
  }

  showGameResults() {
    let games = this.gameResults.length;
    let wins = this.gameResults.filter(result => result.win).length;
    let losses = this.gameResults.filter(result => !result.win).length;

    return [games, wins, losses];
  }
}