import React, { useState } from 'react';

const initialGame = () => Array(9).fill(null);

const useTicTacToe = () => {
  const [game, setGame] = useState(initialGame());
  const [isXnext, setIsXNext] = useState(true);

  const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinner = (currentBoard) => {
    for (let i = 0; i < winningCombination.length; i++) {
      let [a, b, c] = winningCombination[i];

      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        return currentBoard[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    let winner = calculateWinner(game);

    if (winner || game[index]) return;

    let newBoard = [...game];
    newBoard[index] = isXnext ? 'X' : 'O';
    setGame(newBoard);
    setIsXNext(!isXnext);
  };

  const getStatusDisplay = () => {
    let winner = calculateWinner(game);

    if (winner) return `Player ${winner} wins`;
    if (!game.includes(null)) return "It's a Draw";

    return `Player ${isXnext ? 'X' : 'O'} turn`;
  };

  const resetGame = () => {
    setGame(initialGame());
    setIsXNext(true);
  };

  return { game, isXnext, handleClick, getStatusDisplay, resetGame };
};

export default useTicTacToe;
