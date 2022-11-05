class Statistics {
  constructor() {
    this.gameResults = [{ win: true, bid: 10 }, { win: false, bid: -20 }];
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

const stats = new Statistics();