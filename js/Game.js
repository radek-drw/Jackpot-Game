class Game {
  constructor(money) {
    this.colors = ['red', 'green', 'blue'];
    this.wallet = new Wallet(money);
    this.stats = new Statistics();

    this.cards = document.querySelectorAll('.card');
    this.bidValue = document.querySelector('.bid-value');
    this.spanWallet = document.querySelector('.wallet');
    this.spanResult = document.querySelector('.game-result');
    this.gameCount = document.querySelector('.games-number');
    this.wins = document.querySelector('.wins');
    this.losses = document.querySelector('.losses');
    document.querySelector('.play').addEventListener('click', this.startGame.bind(this));

    this.render();
  }

  render(
    colors = ['gray', 'gray', 'gray'],
    money = this.wallet.getWalletValue(),
    result = '',
    wonMoney = 0,
    bid = 0,
    stats = [0, 0, 0]
  ) {

    this.cards.forEach((card, index) => {
      card.style.backgroundColor = colors[index]
    })
    this.spanWallet.textContent = `${money}$`;

    if (result) {
      result = `You won: ${wonMoney}$`
    } else if (!result && result !== '') {
      result = `You lost: ${bid}$`
    }
    this.spanResult.textContent = result;

    this.gameCount.textContent = stats[0];
    this.wins.textContent = stats[1];
    this.losses.textContent = stats[2];
  }

  startGame() {
    const bid = Math.floor(this.bidValue.value);
    this.bidValue.value = '';

    if (bid < 1) return alert('Bid value has to be at least 1$');

    if (!this.wallet.checkCanPlay(bid)) return alert('Your money amount is too low to play');

    const draw = new Draw();

    const gameResult = Result.checkWinner(draw.getDrawResult());
    this.stats.addGameToResults(gameResult, bid);

    const wonMoney = Result.moneyWinInGame(gameResult, bid);

    if (wonMoney) {
      this.wallet.changeWalletValue(wonMoney);
    } else {
      this.wallet.changeWalletValue(bid, '-');
    }

    this.render(
      draw.getDrawResult(),
      this.wallet.getWalletValue(),
      gameResult,
      wonMoney,
      bid,
      this.stats.showGameResults()
    )
  }

}