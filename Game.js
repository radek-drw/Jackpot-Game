class Game {
  constructor(money) {
    this.colors = ['red', 'green', 'blue'];
    this.wallet = new Wallet(money);
    this.stats = new Statistics();

    this.cards = document.querySelectorAll('.card');
    this.spanWallet = document.querySelector('.wallet');
    this.spanResult = document.querySelector('.game-result');
    this.gameCount = document.querySelector('.games-number');
    this.wins = document.querySelector('.wins');
    this.losses = document.querySelector('.losses');

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
    } else if (!result && result != '') {
      result = `You lost: ${bid}$`
    }
    this.spanResult.textContent = result;

    this.gameCount.textContent = stats[0];
    this.wins.textContent = stats[1];
    this.losses.textContent = stats[2];
  }

  startGame() {

  }

}