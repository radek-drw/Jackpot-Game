class Game {
  constructor(money) {
    this.wallet = new Wallet(money);
    this.stats = new Statistics();

    this.cards = document.querySelectorAll('.card');
    this.spanWallet = document.querySelector('.wallet');

    this.render();
  }

  render(
    colors = ['gray', 'gray', 'gray'],
    money = this.wallet.getWalletValue()
  ) {
    this.cards.forEach((card, index) => {
      card.style.backgroundColor = colors[index];
    })
    this.spanWallet.textContent = money;
  }

  startGame() {

  }
}