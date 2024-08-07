# Jackpot Game

This is a simple jackpot-style game implemented in JavaScript. Players can bet money on a color-matching game for a chance to win.

## Game Description

The game involves three colored cards. Players place a bet, and three colors are randomly drawn. The player wins if all three colors match or if all three colors are different. 

## Features

- Random color generation for each game
- Betting system with wallet management
- Statistics tracking (games played, wins, losses)
- Simple UI with color display and results

## How to Play

1. Enter your bet amount
2. Click the "Play" button
3. Three colors will be randomly selected
4. You win if all colors match or if all colors are different
5. Winning bets pay out 3x the bet amount

## Code Structure

The game is implemented using several JavaScript classes:

- `Draw`: Handles the random color selection
- `Game`: Main game logic and UI management
- `Result`: Determines game outcomes and winnings
- `Statistics`: Tracks game results
- `Wallet`: Manages the player's money
